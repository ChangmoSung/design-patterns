// Encapsulation
// Group related functions and variables into an object
// 1. Data hiding - Prevents unauthorized access and misuse
// 2. Control over data - Provides control over data validation and integrity
// 3. Maintainability - Can change the internal implementation without affecting classes that use it

class BankAccount {
  // Encapsulated, which means it can only be modified by deposit or withdraw method
  // Encapsulation is needed in this example
  // because We don't want people to edit balance unless they do deposit or withdraw money
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  public get balance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit amount");
      return;
    }

    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid withdrawal amount");
      return;
    }

    if (this._balance - amount < 0) {
      console.log("Insufficient funds");
      return;
    }

    this._balance -= amount;
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log("CurrentBalance", myAccount.balance);
