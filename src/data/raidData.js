import ammoExplosive from './../assets/explosives/ammo.rifle.explosive.png'
import ammoRocket from './../assets/explosives/ammo.rocket.basic.png'
import ammoRocketHv from './../assets/explosives/ammo.rocket.hv.png'
import explosiveSatchel from './../assets/explosives/explosive.satchel.png'
import explosiveTimed from './../assets/explosives/explosive.timed.png'
import explosiveBeancan from './../assets/explosives/grenade.beancan.png'
import f1 from './../assets/explosives/grenade.f1.png'

class Explosive {
  constructor(
    text,
    damageDoor,
    damageToWoodenDoor,
    damageWall,
    damageToWoodenWall,
    damageToStoneWall,
    value,
    img,
    resources,
    workbenchLevel,
    totalScrap,
    sulfur,
    charcoal,
    gunpowder
  ) {
    this.text = text
    this.damageDoor = damageDoor
    this.damageToWoodenDoor = damageToWoodenDoor
    this.damageWall = damageWall
    this.damageToWoodenWall = damageToWoodenWall
    this.damageToStoneWall = damageToStoneWall
    this.value = value
    this.img = img
    this.resources = resources
    this.workbenchLevel = workbenchLevel
    this.totalScrap = totalScrap
    this.sulfur = sulfur
    this.charcoal = charcoal
    this.gunpowder = gunpowder
  }
}

var timedExplosiveCharge = new Explosive(
  'Timed Explosive Charge',
  440, // 440 в двери
  440,
  275, // 275 в стены
  275,
  275,
  10,
  explosiveTimed,
  [{ metalFragmenst: 200 }, { cloth: 20 }, { techTrash: 2 }, { animalFat: 45 }],
  3,
  2125,
  2200,
  3000,
  1100
)

var rocket = new Explosive(
  'Rocket',
  220, // 220 в двери
  220,
  137.5, // 137.5 в стены
  247, // 247 в деревянную стену
  137.5,
  11,
  ammoRocket,
  [{ metalFragmenst: 100 }, { cloth: 20 }, { metalPipe: 2 }, { animalFat: 24 }],
  3,
  2250,
  1400,
  1950,
  700
)

var satchel = new Explosive(
  'Satchel Charge',
  70, // 70 в двери
  170, // 170 в дер дверь
  43.5, // 43.5 в металл //
  91.5, // 91.5 в дерево
  51.5, //51.5 в стену в камень
  12,
  explosiveSatchel,
  [{ metalFragmenst: 80 }, { cloth: 10 }, { rope: 1 }],
  1,
  840,
  480,
  720,
  240
)

var beancan = new Explosive(
  'Beancan Grenade',
  14.5, // 14.5 в двери
  35,
  9, // 9 в стены
  19.5, // 19.5 в дерево
  11, // 11 в камень
  13,
  explosiveBeancan,
  [{ metalFragmenst: 20 }],
  1,
  715,
  120,
  180,
  60
)

var highVelocityRocket = new Explosive(
  'High Velocity Rocket',
  24, // 24 по дверям
  63.5, // 63.5 дер дверь
  15, // 15.75 в стену
  29, // 29 в дерево
  15.7, // в камень
  14,
  ammoRocketHv,
  [{ metalPipe: 1 }],
  2,
  2425,
  200,
  300,
  100
)

var explosiveAmmo = new Explosive(
  'ExplosiveAmmo',
  4, // в двери
  10.6, // 11.375 в дер двер
  2.5, //  2.5 в стены
  5.3, // 5.3 в дер стену
  2.78,
  15,
  ammoExplosive,
  [{ metalFragmenst: 5 }],
  3,
  1125,
  25,
  30,
  15
)

var f1grenade = new Explosive(
  'F1 Grenade',
  5,
  8.7,
  1, // камень 2.6
  4.25,
  2.75,
  16,
  f1,
  [{ metalFragmenst: 25 }],
  2,
  850,
  60,
  90,
  30
)

var explosives = [
  timedExplosiveCharge,
  rocket,
  satchel,
  beancan,
  highVelocityRocket,
  explosiveAmmo,
  f1grenade
]

export default explosives
