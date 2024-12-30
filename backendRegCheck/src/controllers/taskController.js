import { Project, Task} from '../models/crmModel.js'

const taskCreate = async (req, res) => {
  try {
    const { title, description, status, role, due_date, project } = req.body;
    const projectTask = await Project.findOne({ project });
    if (!projectTask) {
      return res.status(400).json({ message: 'Se debe indicar un nombre de un proyecto válido para asignar la reunión' });
    }
    const task = new Task({
      title,
      description,
      status,
      role,
      due_date,
      project: projectTask
    });
    await task.save();
    return res.status(201).json({task, message: 'Se ha creado la tarea correctamente'});
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const taskGet = async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.findOne({ title });
    if (!task) {
      return res.status(404).json({ message: 'No se ha encontrado una tarea' });
    }
    return res.json(task);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const taskUpdate = async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.findOne({ title });
    if (!task) {
      return res.status(404).json({ message: 'No se ha encontrado una tarea' });
    }
    return res.json(task);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const taskDelete = async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.findOne({ title });
    await task.delete();
    return res.status(200).json({ message: 'Se ha eliminado la tarea correctamente' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const taskList = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.json(tasks);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { taskCreate, taskDelete, taskList, taskGet, taskUpdate };