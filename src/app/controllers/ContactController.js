class ContactController {

  index(request, response) {
    // Listar todos os registros  GET endpoint/:id
    response.send({ message: '🍋 Hello World!' });
  }

  show() {
    // Obter um registro exemplo GET endpoint/:id
  }

  store() {
    // Criar um registro exemplo POST endpoint/
  }

  update() {
    // atualizar um registro exemplo PUT endpoint/:id
  }

  delete() {
    // remover um registro exemplo DELETE endpoint/:id
  }
}

// Singleton
module.exports = new ContactController();
