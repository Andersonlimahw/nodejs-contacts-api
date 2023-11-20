const { uuid } = require("uuidv4");
let contacts = require("../mocks/contacts");
const db = require('../../database/index');

class ContactRepository {

  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
    const rows = await db.query(`SELECT
      id,
      name,
      email,
      phone
      category_id
     FROM contacts
     ORDER BY name ${direction}`);
     return rows;
  }

  async findById(id) {
    const [row] = await db.query(`SELECT * FROM contacts WHERE id = $1`, [id]);
    console.log('ContactRepository: findById => row', row);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query(`SELECT * FROM contacts WHERE email = $1`, [email]);
    console.log('ContactRepository: findByEmail => row', row);
    return row;
  }

  async delete(id) {
    const deleteOperation = await db.query(`DELETE FROM contacts WHERE id = $1`, [id]);
    console.log('ContactRepository: delete => row', deleteOperation);
    return deleteOperation;
  }

  async create({
    name,
    email,
    phone,
    category_id
  }) {

    const [row] = await db.query(
      `INSERT INTO contacts (name, email, phone, category_id)
       VALUES ($1, $2, $3, $4)
       RETURNING *
      `
      ,[name, email, phone, category_id] // $number previne sql injection
    );
    console.log('ContactRepository:create() => row', row);
    return row;
  }

  async update({
    id,
    name,
    email,
    phone,
    category_id
  }) {
    const [row] = await db.query(`
      UPDATE contacts
      SET name = $1,
          email = $2,
          phone = $3,
          category_id = $4
      WHERE id = $5
    `, [name, email, phone, category_id, id]);
    return row;
  }
}

module.exports = new ContactRepository();
