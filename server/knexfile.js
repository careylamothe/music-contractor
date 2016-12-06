// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/orchestradb'
  },

  seeds: {
    directory: './seeds/dev'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
