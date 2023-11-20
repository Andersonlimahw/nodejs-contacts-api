const ContactRepository = require("../repositories/ContactRepository");

class ContactController {

  async index(request, response) {
    // Listar todos os registros  GET endpoint/:id
    const { orderBy } = request.query;
    const contacts = await ContactRepository.findAll(orderBy || 'ASC');
    response.json(contacts);
  }

  async show(request, response) {
    // Obter um registro exemplo GET endpoint/:id
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if(!contact){
      return response.status(404).json({ error: `User not found with id ${id}`});
    }
    response.json(contact);
  }

  async store(request, response) {
    // Criar um registro exemplo POST endpoint/
    const { name, email, phone, category_id } = request.body;

    if(!name) {
      return response.status(400).json({ error: `name is required`});
    }

    if(!email) {
      return response.status(400).json({ error: `email is required`});
    }

    const contactExists = await ContactRepository.findByEmail(email);
    if(contactExists){
      return response.status(400).json({ error: `User with e-mail ${email} all ready exists`});
    }

    const contact = await ContactRepository.create({
      name,
      email,
      phone,
      category_id
    });

    response.status(201).json(contact);
  }

  async update(request, response) {
    // atualizar um registro exemplo PUT endpoint/:id
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    if(!id) {
      return response.status(400).json({ error: `id is required`});
    }

    if(!name) {
      return response.status(400).json({ error: `name is required`});
    }

    if(!email) {
      return response.status(400).json({ error: `email is required`});
    }

    const contactExists = await ContactRepository.findById(id);
    if(!contactExists){
      return response.status(404).json({ error: `User with id ${id} not found.`});
    }

    const contactExistsByEmail = await ContactRepository.findByEmail(email);
    if(contactExistsByEmail && contactExistsByEmail.id !== id){
      return response.status(400).json({ error: `User with e-mail ${email} all ready exists`});
    }

    await ContactRepository.update({
      id,
      name,
      email,
      phone,
      category_id
    });

    response.sendStatus(204);
  }

  async delete(request, response) {
    // remover um registro exemplo DELETE endpoint/:id
    const { id } = request.params;
    await ContactRepository.delete(id)

    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
