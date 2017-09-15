function bottlePurchase(purchaseAmount) {
  let totalBottles = purchaseAmount/2;

  let redeemableBottles = function (extraBottles, extraEmpties, extraCaps) {
    let empties = extraBottles + extraEmpties;
    let caps = extraBottles + extraCaps;

    if ((empties < 2) && (caps < 4))
    {
      return totalBottles;
    }

    let totalThisRound = 0;

    extraEmpties = empties % 2;
    empties = Math.floor(empties/2);
    totalThisRound += empties;
    extraCaps = caps % 4;
    caps = Math.floor(caps/4)
    totalThisRound += caps;

    totalBottles += totalThisRound;
    redeemableBottles(totalThisRound, extraEmpties, extraCaps); //calls itself until done
    return;
  }

  redeemableBottles(totalBottles, 0, 0); //starts the chain

  return totalBottles;
}

let args = process.argv;


console.log(`With an investment of $${args[2]}, you will receive ${bottlePurchase(args[2])} bottles!`);