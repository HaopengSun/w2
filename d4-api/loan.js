let creditLimit = 0;

const loanOut = function(amount) {
  return new Promise((resolve, reject) => {
    if (creditLimit === 0) reject("Insufficient funds");
    if (creditLimit > amount){
      creditLimit -= amount;
      resolve(amount);
    } else {
      creditLimit = 0;
      resolve(creditLimit);
    }
  });
};

console.log("Asking for $150, which should be okay ...");
loanOut(150)
  .then((amountReceived) => {
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });