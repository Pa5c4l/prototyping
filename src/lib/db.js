import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("Prototyping"); // select database

//////////////////////////////////////////
// Golf Set
//////////////////////////////////////////

// Get all golf sets
async function getSets() {
  let sets = [];
  try {
    const collection = db.collection("golfsets");
    const query = {};

    sets = await collection.find(query).toArray();

    sets = sets.map((set) => ({
      ...set,
      _id: set._id.toString(),
      clubs: set.clubs.map((club) =>
        typeof club === "object" && club !== null && club._id
          ? { ...club, _id: club._id.toString?.() ?? club._id }
          : club.toString?.() ?? club
      ),
      createdAt: set.createdAt?.toString?.() ?? set.createdAt,
    }));
  } catch (error) {
    console.log("Error in getSets:", error);
  }
  return sets;
}

// Display all golf clubs
  async function getClubs() {
    let clubs = [];
    try {
      const collection = db.collection("clubs");
      const query = {};
      clubs = await collection.find(query).toArray();
      clubs.forEach((club) => (club._id = club._id.toString()));
    } catch (error) {
      console.log(error);
    }
    return clubs;
  }

  // Get golf set by id
  async function getSet(id) {
    let set = null;
    try {
    const collection = db.collection("golfsets");
    const clubCollection = db.collection("clubs");
    const query = { _id: new ObjectId(id) };
    
    set = await collection.findOne(query);

    if (!set) {
      console.log("No set with id " + id);
    } else {
      set._id = set._id.toString();

      if (Array.isArray(set.clubs)) {
        const populatedClubs = await Promise.all(
          set.clubs.map(async (clubId) => {
            try {
              const club = await clubCollection.findOne({ _id: new ObjectId(clubId) });
              if (club) {
                club._id = club._id.toString();
                return club;
              }
            } catch (err) {
              console.warn(`Invalid clubId in set: ${clubId}`);
            }
            return null;
          })
        );
        set.clubs = populatedClubs.filter(Boolean); // Remove nulls
      }
    }
    } catch (error) {
      console.log(error.message);
      return null;
    }
    return set;
  }

  async function getSetWithClubIds(id) {
  let set = null;
  try {
    const collection = db.collection("golfsets");
    const query = { _id: new ObjectId(id) };
    set = await collection.findOne(query);

    if (!set) {
      console.log("No set with id " + id);
      return null;
    }

    set._id = set._id.toString();

    // Nur Club-IDs als Strings zurückgeben
    if (Array.isArray(set.clubs)) {
      set.clubs = set.clubs.map(clubId => clubId.toString());
    } else {
      set.clubs = [];
    }

  } catch (error) {
    console.log("Error in getSetWithClubIds:", error.message);
    return null;
  }
  return set;
}



  // Get club by ID
  async function getClub(id) {
    let club = null;
    try {
      const collection = db.collection("clubs");
      const query = { _id: new ObjectId(id) };
      club = await collection.findOne(query);

      if (!club) {
        console.log("No club with id " + id);
      }
      else { 
        club._id = club._id.toString();
      }
    } catch (error) {
      console.log(error.message);
      return null;
    }
    return club;
  }

  // create new set
  async function createSet(set) {
    set.clubs = set.clubs || []; // Max 14 später prüfen
    set.image = "/images/placeholderSet.jpg"; // default poster
    try {
      const collection = db.collection("golfsets");
      const result = await collection.insertOne(set);
      return result.insertedId.toString();
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  // create new club
  async function createClub(club) {
    club.image = "/images/placeholderClub.jpg"; // default poster
    try {
      const collection = db.collection("clubs");
      const result = await collection.insertOne(club);
      return result.insertedId.toString();
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  //update set with name and clubs
  async function updateSet(set) {
    const collection = db.collection("golfsets");
    await collection.updateOne(
      { _id: new ObjectId(set._id) },
      { $set: { clubs: set.clubs } }
    );
  }

  //update club
  async function updateClub(club) {
    try {
      let id = club._id;
      delete club._id;
      const collection = db.collection("clubs");
      const query = { _id: new ObjectId(id) };
      const result = await collection.updateOne(query, { $club: club });

      if (result.matchedCount > 0) return id;
      console.log("No club with id " + id);
    } catch (error) {
      console.log(error.message);
    }
    return null;
  }

  //delete set by id, works
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

  //delete club by id
  async function deleteClub(id) {
    try {
      const collection = db.collection("clubs");
      const query = { _id: new ObjectId(id) };
      const result = await collection.deleteOne(query);

      if (result.deletedCount > 0) return id;
      console.log("No club with id " + id);
    } catch (error) {
      console.log(error.message);
    }
    return null;
  }

export default {
  getSets,
  getSet,
  getSetWithClubIds,
  createSet,
  updateSet,
  deleteSet,
  getClubs,
  getClub,
  createClub,
  updateClub,
  deleteClub
};
