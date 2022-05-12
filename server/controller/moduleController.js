// eslint-disable-next-line import/no-unresolved
const {
  // User,
  Modules,
  JSmodule,
  JSbasicQuestions,
  JSbasicAnswer,
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

  async getJsModule(req, res) {
    const { id } = req.params;
    const module = await JSmodule.findAll({
      raw: true,
      where: { moduleId: id },
      include: [{ model: JSbasicQuestions, include: [{ model: JSbasicAnswer }] }],
    });
    return res.status(200).json(module);
  }

  async getOneModule(req, res) {
    const { moduleTopics } = req.params;
    const module = await Modules.findAll({
      raw: true,
      where: { titleModules: moduleTopics },
      include: [{ model: JSmodule }],
    });
    return res.status(200).json(module);
  }
}

module.exports = new ModuleController();
