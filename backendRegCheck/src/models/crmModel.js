import mongoose from 'mongoose';

const reunionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Se debe ingresar un título válido'],
  },
  attendees: {
    type: Array,
    required: [true, 'Se deben ingresar participantes válidos'],
  },
  duration: {
    type: Number,
    required: [true, 'Se debe ingresar una duración de la reunión válida'],
  },
  startMeeting: {
    type: String,
    required: [true, 'Se debe ingresar un inicio de reunión válido'],
  },
  endMeeting: {
    type: String,
    required: [true, 'Se debe ingresar un final de reunión válido'],
  },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
}, {
  timestamps: true,
});

const Reunion = mongoose.model('Reunion', reunionSchema);


const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Se debe ingresar un nombre válido'],
  },
  email: {
    type: String,
    required: [true, 'Se debe ingresar un nombre válido'],
  },
  phone: {
    type: String,
    required: [true, 'Se debe ingresar un nombre válido'],
  },
  role: {
    type: String,
  },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
}, {
  timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Se debe ingresar un nombre válido'],
  },
  description: {
    type: String,
    required: [true, 'Se debe ingresar un nombre válido'],
  },
  status: {
    type: String,
    enum: ['created', 'inWork', 'completed'],
    default: 'created',
    required: [true, 'Se debe ingresar un nombre válido'],
  },
  role: {
    type: String,
    required: [true, 'Se debe ingresar un rol válido'],
  },
  due_date: {
    type: String,
    required: [true, 'Se debe ingresar una fecha válida'],
  },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Se debe ingresar un nombre válido'],
    unique: [true, 'Se debe ingresar el nombre del projecto']
  },
  description: {
    type: String,
    required: [true, 'Se debe ingresar una descripción válida'],
  },
  initialDate: {
    type: String,
    required: [true, 'Se debe ingresar la fecha de inicio del projecto'],
  },
  finalDate: {
    type: String,
    required: [true, 'Se debe ingresar la fecha de fin del projecto'],
  },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  contacts:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
  reunions:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reunion' }],
  tasks:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
}, {
  timestamps: true,
  strictPopulate: false,
});

const Project = mongoose.model('Project', projectSchema);

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Se debe ingresar un nombre válido'],
    unique: [true, 'Se debe ingresar el nombre de la empresa']
  },
  representative: {
    type: String,
    required: [true, 'Se debe ingresar un representante válido'],
  },
  email: {
    type: String,
    required: [true, 'Se debe ingresar un email válido'],
  },
  phone: {
    type: String,
    required: [true, 'Se debe ingresar un número válido'],
  },
  address: {
    type: String,
    required: [true, 'Se debe ingresar una dirección válida'],
  },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
}, {
  timestamps: true,
  strictPopulate: false,
});

const Client = mongoose.model('Client', clientSchema);

export { Client, Project, Reunion, Contact, Task };
