function createBankAccount() {
    let balance = 0;

    return {
        deposit(amount) { balance += amount; return balance; },
        getBalance() { return balance; }
    };
}

const acc = createBankAccount()

acc.deposit(100)

console.log(acc.getBalance())
