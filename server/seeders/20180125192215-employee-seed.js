const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  up(queryInterface, /* Sequelize*/) {
    return queryInterface.bulkInsert('Employees', [{
      first_name: 'Rinat',
      last_name: 'Gumarov',
      email: 'tiran678@icloud.com',
      password: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down(queryInterface, /* Sequelize*/) {
    queryInterface.bulkDelete('Employees', [{
      email: {
        [Op.eq]: 'tiran678@icloud.com',
      },
    }]);
  },
};
