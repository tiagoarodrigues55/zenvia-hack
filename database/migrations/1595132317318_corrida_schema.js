'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CorridaSchema extends Schema {
  up () {
    this.create('corridas', (table) => {
      table.increments()
      table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('endereço0').notNullable()
      table.string('endereço1').notNullable()
      table.string('coordenada0').notNullable()
      table.string('coordenada1').notNullable()
      table.boolean('completa').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('corridas')
  }
}

module.exports = CorridaSchema
