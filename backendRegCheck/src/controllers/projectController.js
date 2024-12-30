import { Project , Client } from '../models/crmModel.js'

const projectCreate = async (req, res) => {
  try {
    const { name, description, initialDate, finalDate, client } = req.body;
    const clientProject = await Client.findOne({ name: client });
    console.log(clientProject._id);
    if (!clientProject) {
      return res.status(400).json({ message: 'Se debe indicar un nombre de cliente válido para asignar al proyecto' });
    }
    const project = new Project({
      name,
      description,
      initialDate,
      finalDate,
      client: clientProject._id
    });
    await project.save();
    return res.status(201).json({project, message: 'Se ha creado el proyecto correctamente'});
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const projectGet = async (req, res) => {
  try {
    const { name } = req.body;
    const project = await Project.findOne({ name });
    if (!project) {
      return res.status(404).json({ message: 'No se ha encontrado un proyecto' });
    }
    return res.json(project);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const projectUpdate = async (req, res) => {
  try {
    const { name } = req.body;
    const project = await Project.findOne({ name });
    if (!project) {
      return res.status(404).json({ message: 'No se ha encontrado un proyecto' });
    }
    return res.json(project);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const projectDelete = async (req, res) => {
  try {
    const { name } = req.body;
    const project = await Project.findOne({ name });
    await project.delete();
    return res.status(200).json({ message: 'Se ha eliminado el proyecto correctamente' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const projectList = async (req, res) => {
  try {
    const projects = await Project.find().populate({ path: 'client'});
    return res.json(projects);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { projectCreate, projectDelete, projectList, projectGet, projectUpdate };