import mongoose,  {mongo} from "mongoose"; 
import dotenv from "dotenv";

dotenv.config();

async function connectToDatabase() {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    return mongoose.connection;
};

export default connectToDatabase;