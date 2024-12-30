import { Project, Reunion } from '../models/crmModel.js'

const reunionCreate = async (req, res) => {
  try {
    const { title, attendees, duration, startMeeting, endMeeting, project } = req.body;
    const projectReunion = await Project.findOne({ project });
    if (!projectReunion) {
      return res.status(400).json({ message: 'Se debe indicar un nombre de un proyecto válido para asignar la reunión' });
    }
    const reunion = new Reunion({
      title,
      attendees,
      duration,
      startMeeting,
      endMeeting,
      project: projectReunion
    });
    await reunion.save();
    return res.status(201).json({reunion, message: 'Se ha creado la reunión correctamente'});
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const reunionGet = async (req, res) => {
  try {
    const { title } = req.body;
    const reunion = await Reunion.findOne({ title });
    if (!reunion) {
      return res.status(404).json({ message: 'No se ha encontrado una reunión' });
    }
    return res.json(reunion);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const reunionUpdate = async (req, res) => {
  try {
    const { title } = req.body;
    const reunion = await Reunion.findOne({ title });
    if (!reunion) {
      return res.status(404).json({ message: 'No se ha encontrado una reunión' });
    }
    return res.json(reunion);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const reunionDelete = async (req, res) => {
  try {
    const { title } = req.body;
    const reunion = await Reunion.findOne({ title });
    await reunion.delete();
    return res.status(200).json({ message: 'Se ha eliminado la reunión correctamente' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const reunionList = async (req, res) => {
  try {
    const reunions = await Reunion.find();
    return res.json(reunions);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { reunionCreate, reunionDelete, reunionList, reunionGet, reunionUpdate };