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
    defense = 9;
    spAttack = 5;
    spDefense = 5;
    hp = 30;
    speed = 10;
    nature = 'Stoned';
  }

  if (species == 'Garfield') {
    type = 'Fire';
    attack = 9;
    defense = 5;
    spAttack = 14;
    spDefense = 6;
    hp = 25;
    speed = 11;
    nature = 'Hyper';
  }

  if (species == 'Neighbor') {
    type = 'Dark';
    attack = 7;
    defense = 8;
    spAttack = 20;
    spDefense = 1;
    hp = 20;
    speed = 11;
    nature = 'Hyper';
  }

  return { name, type, species, attack, defense, spAttack, spDefense, hp, speed, nature };
};

hpCheck = (firstCatmon, secondCatmon) => {
  console.log(`${firstCatmon.name}'s HP: ${firstCatmon.hp}`);
  console.log(`${secondCatmon.name}'s HP: ${secondCatmon.hp}`);
  if (firstCatmon.hp < 0) {
    console.log(`${secondCatmon.name} wins!`);
  }

  if (secondCatmon.hp < 0) {
    console.log(`${firstCatmon.name} wins!`);
  }
};

attackDefenseCheck = (fasterCatmon, slowerCatmon) => {
  if (fasterCatmon.attack > slowerCatmon.defense && slowerCatmon.attack > fasterCatmon.defense) {
    // both catmon's attacks are higher than enemy's defense
    return 1;
  }
  if (fasterCatmon.attack <= slowerCatmon.defense && slowerCatmon.attack > fasterCatmon.defense) {
    // faster catmon deals 1 damage, slower catmon normal damage
    return 2;
  }
  if (fasterCatmon.attack > slowerCatmon.defense && slowerCatmon.attack <= fasterCatmon.defense) {
    // faster catmon deals normal damage, slower catmon deals 1 damage
    return 3;
  }
  if (fasterCatmon.attack <= slowerCatmon.defense && slowerCatmon.attack <= fasterCatmon.defense) {
    // both catmons deal 1 damage
    return 4;
  }
};

fasterFightLog = (fasterCatmon) => {
  console.log(`${fasterCatmon.name} is faster!`);
  console.log(`${fasterCatmon.name} attacks for ${fasterCatmon.attack}!`);
};

slowerFightLog = (slowerCatmon) => {
  console.log('');
  console.log('_____________');
  console.log('');
  console.log(`${slowerCatmon.name}'s turn!`);
  console.log(`${slowerCatmon.name} attacks for ${slowerCatmon.attack}!`);
};

fight = (fasterCatmon, slowerCatmon) => {
  let fightScenario = attackDefenseCheck(fasterCatmon, slowerCatmon);
  switch (fightScenario) {
    case 1:

      fasterFightLog(fasterCatmon);
      slowerCatmon.hp = slowerCatmon.hp - (fasterCatmon.attack - slowerCatmon.defense);
      hpCheck(firstCatmon, slowerCatmon);

      slowerFightLog(slowerCatmon);
      fasterCatmon.hp = fasterCatmon.hp - (slowerCatmon.attack - fasterCatmon.defense);
      hpCheck(fasterCatmon, slowerCatmon);

      break;
    case 2:

      fasterFightLog(fasterCatmon);
      slowerCatmon.hp--;
      hpCheck(fasterCatmon, slowerCatmon);

      slowerFightLog(slowerCatmon);
      fasterCatmon.hp = fasterCatmon.hp - (slowerCatmon.attack - fasterCatmon.defense);
      hpCheck(fasterCatmon, slowerCatmon);

      break;
    case 3:

      fasterFightLog(fasterCatmon);
      slowerCatmon.hp = slowerCatmon.hp - (fasterCatmonattack - slowerCatmon.defense);
      hpCheck(fasterCatmon, slowerCatmon);

      slowerFightLog(slowerCatmon);
      fasterCatmon.hp--;
      hpCheck(fasterCatmon, slowerCatmon);

      break;
    case 4:

      fasterFightLog(fasterCatmon);
      slowerCatmon.hp--;
      hpCheck(fasterCatmon, slowerCatmon);

      slowerFightLog(slowerCatmon);
      fasterCatmon.hp--;
      hpCheck(fasterCatmon, slowerCatmon);

      break;
  }
};

battleCatmon = (firstCatmon, secondCatmon) => {
  let round = 1;

  //battle loop until one goes 0 hp
  while (firstCatmon.hp > 0 && secondCatmon.hp > 0) {
    console.log(`Round ${round}`);
    console.log('');
    //check if first catmon is faster
    if (firstCatmon.speed > secondCatmon.speed) {
      //check if first catmon is faster
      fight(firstCatmon, secondCatmon);
    } else {
      //check if second catmon is faster
      fight(secondCatmon, firstCatmon);
    }
    console.log('');
    console.log('____________________________');
    console.log('');
    round++;
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

