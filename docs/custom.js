function rolld4() {
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    return randomNumber;
  }

function rolld6() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
  }

function generalDice(n,d,m){
    var result = 0 
    for (let i = 0; i < n; i++ ) {
      result += (Math.floor(Math.random() * d) + 1)
    }
    return (result + m)
}


let tuTable = {
    1: {
      "min": 13,
      "skeleton / 1 HD":[13,14,15,16],
      "zombie / 2 HD" : [17,18],
      "Ghoul / 3 HD" : [19,20]

    }
  }

export function turnUndead (level, roll) {
  switch (level){
    case 1:
      if (roll >=13 && roll < 17) {
        return "1 HD / Skeleton"
      } else if (roll >=17 && roll < 19) {
        return "2 HD / Zombie"
      } else if (roll >=17 && roll < 21) {
        return "3 HD / Ghoul"
      } else { return "Nothing"}
    case 2:
      if (roll >=11 && roll < 15) {
        return "1 HD / Skeleton"
      } else if (roll >=15 && roll < 18) {
        return "2 HD / Zombie"
      } else if (roll >=18 && roll < 20) {
        return "3 HD / Ghoul"
      } else if (roll >= 20 ) {
        return "4 HD / Wight"
      } else { return "Nothing"}
    case 3: 
      if (roll >=9 && roll < 13) {
        return "1 HD / Skeleton"
      } else if (roll >=13 && roll < 17) {
        return "2 HD / Zombie"
      } else if (roll >=17 && roll < 19) {
        return "3 HD / Ghoul"
      } else if (roll >= 19 ) {
        return "4 HD / Wight"
      } else { return "Nothing"}
    case 4:
      if (roll >=7 && roll < 11) {
        return "1 HD / Skeleton"
      } else if (roll >=11 && roll < 15) {
        return "2 HD / Zombie"
      } else if (roll >=15 && roll < 18) {
        return "3 HD / Ghoul"
      } else if (roll >= 18 && roll < 20) {
        return "4 HD / Wight"
      } else if (roll >= 20 && roll < 21) {
        return "5 HD / Wraith"
      } else { return "Nothing"}
    case 5:
      if (roll >=5 && roll < 9) {
        return "1 HD / Skeleton"
      } else if (roll >=9 && roll < 13) {
        return "2 HD / Zombie"
      } else if (roll >=13 && roll < 17) {
        return "3 HD / Ghoul"
      } else if (roll >= 17 && roll < 19) {
        return "4 HD / Wight"
      } else if (roll >= 19 && roll < 21) {
        return "5 HD / Wraith"
      } else { return "Nothing"}
    case 6:
      if (roll >=3 && roll < 7) {
        return "1 HD / Skeleton"
      } else if (roll >=7 && roll < 11) {
        return "2 HD / Zombie"
      } else if (roll >=11 && roll < 15) {
        return "3 HD / Ghoul"
      } else if (roll >= 15 && roll < 18) {
        return "4 HD / Wight"
      } else if (roll >= 18 && roll < 20) {
        return "5 HD / Wraith"
      } else if (roll >= 20 && roll < 21) {
        return "6 HD / Mummy"
      } else { return "Nothing"}
    case 7:
      if (roll >=2 && roll < 5) {
        return "1 HD / Skeleton"
      } else if (roll >=5 && roll < 9) {
        return "2 HD / Zombie"
      } else if (roll >=9 && roll < 13) {
        return "3 HD / Ghoul"
      } else if (roll >= 13 && roll < 17) {
        return "4 HD / Wight"
      } else if (roll >= 17 && roll < 19) {
        return "5 HD / Wraith"
      } else if (roll >= 19 && roll < 21) {
        return "6 HD / Mummy"
      } else { return "Nothing"}
    case 8:
      if (roll >=3 && roll < 7) {
        return "Skeleton T + 2 HD / Zombie"
      } else if (roll >=7 && roll < 11) {
        return "Skeleton T + 3 HD / Ghoul"
      } else if (roll >= 11 && roll < 15) {
        return "Skeleton T + 4 HD / Wight"
      } else if (roll >= 15 && roll < 18) {
        return "Skeleton T + 5 HD / Wraith"
      } else if (roll >= 18 && roll < 20) {
        return "Skeleton T + 6 HD / Mummy"
      } else if (roll >= 20 && roll < 21) {
        return "Skeleton T + 7 HD / Spectre"
      } else { return "Skeleton T, Automatically"}
    case 9:
      if (roll >=2 && roll < 5) {
        return "Skeleton T + 2 HD / Zombie"
      } else if (roll >=5 && roll < 9) {
        return "Skeleton T + 3 HD / Ghoul"
      } else if (roll >= 9 && roll < 13) {
        return "Skeleton T + 4 HD / Wight"
      } else if (roll >= 13 && roll < 17) {
        return "Skeleton T + 5 HD / Wraith"
      } else if (roll >= 17 && roll < 19) {
        return "Skeleton T + 6 HD / Mummy"
      } else if (roll >= 19 && roll < 21) {
        return "Skeleton T + 7 HD / Spectre"
      } else { return "Skeleton T, Automatically"}
    case 10:
      if (roll >=3 && roll < 7) {
        return "Skeleton,Zombie T + 3 HD / Ghoul"
      } else if (roll >= 7 && roll < 11) {
        return "Skeleton,Zombie T + 4 HD / Wight"
      } else if (roll >= 11 && roll < 15) {
        return "Skeleton,Zombie T + 5 HD / Wraith"
      } else if (roll >= 15 && roll < 18) {
        return "Skeleton,Zombie T + 6 HD / Mummy"
      } else if (roll >= 18 && roll < 20) {
        return "Skeleton,Zombie T + 7 HD / Spectre"
      } else if (roll >= 20 && roll < 21) {
        return "Skeleton,Zombie T + 8 HD / VAmpire"
      } else { return "Skeleton,Zombie T, Automatically"}
    case 11:
      if (roll >=2 && roll < 5) {
        return "Skeleton D + Zombie T + 3 HD / Ghoul"
      } else if (roll >= 5 && roll < 9) {
        return "Skeleton D + Zombie T + 4 HD / Wight"
      } else if (roll >= 9 && roll < 13) {
        return "Skeleton D + Zombie T + 5 HD / Wraith"
      } else if (roll >= 13 && roll < 17) {
        return "Skeleton D + Zombie T + 6 HD / Mummy"
      } else if (roll >= 17 && roll < 19) {
        return "Skeleton D + Zombie T + 7 HD / Spectre"
      } else if (roll >= 19 && roll < 21) {
        return "Skeleton D + Zombie T + 8 HD / Vampire"
      } else { return "Skeleton D + Zombie T, Automatically"}
    case 12:
      if (roll >=3 && roll < 7) {
        return "Skeleton D + Zombie, Ghoul T + 4 HD / Wight"
      } else if (roll >= 7 && roll < 11) {
        return "Skeleton D + Zombie, Ghoul T + 5 HD / Wraith"
      } else if (roll >= 11 && roll < 15) {
        return "Skeleton D + Zombie, Ghoul T + 6 HD / Mummy"
      } else if (roll >= 15 && roll < 18) {
        return "Skeleton D + Zombie, Ghoul T + 7 HD / Spectre"
      } else if (roll >= 18 && roll < 20) {
        return "Skeleton D + Zombie, Ghoul T + 8 HD / Vampire"
      } else if (roll >= 20 && roll < 21) {
        return "Skeleton D + Zombie, Ghoul T + 9 HD / Ghost"
      } else { return "Skeleton D + Zombie, Ghoul T, Automatically"}
    case 13:
      if (roll >=2 && roll < 5) {
        return "Skeleton,Zombie D + Ghoul T + 4 HD / Wight"
      } else if (roll >= 5 && roll < 9) {
        return "Skeleton,Zombie D + Ghoul T + 5 HD / Wraith"
      } else if (roll >= 9 && roll < 13) {
        return "Skeleton,Zombie D + Ghoul T + 6 HD / Mummy"
      } else if (roll >= 13 && roll < 17) {
        return "Skeleton,Zombie D + Ghoul T + 7 HD / Spectre"
      } else if (roll >= 17 && roll < 19) {
        return "Skeleton,Zombie D + Ghoul T + 8 HD / Vampire"
      } else if (roll >= 19 && roll < 21) {
        return "Skeleton,Zombie D + Ghoul T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie D + Ghoul T, Automatically"}
    case 14: 
      if (roll >=3 && roll < 7) {
        return "Skeleton,Zombie D + Ghoul, Wight T + 5 HD / Wraith"
      } else if (roll >= 7 && roll < 11) {
        return "Skeleton,Zombie D + Ghoul, Wight T + 6 HD / Mummy"
      } else if (roll >= 11 && roll < 15) {
        return "Skeleton,Zombie D + Ghoul, Wight T + 7 HD / Spectre"
      } else if (roll >= 15 && roll < 18) {
        return "Skeleton,Zombie D + Ghoul, Wight T + 8 HD / Vampire"
      } else if (roll >= 18 && roll < 21) {
        return "Skeleton,Zombie D + Ghoul, Wight T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie D + Ghoul, Wight T, Automatically"}
    case 15:
      if (roll >=2 && roll < 5) {
        return "Skeleton,Zombie,Ghoul D + Wight T + 5 HD / Wraith"
      } else if (roll >= 5 && roll < 9) {
        return "Skeleton,Zombie,Ghoul D + Wight T + 6 HD / Mummy"
      } else if (roll >= 9 && roll < 13) {
        return "Skeleton,Zombie,Ghoul D + Wight T + 7 HD / Spectre"
      } else if (roll >= 13 && roll < 17) {
        return "Skeleton,Zombie,Ghoul D + Wight T + 8 HD / Vampire"
      } else if (roll >= 17 && roll < 21) {
        return "Skeleton,Zombie,Ghoul D + Wight T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie,Ghoul D + Wight T, Automatically"}
    case 16: 
      if (roll >=3 && roll < 7) {
        return "Skeleton,Zombie,Ghoul D + Wight,Wraith T + 6 HD / Mummy"
      } else if (roll >= 7 && roll < 11) {
        return "Skeleton,Zombie,Ghoul D + Wight,Wraith T + 7 HD / Spectre"
      } else if (roll >= 11 && roll < 15) {
        return "Skeleton,Zombie,Ghoul D + Wight,Wraith T + 8 HD / Vampire"
      } else if (roll >= 15 && roll < 21) {
        return "Skeleton,Zombie,Ghoul D + Wight,Wraith T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie,Ghoul D + Wight,Wraith T, Automatically"}
    case 17:
      if (roll >=2 && roll < 5) {
        return "Skeleton,Zombie,Ghoul,Wight D + Wraith T + 6 HD / Mummy"
      } else if (roll >= 5 && roll < 9) {
        return "Skeleton,Zombie,Ghoul,Wight D + Wraith T + 7 HD / Spectre"
      } else if (roll >= 9 && roll < 13) {
        return "Skeleton,Zombie,Ghoul,Wight D + Wraith T + 8 HD / Vampire"
      } else if (roll >= 13 && roll < 21) {
        return "Skeleton,Zombie,Ghoul,Wight D + Wraith T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie,Ghoul,Wight D + Wraith T, Automatically"}
    case 18:
      if (roll >=3 && roll < 7) {
        return "Skeleton,Zombie,Ghoul,Wight D + Wraith,Mummy T + 7 HD / Spectre"
      } else if (roll >= 7 && roll < 11) {
        return "Skeleton,Zombie,Ghoul,Wight D + Wraith,Mummy T + 8 HD / Vampire"
      } else if (roll >= 11 && roll < 21) {
        return "Skeleton,Zombie,Ghoul,Wight D + Wraith,Mummy T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie,Ghoul,Wight D + Wraith,Mummy T, Automatically"}
    case 19: 
      if (roll >=2 && roll < 5) {
        return "Skeleton,Zombie,Ghoul,Wight,Wraith D + Mummy T + 7 HD / Spectre"
      } else if (roll >= 5 && roll < 9) {
        return "Skeleton,Zombie,Ghoul,Wight,Wraith D + Mummy T + 8 HD / Vampire"
      } else if (roll >= 9 && roll < 21) {
        return "Skeleton,Zombie,Ghoul,Wight,Wraith D + Mummy T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie,Ghoul,Wight,Wraith D + Mummy T, Automatically"}
    case 20:
      if (roll >=3 && roll < 7) {
        return "Skeleton,Zombie,Ghoul,Wight,Wraith D + Mummy,Spectre T + 8 HD / Vampire"
      } else if (roll >= 7 && roll < 21) {
        return "Skeleton,Zombie,Ghoul,Wight,Wraith D + Mummy,Spectre T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie,Ghoul,Wight,Wraith D + Mummy,Spectre T, Automatically"} 
    default:
      return "Nothing"
  }
}

export {
    rolld4, rolld6,
    generalDice
}