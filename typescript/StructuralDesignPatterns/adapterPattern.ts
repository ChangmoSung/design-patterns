// Adapter Pattern

// Provide a single interface to interact with multiple interfaces
// Allow the interface of an existing class to be used from another interface.
// Used to make existing classes work with each other without modifying.
// Useful when classes need to communicate with each other but don't have compatible interfaces

// 1. When interfaces are incompatible
// 2. When refactoring legacy code
// 3. Multiple inheritance (Because TypeScript allows only one inheritance)
// 4. When abstracting classes that are changed often
// 5. Reusability and Flexibility
// 6. Decoupling on Client Code - Reduce dependencies between components
// 7. Interoperability - Make different parts of a system work together

// Caveats
// Limited access to useful features of the class
// Coupling on Adapter and Adaptee
// Potential Confusion

interface IRectangle {
  getWidth(): number;
  getHeight(): number;
  area(): number;
}

class Rectangle implements IRectangle {
  constructor(private width: number, private height: number) {}

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public area(): number {
    return this.width * this.height;
  }
}

class Square {
  constructor(private side: number) {}

  public getSide(): number {
    return this.side;
  }

  public area(): number {
    return this.side * this.side;
  }
}

class SquareToRectangleAdapter implements IRectangle {
  constructor(private square: Square) {}

  public getWidth(): number {
    return this.square.getSide();
  }

  public getHeight(): number {
    return this.square.getSide();
  }

  public area(): number {
    return this.square.area();
  }
}

const square = new Square(5);
const adapter = new SquareToRectangleAdapter(square);

console.log(adapter.getWidth());
console.log(adapter.getHeight());
console.log(adapter.area());

// ===

interface IMySQLDatabase {
  connectToMySQL(uri: string): void;
  executeMySQLQuery(query: string): void;
}

class MySQLDatabase implements IMySQLDatabase {
  public connectToMySQL(uri: string): void {
    console.log(`Connecting to MySQL at ${uri}`);
  }

  public executeMySQLQuery(query: string): void {
    console.log(`Executing MySQL Query ${query}`);
  }
}

class PostgreSQLDatabase {
  public connectToPostgreSQL(uri: string): void {
    console.log(`Connecting to PostgreSQL ${uri}`);
  }

  public executePostgreSQLQuery(query: string): void {
    console.log(`Excuting PostgreSQL query ${query}`);
  }
}

class DatabaseAdapter implements IMySQLDatabase {
  constructor(private postgreSQL: PostgreSQLDatabase) {}

  public connectToMySQL(uri: string): void {
    this.postgreSQL.connectToPostgreSQL(uri);
  }

  public executeMySQLQuery(query: string): void {
    this.postgreSQL.executePostgreSQLQuery(query);
  }
}

// Client Code
const database = new DatabaseAdapter(new PostgreSQLDatabase());
database.connectToMySQL("postgresql://localhost:5432/mydb");
database.executeMySQLQuery("SELECT * FROM * users");
