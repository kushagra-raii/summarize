import dotenv from 'dotenv';

dotenv.config();

export const services = {
  port: process.env.PORT || 3000,
  summarizeServiceUrl: process.env.SUMMARIZE_SERVICE_URL as string,
  notesServiceUrl: process.env.NOTES_SERVICE_URL as string,
  tasksServiceUrl: process.env.TASKS_SERVICE_URL as string,
  jwtSecret: process.env.JWT_SECRET as string,
};