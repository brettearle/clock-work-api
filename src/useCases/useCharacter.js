import Character from '../entity/character.js'


const createCharacter = async (obj) => {
  const character = new Character({...obj})
  return character
}

export { createCharacter }
