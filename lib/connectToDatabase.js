// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// let mongoClient;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

// export default async function connectToDatabase() {
//   try {
//     if (mongoClient) {
//       return { mongoClient };
//     }
//     mongoClient = new MongoClient(uri, options);
//     await mongoClient.connect();
//     console.log("Just Connected to MongoDB! ");
//     return { mongoClient };
//   } catch (e) {
//     return { error: e };
//   }
// }
