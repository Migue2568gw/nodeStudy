import {connect} from "mongoose";
import {MONGODB_URI} from './config'

async function connectToDatabase() {
  try {
    const db = await connect(MONGODB_URI);
    console.log("Conexión exitosa a la base de datos:", db.connection.name);
    
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

connectToDatabase();
