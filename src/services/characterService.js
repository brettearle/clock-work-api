import { getDB, connectDB } from "../dBConn.js";
import { createCharacter } from "../useCases/useCharacter.js";

connectDB()

async function getCharacters() {
    const snapshot = await getDB().collection('npc').find().toArray();
    return(snapshot)
}

async function makeCharacter(valuesObj){
    const character = await createCharacter(valuesObj)
    return(character)
}

export {
    getCharacters,
    makeCharacter
}