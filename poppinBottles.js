//testing commit, can you see this?


function bottlePurchase(purchaseAmount) {
  let totalBottles = purchaseAmount/2;
  console.log("total bottles ", totalBottles);

  let redeemableBottles = function (extraBottles, extraEmpties, extraCaps) {
    if (extraBottles < 3 && extraEmpties < 2 && extraCaps < 4)
    {
      console.log("we are done now");
      return totalBottles;
    }

    let empties = extraBottles + extraEmpties;
    let caps = extraBottles + extraCaps;
    console.log("empties: ", empties, " caps: ", caps);

    let totalThisRound = 0;

    while (empties > 1 || caps > 3)
    {
      extraEmpties = empties % 2;
      empties = Math.floor(empties/2);
      totalThisRound += empties;
      extraCaps = caps % 4;
      caps = Math.floor(caps/4)
      totalThisRound += caps;
      console.log("total this round: ", totalThisRound);
    }

    totalBottles += totalThisRound;
    console.log("total bottles: ", totalBottles);
    console.log("extra empties: ", extraEmpties, " extra caps: ", extraCaps);

    redeemableBottles(totalThisRound, extraEmpties, extraCaps); //calls itself until done
  }
  console.log("calling the recursive function...");
  redeemableBottles(totalBottles, 0, 0); //starts the chain
}

let myBottles = bottlePurchase(6);

console.log("The program calculated ", bottlePurchase(6), " bottles");