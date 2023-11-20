const db = require('../../database/index');
class CategoryRepository {
  async findAll() {
    const rows = await db.query(
      `SELECT * FROM categories ORDER BY name ASC`,
    );
    console.log('CategoryRepository:findAll() => row', rows);
    return rows;
  }

  async create(name) {
    const row = await db.query(
      `INSERT INTO categories (name)
       VALUES ($1)
       RETURNING *
      `
      ,[name] // $number previne sql injection
    );
    console.log('CategoryRepository:create() => row', row);
    return row;
  }
}

module.exports = new CategoryRepository();
