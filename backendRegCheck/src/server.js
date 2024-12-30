import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import connectMongo from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import clientRoutes from './routes/clientRoutes.js'
import projectRoutes from './routes/projectRoutes.js'
import reunionRoutes from './routes/reunionRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import taskRoutes from './routes/taskRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/client', clientRoutes)
app.use('/api/project', projectRoutes)
app.use('/api/reunion', reunionRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/task', taskRoutes)

app.listen(PORT, () => {
  connectMongo().then(() => {
    console.log(`Server running on port ${PORT}`);
  })
});

app.get('/', (req, res) => {
    res.send('The API is up and ready!');
  });