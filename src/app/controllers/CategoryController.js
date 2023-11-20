const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const rows = await CategoryRepository.findAll();
    response.json(rows).status(200);
  }

  async store(request, response) {
    const { name } = request.body;
    if(!name) {
      return response.status(404).json({ error: `name is required.`});
    }
    const [row] = await CategoryRepository.create(name);
    response.json(row).status(200);
  }
}


module.exports = new CategoryController();
