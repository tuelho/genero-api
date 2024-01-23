import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'nomes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.text('alternative_names')
      table.text('classification')
      table.text('first_name')
      table.integer('frequency_female')
      table.integer('frequency_male')
      table.integer('frequency_total')
      table.integer('frequency_group')
      table.text('group_name')
      table.double('ratio')

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
