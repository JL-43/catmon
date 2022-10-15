catmons = ["Brownie", "Garfield", "Neighbor"];

createCatmon = (catmonName, catmonSpecies) => {
  let name = catmonName;
  let type;
  let species = catmonSpecies;
  let attack;
  let defense;
  let spAttack;
  let spDefense;
  let hp;
  let speed;
  let nature;

  if (species == "Brownie") {
    type = "Rock";
    attack = 10;
    defense = 15;
    spAttack = 5;
    spDefense = 5;
    hp = 30;
    speed = 10;
    nature = "Stoned";
  }

  if (species == "Garfield") {
    type = "Fire";
    attack = 9;
    defense = 7;
    spAttack = 14;
    spDefense = 6;
    hp = 25;
    speed = 11;
    nature = "Hyper";
  }

  if (species == "Neighbor") {
    type = "Dark";
    attack = 7;
    defense = 9;
    spAttack = 20;
    spDefense = 1;
    hp = 20;
    speed = 11;
    nature = "Hyper";
  }

  return { name, type, species, attack, defense, spAttack, spDefense, hp, speed, nature };
};

console.log("Welcome to catmon!");

firstCatmon = createCatmon("fucker", "Neighbor");
secondCatmon = createCatmon("fuckerino", "Brownie");
console.log(firstCatmon);
console.log(secondCatmon);

battleCatmon = (firstCatmon, secondCatmon) => {
  while (firstCatmon.hp > 0 && secondCatmon.hp > 0) {
    firstCatmon.hp = firstCatmon.hp - 1;
    console.log(`First Catmon hp: ${firstCatmon.hp}`);
    console.log(`Second Catmon hp: ${secondCatmon.hp}`);
  }
};

battleCatmon(firstCatmon, secondCatmon);