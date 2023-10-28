const { uuid } = require("uuidv4");
let contacts = require("../mocks/contacts");

class ContactRepository {

  findAll() {
    return new Promise((resolve, reject) => { resolve(contacts) });
  }

  findById(id) {
    return new Promise((resolve, reject) => { resolve(contacts.find((x) => x.id === id)) });
  }

  findByEmail(email) {
    return new Promise((resolve, reject) => { resolve(contacts.find((x) => x.email === email)) });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      contacts = contacts.filter((x) => x.id !== id)
      resolve(contacts);
    });
  }

  create({
    name,
    email,
    phone,
    category_id
  }) {
    return new Promise((resolve, reject) => {
      const id =  uuid();
      contacts.push({
        id,
        name,
        email,
        phone,
        category_id
      })
      resolve({
        id
      });
    });
  }
}

module.exports = new ContactRepository();
