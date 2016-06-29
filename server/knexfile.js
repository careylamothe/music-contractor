// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/orchestradb'
    // migrations:
    //   tableName: 'knex_migrations'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
    // migrations:
    //   tableName: 'knex_migrations'

    }
    
};
