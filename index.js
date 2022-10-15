const readline = require('readline-sync');

intializeCatmon = () => {
  catmons = ['Brownie', 'Garfield', 'Neighbor'];
  console.log('Welcome to catmon!');

  let firstCatmonSpecies = readline.question(`First player select your catmon! Choices: ${catmons[0]}, ${catmons[1]}, ${catmons[2]} `);
  let firstCatmonName = readline.question(`What is the name of your ${firstCatmonSpecies}?`);

  let secondCatmonSpecies = readline.question(`Second player select your catmon! Choices: ${catmons[0]}, ${catmons[1]}, ${catmons[2]} `);
  let secondCatmonName = readline.question(`What is the name of your ${secondCatmonSpecies}? `);

  firstCatmon = createCatmon(firstCatmonName, firstCatmonSpecies);
  secondCatmon = createCatmon(secondCatmonName, secondCatmonSpecies);

  return { firstCatmon, secondCatmon };
};

// tackle, scratch, growl, leer, pound, tail whip, harden

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

  if (species == 'Brownie') {
    type = 'Rock';
    attack = 10;
    defense = 5;
    spAttack = 5;
    spDefense = 5;
    hp = 30;
    speed = 10;
    nature = 'Stoned';
  }

  if (species == 'Garfield') {
    type = 'Fire';
    attack = 9;
    defense = 3;
    spAttack = 14;
    spDefense = 6;
    hp = 25;
    speed = 11;
    nature = 'Hyper';
  }

  if (species == 'Neighbor') {
    type = 'Dark';
    attack = 7;
    defense = 4;
    spAttack = 20;
    spDefense = 1;
    hp = 20;
    speed = 11;
    nature = 'Hyper';
  }

  return { name, type, species, attack, defense, spAttack, spDefense, hp, speed, nature };
};

hpCheck = (firstCatmon, secondCatmon) => {
  console.log(`First Catmon HP: ${firstCatmon.hp}`);
  console.log(`Second Catmon HP: ${secondCatmon.hp}`);
  if (firstCatmon.hp < 0) {
    console.log(`${secondCatmon.name} wins!`);
  }

  if (secondCatmon.hp < 0) {
    console.log(`${firstCatmon.name} wins!`);
  }
};

battleCatmon = (firstCatmon, secondCatmon) => {
  while (firstCatmon.hp > 0 && secondCatmon.hp > 0) {
    if (firstCatmon.speed > secondCatmon.speed) {
      if (firstCatmon.attack > secondCatmon.defense) {
        secondCatmon.hp = secondCatmon.hp - (firstCatmon.attack - secondCatmon.defense);
        hpCheck(firstCatmon, secondCatmon);
        firstCatmon.hp = firstCatmon.hp - (secondCatmon.attack - firstCatmon.defense);
        hpCheck(firstCatmon, secondCatmon);
      } else {
        firstCatmon.hp--;
      }

    } else {
      if (secondCatmon.attack > firstCatmon.defense) {
        firstCatmon.hp = firstCatmon.hp - (secondCatmon.attack - firstCatmon.defense);
        hpCheck(firstCatmon, secondCatmon);
        secondCatmon.hp = secondCatmon.hp - (firstCatmon.attack - secondCatmon.defense);
        hpCheck(firstCatmon, secondCatmon);
      } else {
        secondCatmon.hp--;
      }
    }
  };
};

main = () => {
  let { firstCatmon, secondCatmon } = intializeCatmon();
  console.log(firstCatmon, secondCatmon);
  battleCatmon(firstCatmon, secondCatmon);
};
main();
// battleCatmon(firstCatmon, secondCatmon);

// firstCatmonAttack = (firstCatmon, secondCatmon) => {
//   secondCatmon.hp = secondCatmon.hp - firstCatmon.attack;
//   firstCatmon.hp = firstCatmon.hp - secondCatmon.attack;
// };

// secondCatmonAttack = (firstCatmon, secondCatmon) => {
//   firstCatmon.hp = firstCatmon.hp - secondCatmon.attack;
//   secondCatmon.hp = secondCatmon.hp - firstCatmon.attack;
// };

