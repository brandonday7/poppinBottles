function bottlePurchase(purchaseAmount) {
  let totals = {bottles: totalBottles = purchaseAmount/2,
    emptyCount: 0,
    capCount: 0,
  };

  let redeemableBottles = function (extraBottles, extraEmpties, extraCaps) {
    let empties = extraBottles + extraEmpties;
    let caps = extraBottles + extraCaps;

    if ((empties < 2) && (caps < 4))
    {
      totals.emptySpare = empties;
      totals.capSpare = caps;
      return totals;
    }

    let totalThisRound = 0;

    extraEmpties = empties % 2;
    empties = Math.floor(empties/2);
    totalThisRound += empties;
    totals.emptyCount += empties;
    extraCaps = caps % 4;
    caps = Math.floor(caps/4)
    totalThisRound += caps;
    totals.capCount += caps;

    totals.bottles += totalThisRound;
    redeemableBottles(totalThisRound, extraEmpties, extraCaps); //calls itself until done
    return;
  }

  redeemableBottles(totals.bottles, 0, 0); //starts the chain

  return totals;
}

let args = process.argv;
totals = bottlePurchase(args[2]);

console.log(`TOTAL BOTTLES: ${totals.bottles}
  REMAINING BOTTLES: ${totals.emptySpare}
  REMAINING CAPS: ${totals.capSpare}
  TOTAL EARNED:
    BOTTLES: ${totals.emptyCount}
    CAPS: ${totals.capCount}`);




