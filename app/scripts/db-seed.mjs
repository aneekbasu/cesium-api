import {v4 as uuid} from 'uuid'
import  db from '../../config/db.mjs'

async function seed() {
  //Delete all existing sites and create some dummy sites.
  try {
    await db("construction_sites").delete();
    for (let i = 0; i < 10; i++) {
    const project = await db("construction_sites")
      .insert({
        id: uuid(),
      })
      .returning("*");
    console.log(`Created construction site with id ${project[0].id}`);
    }
  } catch (err) {
    console.error(err)
  } finally {
    db.destroy()
  }
}

seed()