import Character from '../entity/character.js'


function createCharacter(obj) {
  return (new Character({...obj}))
}

export { createCharacter }
