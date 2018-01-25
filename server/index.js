/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const db = require('./models');

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('emploreum-dev', 'postgres', 'postgres', {
//   host: 'localhost',
//   dialect: 'postgres',
//   port: 5432,
//
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
//
//   operatorsAliases: false,
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });

// const Client = sequelize.define('client', {
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE,
// });

// const Usser = sequelize.define('usser', {
//   firstName: {
//     type: Sequelize.STRING,
//   },
//   lastName: {
//     type: Sequelize.STRING,
//   },
// });

// force: true will drop the table if it already exists
// Usser.sync({ force: true }).then(() =>
//   // Table created
//   Usser.create({
//     firstName: 'John',
//     lastName: 'Hancock',
//   }));

// sequelize.sync()
//   .then(() => Client.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20),
//   }))
//   .then((jane) => {
//     console.log(jane.toJSON());
//   });

// app.get('/users', (req, res) => {
//   console.log('INSIDE GET METHOD');
//   Client.findOne({
//     where: { id: '2' },
//     attributes: ['id', ['username', 'title']],
//   }).then((project) => {
//     if (project != null) { res.send(project); } else res.send('null');
//     // project will be the first entry of the Projects table with the title 'aProject' || null
//   });
// });

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  console.log(port);
  db.sequelize.sync();
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
