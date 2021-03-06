import { config } from 'dotenv';
import Iconfig from './Iconfig';
config();
const configuration: Iconfig = Object.freeze({
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  secretKey: process.env.SECRET_KEY,
  mongoDBUri: process.env.MONGO_URL,
  Password: process.env.password
})
export default configuration;