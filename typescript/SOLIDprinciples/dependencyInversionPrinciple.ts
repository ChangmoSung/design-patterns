// Dependency Inversion Principle

// Should depend on interfaces instead of concrete implementation

// High-level modules should not depend on low-level modules.
// Both should depend on abstractions.

// Abstractions should not depend on details.
// Details should depend on abstractions.

// 1. Decoupling of Code - Reduces the interlinking of modules in a system

interface IDatabase {
  save(data: string): void;
}

class MySqlDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved to MySQL`);
  }
}

class MongoDbDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved to MongoDB`);
  }
}

class HighLevelModule {
  constructor(private database: IDatabase) {}

  execute(data: string) {
    this.database.save(data);
  }
}

const mysql: MySqlDatabase = new MySqlDatabase();
const mongo: MongoDbDatabase = new MongoDbDatabase();

const user: HighLevelModule = new HighLevelModule(mysql);
user.execute("Hello");

const post: HighLevelModule = new HighLevelModule(mongo);
post.execute("Post");
