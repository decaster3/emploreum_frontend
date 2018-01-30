const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    photo: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    father_name: DataTypes.STRING,
    bio: DataTypes.TEXT,
  }, {
    classMethods: {
      associate(/* models*/) {
        // associations can be defined here
      },
      hooks: {
        beforeCreate(user, options, next) {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (errM, hash) => {
              this.password = hash;
              next(null, user);
            });
          });
        },
      },
    },
  });
  Employee.prototype.validPassword = function (password) {
    console.log(this.password);
    console.log(bcrypt.hashSync(password));
    console.log(bcrypt.compareSync(password, this.password));
    return bcrypt.compareSync(password, this.password);
  };
  console.log(Employee.name);
  return Employee;
};

// Employee.prototype.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };
// console.log(Employee.name);
//
// module.exports = Employee;
