import { Project, Contact} from '../models/crmModel.js'

const contactCreate = async (req, res) => {
  try {
    const { name, email, phone, role, project } = req.body;
    const projectContact = await Project.findOne({ project });
    if (!projectContact) {
      return res.status(400).json({ message: 'Se debe indicar un nombre de un proyecto válido para asignar la reunión' });
    }
    const contact = new Contact({
      name,
      email,
      phone,
      role,
      project: projectContact
    });
    await contact.save();
    return res.status(201).json({contact, message: 'Se ha creado el contacto correctamente'});
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const contactGet = async (req, res) => {
  try {
    const { title } = req.body;
    const contact = await Contact.findOne({ title });
    if (!contact) {
      return res.status(404).json({ message: 'No se ha encontrado un contacto' });
    }
    return res.json(contact);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const contactUpdate = async (req, res) => {
  try {
    const { title } = req.body;
    const contact = await Contact.findOne({ title });
    if (!contact) {
      return res.status(404).json({ message: 'No se ha encontrado un contacto' });
    }
    return res.json(contact);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const contactDelete = async (req, res) => {
  try {
    const { title } = req.body;
    const contact = await Contact.findOne({ title });
    await contact.delete();
    return res.status(200).json({ message: 'Se ha eliminado el contacto correctamente' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const contactList = async (req, res) => {
  try {
    const contacts = await Contact.find();
    return res.json(contacts);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { contactCreate, contactDelete, contactList, contactGet, contactUpdate };