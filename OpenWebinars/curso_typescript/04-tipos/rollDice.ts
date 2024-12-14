function rollTheDice(userName: string, maxOfTries:number):string[] {
  const results: string[] = [];
  const  MAX_DICE_NUMBER: number = 6;


  for (let index :number = 0; index < maxOfTries; index++) {
    const result: number = Math.ceil(Math.random() * MAX_DICE_NUMBER);

    if (result === MAX_DICE_NUMBER) {
      results.push(`${userName} is a WINNER`);
    } else {
      results.push(`${userName} is a LOSER`);
    }
  }

  return results;
}

const results : string[]= rollTheDice("TypeScript", 4);

console.log(results);
