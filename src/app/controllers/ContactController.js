const ContactRepository = require("../repositories/ContactRepository");

class ContactController {

  async index(request, response) {
    // Listar todos os registros  GET endpoint/:id
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // Obter um registro exemplo GET endpoint/:id
    const { id } = request.params;
    const contact = await await ContactRepository.findById(id);

    if(!contact){
      return response.status(404).json({ error: `User not found with id ${id}`});
    }
    response.json(contact);
  }

  store() {
    // Criar um registro exemplo POST endpoint/
  }

  update() {
    // atualizar um registro exemplo PUT endpoint/:id
  }

  async delete(request, response) {
    // remover um registro exemplo DELETE endpoint/:id
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);
    if(!contact){
      return response.status(404).json({ error: `User not found with id ${id}`});
    }

    await ContactRepository.delete(id)

    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
