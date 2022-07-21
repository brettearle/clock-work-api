
export default class Character {
  constructor ({
    firstName = "",
    lastName = "",
    age = 0,
    description = "",
    highConcept = "",
    trouble = "",
    aspectOne = "",
    aspectTwo = "",
    aspectThree = "",
    stunts = [{name: "" , description: ""}],
    physicalStressBoxes = 0,
    mentalStressBoxes = 0,
    mildConsequence = "",
    moderateConsequence = "",
    severeConsequence = "",
    hasExtraMildConsequence = false,
    extraMildConsequence = "",
    skills = [
        {name: 'fitness', value: 0},
        {name: 'fight', value: 0},
        {name: 'ranged', value: 0},
        {name: 'stealth', value: 0},
        {name: 'pilot', value: 0},
        {name: 'investigate', value: 0},
        {name: 'wits', value: 0},
        {name: 'research', value: 0},
        {name: 'cybernetics', value: 0},
        {name: 'networks', value: 0},
        {name: 'devices', value: 0},
        {name: 'metaDefend', value: 0},
        {name: 'metaTraverse', value: 0},
        {name: 'presence', value: 0},
        {name: 'communication', value: 0},
        {name: 'manipulation', value: 0},
        {name: 'empathy', value: 0},
    ]
  }) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.description = description
    this.highConcept = highConcept
    this.trouble = trouble
    this.aspectOne = aspectOne
    this.aspectTwo = aspectTwo
    this.aspectThree = aspectThree
    this.stunts = stunts
    this.physicalStressBoxes = physicalStressBoxes
    this.mentalStressBoxes = mentalStressBoxes
    this.mildConsequence = mildConsequence
    this.moderateConsequence = moderateConsequence
    this.severeConsequence = severeConsequence
    this.hasExtraMildConsequence = hasExtraMildConsequence
    this.extraMildConsequence = extraMildConsequence
    this.skills = skills
  }
}