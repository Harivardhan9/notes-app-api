import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import notesRoutes from './routes/notes.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/notes', notesRoutes);

app.get('/health', (_, res) => {
  res.status(200).json({ status: 'OK' });
});

app.use(errorHandler);

export default app;
