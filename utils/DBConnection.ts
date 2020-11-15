// Get connection to mongoDb
import mongoose, { Connection, createConnection, ConnectionOptions } from "mongoose"

let conn: any = null

const MONGO_URI = process.env.DATABASE_URL as string

const DbOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}

export const getConnection = async (): Promise<Connection> => {
    if (conn === null) {
        // mongoose.connection.once('open', () => console.log(`Connected to mongo`));
        // mongoose.connection.on('close', () => {
        //     mongoose.connection.removeAllListeners();
        // });

        conn = await createConnection(MONGO_URI, DbOptions)
    }
    return conn
}