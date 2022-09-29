import { v4 as uuidv4 } from 'uuid';
const { Model, snakeCaseMappers } = require('objection');
const Knex = require('knex');
const knexConfig = require('../../knexfile');
// Initialize knex.
const knex = Knex(knexConfig.development);
// Bind all Models to the knex instance. You only
// need to do this once before you use any of
// your model classes.
Model.knex(knex);

class User extends Model {
  static get tableName() {
    return 'users';
  }

  async $beforeInsert(queryContext) {
// TODO: Not sure why this wont work
console.log('*******')
    await super.$beforeInsert(queryContext);

    this.createdAt = Date.now();
    this.id = uuidv4();
  }

  async $beforeUpdate(queryContext) {
    await super.$beforeUpdate(queryContext);

    this.updatedAt = Date.now();
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' },
        lastLogin: { type: 'string'}
      }
    }
  }
}

module.exports = User;