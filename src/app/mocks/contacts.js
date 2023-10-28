const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: "Anderson Lima",
    email: 'anderson@mail.com',
    phone: '11989829895',
    category_id: uuid()
  },
  {
    id: uuid(),
    name: "Jose Lima",
    email: 'jose@mail.com',
    phone: '11989829895',
    category_id: uuid()
  }
]

module.exports = contacts;
