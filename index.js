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
    defense = 50;
    spAttack = 5;
    spDefense = 5;
    hp = 30;
    speed = 10;
    nature = 'Stoned';
  }

  if (species == 'Garfield') {
    type = 'Fire';
    attack = 9;
    defense = 30;
    spAttack = 14;
    spDefense = 6;
    hp = 25;
    speed = 11;
    nature = 'Hyper';
  }

  if (species == 'Neighbor') {
    type = 'Dark';
    attack = 7;
    defense = 40;
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

fightScenarios = (firstCatmon, secondCatmon) => {
  if (firstCatmon.attack > secondCatmon.defense && secondCatmon.attack > firstCatmon.defense) {
    // both catmon's attacks are higher than enemy's defense
    return 1;
  }
  if (firstCatmon.attack <= secondCatmon.defense && secondCatmon.attack > firstCatmon.defense) {
    // first catmon deals 1 damage, second catmon normal damage
    return 2;
  }
  if (firstCatmon.attack > secondCatmon.defense && secondCatmon.attack <= firstCatmon.defense) {
    // first catmon deals normal damage, second catmon deals 1 damage
    return 3;
  }
  if (firstCatmon.attack <= secondCatmon.defense && secondCatmon.attack <= firstCatmon.defense) {
    // both catmons deal 1 damage
    return 4;
  }
};

battleCatmon = (firstCatmon, secondCatmon) => {
  //battle loop until one goes 0 hp
  while (firstCatmon.hp > 0 && secondCatmon.hp > 0) {
    //check if first catmon is faster
    if (firstCatmon.speed > secondCatmon.speed) {
      //check if attack is higher than defense, needed so enemy doesnt accidentally get healed with our formula 
      console.log("here");
      let fightScenario = fightScenarios(firstCatmon, secondCatmon);
      switch (fightScenario) {
        case 1:
          secondCatmon.hp = secondCatmon.hp - (firstCatmon.attack - secondCatmon.defense);
          hpCheck(firstCatmon, secondCatmon);
          firstCatmon.hp = firstCatmon.hp - (secondCatmon.attack - firstCatmon.defense);
          hpCheck(firstCatmon, secondCatmon);
          break;
        case 2:
          secondCatmon.hp--;
          hpCheck(firstCatmon, secondCatmon);
          firstCatmon.hp = firstCatmon.hp - (secondCatmon.attack - firstCatmon.defense);
          hpCheck(firstCatmon, secondCatmon);
          break;
        case 3:
          firstCatmon.hp--;
          hpCheck(firstCatmon, secondCatmon);
          secondCatmon.hp = secondCatmon.hp - (firstCatmon.attack - secondCatmon.defense);
          hpCheck(firstCatmon, secondCatmon);
          break;
        case 4:
          firstCatmon.hp--;
          hpCheck(firstCatmon, secondCatmon);
          secondCatmon.hp--;
          hpCheck(firstCatmon, secondCatmon);
          break;
      }
    } else {
      //check if second catmon is faster
      //check if attack is higher than defense, needed so enemy doesnt accidentally get healed with our formula 
      console.log("here2");
      if (secondCatmon.attack > firstCatmon.defense) {
        firstCatmon.hp = firstCatmon.hp - (secondCatmon.attack - firstCatmon.defense);
        hpCheck(firstCatmon, secondCatmon);
        secondCatmon.hp = secondCatmon.hp - (firstCatmon.attack - secondCatmon.defense);
        hpCheck(firstCatmon, secondCatmon);
      } else {
        //1 hp damage if defense is higher than the attack
        secondCatmon.hp--;
        hpCheck(firstCatmon, secondCatmon);
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

