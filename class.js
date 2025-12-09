// CLASS
//  A class is a blueprint
//  Defines properties (data) + methods (actions)
//  sed to create multiple objects of same type

class BankAccount {
  
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

 
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  }

}

   const myAccount = new BankAccount(100);

   myAccount.deposit(50); // Output: Deposited: 50. New Balance: 150


// CONSTRUCTOR
//    Special method
//    Runs automatically when using new
//    Used for initializing the object
//    Accepts parameters from instance creation
