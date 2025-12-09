// Encapsulation
    // Data + methods bundled together
    // Control access using:
         // private fields (#)
        // getters/setters
       // method boundaries (Setters)


class BankAccount {
    
    #balance; // Private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Public method to deposit funds
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${this.#balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    // Public method (getter) to view balance (READ OPERATION)
    getBalance() {
        return this.#balance;
    }

    // Setter Fn to valid the balance of the Account 
    set balance (newBalance){
        if (this.#balance < 50) {
          console.log("❌ Cannot update. Insufficient balance (< 50).");
          return;
        }
         this.#balance = newBalance;
         console.log(`✔ Balance updated to: ${this.#balance}`);
    }

}

const myAccount = new BankAccount(25);

myAccount.deposit(20); // Output: Deposited: 50. New Balance: 150

console.log(myAccount.getBalance()); // Output: 150

myAccount.balance = 200;

myAccount.deposit(20);

myAccount.balance = 200;