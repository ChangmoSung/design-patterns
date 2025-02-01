// // Liskov Substitution Principle (LSP)
// // In my eyes, it looks similar to abstraction in OOP
// // 1. Code Reusability and Reduced Duplication
// // 2. Enhanced Flexibility
// // 3. Modularity

// interface Shape {
//   calculateArea(): number;
// }

// class Rectangle implements Shape {
//   constructor(public width: number, public height: number) {}

//   public calculateArea(): number {
//     return this.width * this.height;
//   }
// }

// class Square implements Shape {
//   constructor(public side: number) {}

//   public calculateArea(): number {
//     return this.side * this.side;
//   }
// }

// function area(shape: Shape) {
//   return shape.calculateArea();
// }

// const rectangle: Rectangle = new Rectangle(10, 12);
// const square = new Square(8);

// console.log("rectangle result", area(rectangle));
// console.log("square result", area(square));

// // ===

// interface PaymentProcessor {
//   processPayment(amount: number): void;
// }

// class CreditCardProcessor implements PaymentProcessor {
//   processPayment(amount: number): void {
//     console.log(`Processing Credit Card Payments - Amount ${amount}`);
//   }
// }

// class DebitCardProcessor implements PaymentProcessor {
//   processPayment(amount: number): void {
//     console.log(`Processing Debit Card Payments - Amount ${amount}`);
//   }
// }

// class PayPalCardProcessor implements PaymentProcessor {
//   processPayment(amount: number): void {
//     console.log(`Processing PayPal Card Payments - Amount ${amount}`);
//   }
// }

// function executePayment(
//   paymentProcessor: PaymentProcessor,
//   amount: number
// ): void {
//   paymentProcessor.processPayment(amount);
// }

// const creditCardProcessor: CreditCardProcessor = new CreditCardProcessor();
// const debitCardProcessor: DebitCardProcessor = new DebitCardProcessor();
// const payPalCardProcessor: PayPalCardProcessor = new PayPalCardProcessor();

// executePayment(creditCardProcessor, 100);
// executePayment(debitCardProcessor, 50);
// executePayment(payPalCardProcessor, 200);
