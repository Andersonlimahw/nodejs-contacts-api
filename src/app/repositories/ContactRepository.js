let contacts = require("../mocks/contacts");

class ContactRepository {

  findAll() {
    return new Promise((resolve, reject) => { resolve(contacts) });
  }

  findById(id) {
    return new Promise((resolve, reject) => { resolve(contacts.find((x) => x.id === id)) });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      contacts = contacts.filter((x) => x.id !== id)
      resolve(contacts);
     });
  }
}

module.exports = new ContactRepository();
