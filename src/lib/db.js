import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("Prototyping"); // select database

//////////////////////////////////////////
// Golf Set
//////////////////////////////////////////

  async function getSets() {
    let sets = [];
    try {
      const collection = db.collection("golfsets");
      const query = {};
      sets = await collection.find(query).toArray();
      sets.forEach((set) => (set._id = set._id.toString()));
    } catch (error) {
      console.log(error);
    }
    return sets;
  }

  async function getSet(id) {
    try {
      const collection = db.collection("golfsets");
      const query = { _id: new ObjectId(id) };
      const set = await collection.findOne(query);
      if (!set) console.log("No set with id " + id);
      else set._id = set._id.toString();
      return set;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  async function createSet(set) {
    set.clubs = set.clubs || []; // Max 14 später prüfen
    try {
      const collection = db.collection("golfsets");
      const result = await collection.insertOne(set);
      return result.insertedId.toString();
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  async function updateSet(set) {
    try {
      let id = set._id;
      delete set._id;
      const collection = db.collection("golfsets");
      const query = { _id: new ObjectId(id) };
      const result = await collection.updateOne(query, { $set: set });

      if (result.matchedCount > 0) return id;
      console.log("No set with id " + id);
    } catch (error) {
      console.log(error.message);
    }
    return null;
  }

  async function deleteSet(id) {
    try {
      const collection = db.collection("golfsets");
      const query = { _id: new ObjectId(id) };
      const result = await collection.deleteOne(query);

      if (result.deletedCount > 0) return id;
      console.log("No set with id " + id);
    } catch (error) {
      console.log(error.message);
    }
    return null;
  }

export default {
  getSets,
  getSet,
  createSet,
  updateSet,
  deleteSet
};
