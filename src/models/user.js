const { v4: uuidv4 } = require('uuid');
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
    await super.$beforeInsert(queryContext);

    this.id = uuidv4();
    this.createdAt = new Date().toISOString();
  }

  async $beforeUpdate(queryContext) {
    await super.$beforeUpdate(queryContext);

    this.updatedAt = new Date().toISOString();
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
        createdAt: { type: 'object' },
        updatedAt: { type: 'object' },
        lastLogin: { type: 'object' }
      }
    }
  }
}

module.exports = User;