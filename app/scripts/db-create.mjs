import db from '../../config/db.mjs'

async function create() {
  try{
    await  db.schema.createTable("construction_sites", (table) => {
      table.uuid("id").primary();
    })
    console.log(`Successfully created 'construction_sites' table.`)
    await db.schema.createTable('construction_materials', (t) => {
      t.string('id').primary()
      t.string('name')
      t.integer('volume').notNullable()
      t.integer('cost').notNullable()
      t.string('color',7).notNullable()
      t.date('delivery')
      t.uuid('site').references('id').inTable('construction_sites').notNull().onDelete('cascade');
    })
    console.log(`Successfully created 'construction_materials' table.`)
  } catch (err) {
    console.error(`Failed to create tables:`, err);
  } finally {
    db.destroy()
  }
}
  
create()



