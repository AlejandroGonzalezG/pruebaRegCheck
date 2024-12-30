import { Client } from '../models/crmModel.js'


const clientCreate = async (req, res) => {
  try {
    const { name, representative, email, phone, address} = req.body;
    const client = new Client({
      name,
      representative,
      email,
      phone,
      address,
    });
    await client.save();
    return res.status(201).json({client, message: 'Se ha creado el cliente correctamente'});
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const clientGet = async (req, res) => {
  try {
    const { name } = req.body
    const client = await Client.findOne({ name });
    if (!client) {
      return res.status(404).json({ message: 'No se ha encontrado el cliente' });
    }
    return res.json(client);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const clientUpdate = async (req, res) => {
  try {
    const name = req.body.name
    const client = await Client.findOne({name});
    if (!client) {
      return res.status(404).json({ message: 'No se ha encontrado el cliente' });
    }
    return res.json(client);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const clientDelete = async (req, res) => {
  try {
    const name = req.body.name
    const client = await Client.findOne({name});
    await client.delete();
    await client.save();
    return res.status(200).json({ message: 'Se ha borrado el cliente correctamente' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const clientList = async (req, res) => {
  try {
    const clients = await Client.find().populate("projects");
    return res.json(clients);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { clientCreate, clientDelete, clientList, clientGet, clientUpdate }