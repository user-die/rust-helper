import getDamageType from './getDamageType'

var calculateCountExplosive = (explosive, build) =>
  build && Math.ceil(build.hp / explosive[getDamageType(build)])

export default calculateCountExplosive
