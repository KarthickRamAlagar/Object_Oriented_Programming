// Definition: 
   // Abstraction is the concept of hiding the complex implementation details and
   // showing only the essential features or functionality to the user. 


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
  set balance(newBalance) {
    if (this.#balance < 50) {
      console.log("❌ Cannot update. Insufficient balance (< 50).");
      return;
    }
    this.#balance = newBalance;
    console.log(`✔ Balance updated to: ${this.#balance}`);
  }

  // Abstraction: user only sees this method, not the internal email logi
  sendEmail(name) {
    console.log(`Sending email to ${name}...`);
    // Hidden complexity: imagine SMTP or API integration here
    console.log(
      `Email content: balance:${ this.#balance} ,UserName: ${name}`
    );
  }
}

const myAccount = new BankAccount(25);

myAccount.deposit(20); // Output: Deposited: 50. New Balance: 45

console.log(myAccount.getBalance()); // Output: 150

myAccount.sendEmail("RamAlagar")


// sendEmail() hides the complexity of how emails are sent.

// The user just calls the method without worrying about SMTP or API details.

