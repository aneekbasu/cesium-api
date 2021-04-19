import config from './index.mjs'
import pg from 'pg'
import knex from 'knex'
const pool = new pg.Pool(config.connection)

const client = knex({
  client: config.db,
  connection: config.connection,
  pool: { min: 0, max: 7 }
});
// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
/*pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})*/

export default client