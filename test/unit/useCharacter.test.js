import test from 'node:test'
import { strict as assert } from 'node:assert'
import { createCharacter } from '../../src/useCases/useCharacter.js'
import Character from '../../src/entity/character.js'



test('tests functions in useCharacter use cases', (t) => {
  ///mock character info
  const firstName = 'first name'
  const lastName = 'last name'
  const age = 20
  const description = 'description'
  const highConcept = 'high concept'
  const trouble = 'trouble'
  const aspectOne = 'aspect one'
  const aspectTwo = 'aspect two'
  const aspectThree = 'aspect three'
  const stunts = [
    { name: 'stunt1', description: 'im stunt one' },
    { name: 'stunt2', description: 'im stunt two' },
    { name: 'stunt3', description: 'im stunt three' }
  ]
  const physicalStressBoxes = 2
  const mentalStressBoxes = 2
  const mildConsequence = 'mild consequence'
  const moderateConsequence = 'moderate consequence'
  const severeConsequence = 'severe consequence'
  const skills = [
    { name: 'fitness', value: 1 },
    { name: 'fight', value: 1 },
    { name: 'ranged', value: 1 },
    { name: 'stealth', value: 1 },
    { name: 'pilot', value: 1 },
    { name: 'investigate', value: 1 },
    { name: 'wits', value: 1 },
    { name: 'research', value: 1 },
    { name: 'cybernetics', value: 1 },
    { name: 'networks', value: 1 },
    { name: 'devices', value: 1 },
    { name: 'metaDefend', value: 1 },
    { name: 'metaTraverse', value: 1 },
    { name: 'presence', value: 1 },
    { name: 'communication', value: 1 },
    { name: 'manipulation', value: 1 },
    { name: 'empathy', value: 1 }
  ]
  //***TESTS BEGIN HERE */
  const testCharacter = createCharacter({
    firstName,
    lastName,
    age,
    description,
    highConcept,
    trouble,
    aspectOne,
    aspectTwo,
    aspectThree,
    stunts,
    physicalStressBoxes,
    mentalStressBoxes,
    mildConsequence,
    moderateConsequence,
    severeConsequence,
    skills
  })
  
  //assertations
  const got = testCharacter instanceof Character
  const expected = true
  assert.equal(
    got,
    expected,
    `got ${got} expected ${expected}`
  )
})
