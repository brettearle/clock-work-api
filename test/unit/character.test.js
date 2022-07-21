import test from 'node:test'
import { strict as assert } from 'node:assert'
import Character from '../../src/entity/character.js'

test('creates a character object from class Character and tests props from entity character', t => {
    const testCharacter = new Character({
    firstName: 'testFirst',
    lastName: 'testLast',
    age: 20,
    description: 'im a test character',
    highConcept: 'tester',
    trouble: 'trouble prop',
    aspectOne: 'test Aspect one',
    aspectTwo: 'test Aspect two',
    aspectThree: 'test Aspect three',
    stunts: [
      { name: 'stunt1', description: 'im stunt one' },
      { name: 'stunt2', description: 'im stunt two' },
      { name: 'stunt3', description: 'im stunt three' }
    ],
    physicalStressBoxes: 2,
    mentalStressBoxes: 3,
    mildConsequence: 'mild consequence',
    moderateConsequence: 'moderate consequence',
    severeConsequence: 'severe consequence',
    skills: [
        {name: 'fitness', value: 1},
        {name: 'fight', value: 1},
        {name: 'ranged', value: 1},
        {name: 'stealth', value: 1},
        {name: 'pilot', value: 1},
        {name: 'investigate', value: 1},
        {name: 'wits', value: 1},
        {name: 'research', value: 1},
        {name: 'cybernetics', value: 1},
        {name: 'networks', value: 1},
        {name: 'devices', value: 1},
        {name: 'metaDefend', value: 1},
        {name: 'metaTraverse', value: 1},
        {name: 'presence', value: 1},
        {name: 'communication', value: 1},
        {name: 'manipulation', value: 1},
        {name: 'empathy', value: 1},
    ],
  })
  //expected object
  const expected = {
    firstName: 'testFirst',
    lastName: 'testLast',
    age: 20,
    description: 'im a test character',
    highConcept: 'tester',
    trouble: 'trouble prop',
    aspectOne: 'test Aspect one',
    aspectTwo: 'test Aspect two',
    aspectThree: 'test Aspect three',
    stunts: [
      { name: 'stunt1', description: 'im stunt one' },
      { name: 'stunt2', description: 'im stunt two' },
      { name: 'stunt3', description: 'im stunt three' }
    ],
    physicalStressBoxes: 2,
    mentalStressBoxes: 3,
    mildConsequence: 'mild consequence',
    moderateConsequence: 'moderate consequence',
    severeConsequence: 'severe consequence',
    skills: [
        {name: 'fitness', value: 1},
        {name: 'fight', value: 1},
        {name: 'ranged', value: 1},
        {name: 'stealth', value: 1},
        {name: 'pilot', value: 1},
        {name: 'investigate', value: 1},
        {name: 'wits', value: 1},
        {name: 'research', value: 1},
        {name: 'cybernetics', value: 1},
        {name: 'networks', value: 1},
        {name: 'devices', value: 1},
        {name: 'metaDefend', value: 1},
        {name: 'metaTraverse', value: 1},
        {name: 'presence', value: 1},
        {name: 'communication', value: 1},
        {name: 'manipulation', value: 1},
        {name: 'empathy', value: 1},
    ],
  }
  //assertations per prop
  assert.equal(
    testCharacter.firstName,
    expected.firstName,
    `first name got ${testCharacter.firstName} expected ${expected.firstName}`
  )
  assert.equal(
    testCharacter.lastName,
    expected.lastName,
    `last name got ${testCharacter.lastName} expected ${expected.lastName}`
  )
  assert.equal(
    testCharacter.age,
    expected.age,
    `age got ${testCharacter.age} expected ${expected.age}`
  )
  assert.equal(
    testCharacter.description,
    expected.description,
    `description got ${testCharacter.description} expected ${expected.description}`
  )
  assert.equal(
    testCharacter.highConcept,
    expected.highConcept,
    `highConcept got ${testCharacter.highConcept} expected ${expected.highConcept}`
  )
  assert.equal(
    testCharacter.trouble,
    expected.trouble,
    `trouble got ${testCharacter.trouble} expected ${expected.trouble}`
  )
  assert.equal(
    testCharacter.aspectOne,
    expected.aspectOne,
    `aspectOne got ${testCharacter.aspectOne} expected ${expected.aspectOne}`
  )
  assert.equal(
    testCharacter.aspectTwo,
    expected.aspectTwo,
    `aspectTwo got ${testCharacter.aspectTwo} expected ${expected.aspectTwo}`
  )
  assert.equal(
    testCharacter.aspectThree,
    expected.aspectThree,
    `aspectThree got ${testCharacter.aspectThree} expected ${expected.aspectThree}`
  )
  assert.equal(
    testCharacter.stunts[0].name,
    expected.stunts[0].name,
    `stunts 0 name got ${testCharacter.stunts[0].name} expected ${expected.stunts[0].name}`
  )
  assert.equal(
    testCharacter.stunts[0].description,
    expected.stunts[0].description,
    `stunts 0 description got ${testCharacter.stunts[0].description} expected ${expected.stunts[0].description}`
  )
  assert.equal(
    testCharacter.physicalStressBoxes,
    expected.physicalStressBoxes,
    `physical stress boxes got ${testCharacter.physicalStressBoxes} expected ${expected.physicalStressBoxes}`
  )
  assert.equal(
    testCharacter.mentalStressBoxes,
    expected.mentalStressBoxes,
    `mental stress boxes got ${testCharacter.mentalStressBoxes} expected ${expected.mentalStressBoxes}`
  )
  assert.equal(
    testCharacter.mildConsequence,
    expected.mildConsequence,
    `mildConsequence got ${testCharacter.mildConsequence} expected ${expected.mildConsequence}`
  )
  assert.equal(
    testCharacter.moderateConsequence,
    expected.moderateConsequence,
    `moderateConsequence got ${testCharacter.moderateConsequence} expected ${expected.moderateConsequence}`
  )
  assert.equal(
    testCharacter.severeConsequence,
    expected.severeConsequence,
    `severeConsequence got ${testCharacter.severeConsequence} expected ${expected.severeConsequence}`
  )
  assert.equal(
    testCharacter.skills[0].name,
    expected.skills[0].name,
    `skills 0 name got ${testCharacter.skills[0].name} expected ${expected.skills[0].name}`
  )
  assert.equal(
    testCharacter.skills[0].value,
    expected.skills[0].value,
    `skills 0 value got ${testCharacter.skills[0].value} expected ${expected.skills[0].value}`
  )
})
