import wall1 from './../assets/builds/wall1.png'
import wall2 from './../assets/builds/wall2.png'
import wall3 from './../assets/builds/wall3.png'
import wall4 from './../assets/builds/wall4.png'

class Build {
  constructor(text, hp, decay, value, img) {
    this.text = text
    this.hp = hp
    this.decay = decay
    this.value = value
    this.img = img
  }
}

var woodenDoor = new Build(
  'Wooden Door',
  200,
  3,
  1,
  'https://img.craftpedia.net/caches/rust/door.hinged.wood/door.hinged.wood_256x256.webp'
)
var metalDoor = new Build(
  'Sheet Metal Door',
  250,
  8,
  2,
  'https://img.craftpedia.net/caches/rust/door.hinged.metal/door.hinged.metal_256x256.webp'
)
var garageDoor = new Build(
  'Garage Door',
  600,
  8,
  3,
  'https://img.craftpedia.net/caches/rust/wall.frame.garagedoor/wall.frame.garagedoor_256x256.webp'
)

var armoredDoor = new Build(
  'Armored Door',
  1000,
  12,
  4,
  'https://img.craftpedia.net/caches/rust/door.hinged.toptier/door.hinged.toptier_256x256.webp'
)

var woodenStructures = new Build('Wooden structures', 250, 3, 5, wall1)

var stoneStructures = new Build('Stone structures', 500, 5, 6, wall2)

var metalStructures = new Build('Metal structures', 1000, 8, 7, wall3)

var armoredStructures = new Build('Armored structures', 2000, 12, 8, wall4)

var woodenWall = new Build('High External Wooden Wall', 500, 8, 9, wall4)

var stoneWall = new Build('High External Stone Wall', 500, 8, 10, wall4)

var builds = [
  woodenDoor,
  metalDoor,
  garageDoor,
  armoredDoor,
  woodenStructures,
  stoneStructures,
  metalStructures,
  armoredStructures
]

export default builds
