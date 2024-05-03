class Build {
  name: string;
  hp: number;
  img: string;
  decay: number;
  id: number;

  constructor(
    name: string,
    hp: number,
    img: string,
    decay: number,
    id: number
  ) {
    this.name = name;
    this.hp = hp;
    this.img = img;
    this.decay = decay;
    this.id = id;
  }
}

var SheetMetalDoor = new Build(
  "Sheet Metal Door",
  250,
  "https://img.craftpedia.net/caches/rust/door.hinged.metal/door.hinged.metal_512x512.webp",
  8,
  1
);

var GarageDoor = new Build(
  "Garage Door",
  600,
  "https://img.craftpedia.net/caches/rust/wall.frame.garagedoor/wall.frame.garagedoor_512x512.webp",
  8,
  2
);

var buildings = [SheetMetalDoor, GarageDoor];

export default buildings;
