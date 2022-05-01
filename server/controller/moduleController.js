const {
  // User,
  Modules,
  // JSmodule,
  // JSbasicQuestions,
  // JSbasicAnswer,
} = require('../db/models/models');

class ModuleController {
  async getModules(req, res) {
    try {
      const modules = await Modules.findAll({ raw: true });
      res.status(200).json(modules);
    } catch (e) {
      res.status(400).json('что-то пошло не так при получении модулей ');
    }
  }
}

module.exports = new ModuleController();
