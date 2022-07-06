const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const cheque = (allCashbox) => {
  let result = allCashbox.reduce((sum, current) => sum + current, 0);
  return result / allCashbox.length;
}
console.log(cheque(allCashbox));