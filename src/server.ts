import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { checkDBConnection } from './config/db';

const PORT = 3000;

async function start() {
  try {
    await checkDBConnection();
    console.log('✅ Database connected successfully');

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to DB', error);
    process.exit(1);
  }
}

start();
