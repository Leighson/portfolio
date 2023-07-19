import mongoose from "mongoose";

const mongoUser = process.env.ORIGIN_USER || "";
const mongoKey = process.env.ORIGIN_KEY || "";
const mongoCluster = process.env.ORIGIN_CLUSTER || "";
const databaseName = "portfolio";

const connectionURI = `mongodb+srv://${mongoCluster}/`;

const connectionOptions = {
  user: mongoUser,
  pass: mongoKey,
  dbName: databaseName,
};

async function run() {
  try {
    await mongoose.connect(connectionURI, connectionOptions);

    console.log(`Connected to mongoDB: ${databaseName}`);
  } catch (err) {
    console.log(err);
  }
}

run().catch((err) => console.log(err));

let db = await mongoose
  .createConnection(connectionURI, connectionOptions)
  .asPromise();

export default db;