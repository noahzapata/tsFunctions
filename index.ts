const accounts: Account[] = [];

type Account = {
  number: number;
  balance: number;
};

// 1
function open(number: number, balance: number): Account[] {
  const account: Account = { number, balance };
  accounts.push(account);
  return accounts;
}

//2
function getBalance(number: number): number {
  const account = accounts.find((account) => account.number === number);
  if (!account) throw new Error('La cuenta no se encontrĂ³');
  return account.balance;
}

function deposit(number, amount) {
  const account = accounts.find((account) => account.number);
  if (!account) throw new Error('La cuenta no se encontrĂ³');

  account.balance += amount;
}

function withdraw(number, amount) {
  const account = accounts.find((account) => account.number);
  if (!account) throw new Error('La cuenta no se encontrĂ³');

  if (account.balance - amount < 0) throw new Error('Fondos insuficientes');
  account.balance -= amount;
}

open('111', 0);

deposit('111', 1000);
console.log(getBalance('111'));

withdraw('111', 500);
console.log(getBalance('111'));
