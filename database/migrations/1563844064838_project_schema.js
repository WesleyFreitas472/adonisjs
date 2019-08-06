'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table
        .integer('user_id') //tipo e nome do atributo
        .unsigned() //valores inteiros
        .references('id') //a quem esse atributo faz referencia
        .inTable('users') //em qual tabela está a referencia
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('title').notNullable() //nome e tipo do atributo - not null
      table.text('description').notNullable() //nome e tipo do atributo - not null
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
