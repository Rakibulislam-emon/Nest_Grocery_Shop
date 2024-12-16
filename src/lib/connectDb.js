import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDb = async () => {
  if (db) return db; // Return the already established db connection

  try {
    const uri = process.env.NEXT_URI; // MongoDB URI from .env.local
    if (!uri) {
      throw new Error("Please add your MongoDB URI to .env.local");
    }

    // Create a new MongoClient instance
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    // Connect to the MongoDB server and database
    await client.connect(); // Ensures connection happens before accessing the db
    db = client.db("nest_grocery"); // Connect to the specified database
    console.log("MongoDB connected successfully");

    return db; // Return the db instance for further use
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
