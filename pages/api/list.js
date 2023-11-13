// import connectToDatabase from "@/lib/connectToDatabase";

// export default async function handler(request, response) {
//   try {
//     const { mongoClient } = await connectToDatabase();
//     const db = mongoClient.db("Lynnime_db");
//     const collection = db.collection("anime_list");
//     const results = await collection.find({}).limit(10).toArray();
//     response.status(200).json(results);
//   } catch (e) {
//     console.error("Error connecting to MongoDB:", e);
//     response.status(500).json(e);
//   }
// }
