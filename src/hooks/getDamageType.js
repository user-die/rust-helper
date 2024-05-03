var getDamageType = (build) =>
  build &&
  (build.text.includes('Door')
    ? build.text.includes('Wooden')
      ? 'damageToWoodenDoor'
      : 'damageDoor'
    : build.text.includes('Wooden')
      ? 'damageToWoodenWall'
      : build.text.includes('Stone')
        ? 'damageToStoneWall'
        : 'damageWall')

export default getDamageType
