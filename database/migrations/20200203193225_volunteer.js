
exports.up = async function (knex) {
    await knex.schema.createTable("volunteer", (table) => {
        table.increments("id").primary
        table.string("username", 280).notNullable().unique()
        table.string("password", 280).notNullable()
        table.string("name", 280)
        table.bigint("phone")
    })
}

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("volunteer")
};