const { faker } = require('@faker-js/faker');
const User = require('./src/models/user');

const seedUser = async () => {
  await User.query()
    .insert({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    }).returning('*')
}

seedUser()
