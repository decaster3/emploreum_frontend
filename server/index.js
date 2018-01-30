/* eslint consistent-return:0 */

const express = require('express');
const flash = require('express-flash');
const logger = require('./logger');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const routes = require('./routes/index');
const users = require('./routes/users');
const Employee = require('./models').Employee;
const app = express();
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => Employee.findById(id)
    .then((user) => done(null, user)));

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
},
  (username, password, done) => {
    // console.log('0987');
    Employee.findOne({
      where: { email: username },
    }).then((employee, err) => {
      if (err) {
        done(err);
      }
      if (!employee) {
        done(null, false, { message: 'Incorrect username.' });
      }
      if (!employee.validPassword(password)) {
        done(null, false, { message: 'Incorrect password.' });
      }
      done(null, employee);
    });
  }
));

// app.use(logger('dev'));
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('serve-static')(`${__dirname}/../public`));
app.use('/', routes);
app.use('/olo', users);
app.use('/users', users);
app.use(passport.initialize());
app.use(passport.session());


// authentication(app);

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// Start your app.
app.listen(port, host, (err) => {
  // db.sequelize.sync();
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
