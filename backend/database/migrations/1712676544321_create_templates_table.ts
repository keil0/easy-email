import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'templates'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('subject').nullable()
      table.string('sub_title').nullable()
      table.jsonb('content').notNullable()
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
