module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'development',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};