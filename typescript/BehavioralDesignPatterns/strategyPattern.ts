// Strategy Pattern

// Define a family of algorithms,
// put each of them into separate classes,
// and make their objects interchangeable.
// * A way to change the behavior of an object at runtime without changing its implementation

// 1. Beneficial when there are many conditions - if statements etc..
// 2. It makes code flexible - If the logic needs to change or expand
// 3. Isolate complexity into a single class
// 4. Open/Closed Principle
// 5. Code Organization

// Caveats
// Inconsistent Strategies - Different strategies are not consistent
// Discoverability - Harder for new devs to understand the flow at the beginning

interface PaymentStrategy {
  pay(amount: number): void;
}

class PaypalStrategy implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal`);
  }
}

class CreditCardStrategy implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using credit card`);
  }
}

class BitcoinStrategy implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using Bitcoin`);
  }
}

class ShoppingCart {
  private amount: number = 0;

  constructor(private strategy: PaymentStrategy) {}

  public setPaymentStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  public addToCart(value: number): void {
    this.amount += value;
  }

  public checkout(): void {
    this.strategy.pay(this.amount);
    this.amount = 0;
  }
}

// client code
const cart = new ShoppingCart(new PaypalStrategy());
cart.addToCart(100);
cart.addToCart(50);
cart.checkout();

cart.setPaymentStrategy(new CreditCardStrategy());
cart.addToCart(100);
cart.checkout();

// ===

interface FilterStrategy {
  apply(image: string): void;
}

class GreyScaleStrategy implements FilterStrategy {
  public apply(image: string): void {
    console.log(`Applying greyscale filter to ${image}`);
  }
}

class SepiaStrategy implements FilterStrategy {
  public apply(image: string): void {
    console.log(`Applying sepia filter to ${image}`);
  }
}

class NegativeStrategy implements FilterStrategy {
  public apply(image: string): void {
    console.log(`Applying negative filter to ${image}`);
  }
}

class ImageProcessor {
  constructor(private strategy: FilterStrategy) {}

  public setFilterStrategy(strategy: FilterStrategy): void {
    this.strategy = strategy;
  }

  public applyFilter(image: string): void {
    this.strategy.apply(image);
  }
}

// Client Code
const imageProcessor = new ImageProcessor(new GreyScaleStrategy());
imageProcessor.applyFilter("Image.jpg");

imageProcessor.setFilterStrategy(new SepiaStrategy());
imageProcessor.applyFilter("Image2.jpg");
