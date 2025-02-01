// Singleton Pattern
// A class has only one instance while providing a global access point to this instance
// Below are the advantages for the Logger class example
// 1. File Access Issues - Mitigates conflicts when writing to the same file
// 2. Performance - Optimizes resources by sharing the same file connection
// 3. Consistency - Ensures uniform logging format and destination
// 4. Configuration - Simplifies changes to logging format or level

// Disadvantages
// 1. Global state - Leads to shared state and increased coupling
// 2. Testing difficulty - Preserved state between tests can cause unexpected results
// 3. Subclassing - Difficult to subclass due to static methods and semantics of inheritance
// 4. Increased memory usage - If Singleton holds large properties due to the subclassing issue

// Use cases
// 1. Caching
// 2. Service proxies
// 3. Shared resources
// 4. Configuration data
// 5. Logger

class Singleton {
  private static instance: Singleton;
  private static _value: number;

  // Always has private constructor - it prevents the class from being instantiated from outside its definition
  // Can't be instantiated using the new keyword from outside the class
  private constructor() {}

  // Create instance
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value() {
    return Singleton._value;
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance1.value = 10;

console.log("instance1.value", instance1.value);
console.log("instance2.value", instance2.value);
console.log("instance1 === instance2", instance1 === instance2);

// ===

class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date();
    console.log(`[${timestamp.toLocaleString()}] - ${message}`);
  }
}
const logger1 = Logger.getInstance();
logger1.log("This is the first message");

const logger2 = Logger.getInstance();
logger2.log("This is the second message");
