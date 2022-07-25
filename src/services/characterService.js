import { getDB, connectDB, MongoObjectID } from '../dBConn.js'
import { createCharacter } from '../useCases/useCharacter.js'

connectDB()

async function getCharacters () {
  const snapshot = await getDB()
    .collection('npc')
    .find()
    .toArray()
  return snapshot
}

async function makeCharacter (valuesObj) {
  const character = await createCharacter(valuesObj)
  await getDB()
    .collection('npc')
    .insertOne(character)
  return character
}

async function getCharacterById (id) {
  const character = await getDB()
    .collection('npc')
    .findOne(MongoObjectID(id))
  return character
}

async function updateCharacterById (id, data) {
  const character = await getDB()
    .collection('npc')
    .findOneAndUpdate(
      { _id: MongoObjectID(id) },
      { $set: { ...data } },
      { upsert: true, returnDocument: 'after' }
    )
  return character.value
}

async function deleteCharacter (id) {
    const character = await getDB()
      .collection('npc')
      .deleteOne(
        { _id: MongoObjectID(id) },
      )
    return character
  }

export { getCharacters, makeCharacter, getCharacterById, updateCharacterById, deleteCharacter }
