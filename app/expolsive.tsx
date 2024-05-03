class Explosive {
  name: string;
  damage: number;
  cost: Array<{
    name: string;
    count: number;
  }>;
  workbenchLevel: number;
  totalScrap: number;

  constructor(
    name: string,
    damage: number,
    cost: Array<{
      name: string;
      count: number;
    }>,
    workbenchLevel: number,
    totalScrap: number
  ) {
    this.name = name;
    this.damage = damage;
    this.cost = cost;
    this.workbenchLevel = workbenchLevel;
    this.totalScrap = totalScrap;
  }
}

var explosives = [
  new Explosive(
    "Timed Explosive Charge",
    550,
    [
      { name: "sulfur", count: 2200 },
      { name: "metalFragments", count: 200 },
      { name: "animalFat", count: 45 },
      { name: "charcoal", count: 3000 },
      { name: "cloth", count: 20 },
      { name: "techTrash", count: 2 },
    ],
    3,
    2125
  ),

  new Explosive(
    "Rocket",
    350,
    [
      { name: "metal pipe", count: 2 },
      { name: "charcoal", count: 1950 },
      { name: "sulfur", count: 1400 },
      { name: "metalFragments", count: 100 },
      { name: "animalFat", count: 24 },
      { name: "cloth", count: 8 },
    ],
    3,
    2250
  ),
];

export default explosives;
