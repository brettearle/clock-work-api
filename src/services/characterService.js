import { getDB, connectDB } from "../dBConn.js";

connectDB()

async function getCharacters() {
    const snapshot = await getDB().collection('npc').find().toArray();
    return(snapshot)
}

export {
    getCharacters
}