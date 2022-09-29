const { faker } = require('@faker-js/faker');
const User = require('./src/models/user');
import { v4 as uuidv4 } from 'uuid';

const seedUser = async () => {
  await User.query()
  .insert({
    id: uuidv4(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email()
    createdAt: new Date()
  });
}

seedUser()
