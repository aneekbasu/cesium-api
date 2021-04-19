import _ from 'lodash'
import db from '../../config/db.mjs'
const tableName = 'construction_materials'


let insert = async (material) => {
    try {
      const query = await db(tableName)
        .insert(material)
        .returning('*')
      return query
    } catch (err) {
      console.error(err)
    }
}

let find = async (selectionCriteria) => {
  try {
    const query = await db(tableName)
      .where(selectionCriteria)
      .columns([
        db.raw('*, (cost * volume) as total')
      ])
    return query
  } catch (err) {
    console.error(err)
  }
}

let update = async (selectionCriteria, updateData) => {
    try {
      let query = await db(tableName)
        .where(selectionCriteria)
        .update(updateData)
      return query
    } catch (err) {
      console.error(err)
    }
}

let deleteOne = async (selectionCriteria) => {
    try {
      let query = await db(tableName)
        .where(selectionCriteria)
        .del()
      return query
    } catch (err) {
      console.error(err)
    }
}

export default {insert, find, update, deleteOne}