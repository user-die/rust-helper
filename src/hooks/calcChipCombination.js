import explosives from '@/data/raidData.js'
import getDamageType from './getDamageType'

var calcChipCombination = (build) => {
  var sortedCost = explosives.sort(
    (a, b) => a.sulfur / a[getDamageType(build)] - b.sulfur / b[getDamageType(build)]
  )

  var hp = build && build.hp

  var combination = sortedCost.reduce((theCounter, element) => {
    while (hp >= element[getDamageType(build)]) {
      theCounter[element.text] = (theCounter[element.text] || 0) + 1
      hp -= element[getDamageType(build)]
    }
    return theCounter
  }, {})

  return combination
}

export default calcChipCombination
