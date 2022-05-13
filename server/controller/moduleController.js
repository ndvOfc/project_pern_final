/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/no-unresolved
const {
  Modules,
  JSmodule,
  EXPRESSmodule,
  REACTmodule,
  NODEmodule,
  JSbasicQuestion,
  JSbasicAnswer,
  JSfunctionQuestion,
  JSfunctionAnswer,
  JSES6Question,
  JSES6Answer,
} = require('../db/models/models');

const allModels = [Modules,
  JSmodule,
  EXPRESSmodule,
  REACTmodule,
  NODEmodule,
  JSbasicQuestion,
  JSbasicAnswer,
  JSfunctionQuestion,
  JSfunctionAnswer,
  JSES6Question,
  JSES6Answer];

const currentModel = (model, params) => model.filter((el) => el.name === params)[0];

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
      include: [{ model: JSbasicQuestion, include: [{ model: JSbasicAnswer }] }],
    });
    return res.status(200).json(module);
  }

  async getOneModule(req, res) {
    const { moduleTopics } = req.params;

    const param = `${moduleTopics}module`;
    // console.log('>>>>>>>>>>>>>>> ', param);
    const module = await Modules.findAll({
      raw: true,
      where: { titleModules: moduleTopics },
      include: [{ model: currentModel(allModels, param) }],
    });
    // console.log(' >>>>>>>>>>>>>>>>>>  ', module);
    return res.status(200).json(module);
  }
}

module.exports = new ModuleController();
