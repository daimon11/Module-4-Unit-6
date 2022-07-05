const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
console.log(allCashbox);

const cheque = (allCashbox) => {
  let sum = 0;
  for (let i = 0; i < allCashbox.length; i++) {
    sum += allCashbox[i];
    console.log(sum);
  }
  return sum / allCashbox.length;
}
console.log(cheque(allCashbox));