const { v4: uuidv4 } = require('uuid');
const { Model, snakeCaseMappers } = require('objection');
const BaseModel = require('./baseModel')
const Knex = require('knex');
const knexConfig = require('../../knexfile');
// Initialize knex.
const knex = Knex(knexConfig.development);
// Bind all Models to the knex instance. You only
// need to do this once before you use any of
// your model classes.
Model.knex(knex);

class User extends BaseModel {
  static get tableName() {
    return 'users';
  }

  async $beforeInsert(queryContext) {
    await super.$beforeInsert(queryContext);

    this.id = uuidv4();
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' },
        lastLogin: { type: 'string', format: 'date-time' }
      }
    }
  }
}

module.exports = User;