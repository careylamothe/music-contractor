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
    connection: 'postgres://gqprdrxmrksqmw:9dplxf68IeOLtvdactIxjfWcQk@ec2-54-243-42-108.compute-1.amazonaws.com:5432/d66v0hr3f9bvds'
  }

};

// connection: process.env.DATABASE_URL
