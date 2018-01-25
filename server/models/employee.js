
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
    },
  });
  return Employee;
};
