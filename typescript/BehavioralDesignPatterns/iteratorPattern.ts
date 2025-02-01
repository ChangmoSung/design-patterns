// // Iterator Pattern

// // Provides a way to access elements sequentially

// // 1. Navigation logic
// // 2. Traversal Algorithms

// // Caveats
// // Increased Complexity for small projects
// // Performance Considerations - Potentially expensive computation
// // Iterators are stateful - Should be careful when using the same iterator in different parts of code
// // Increased Memory Consumption

// class ArrayIterator<T> {
//   private position: number = 0;

//   constructor(private collection: T[]) {}

//   // It returns a number because it iterates a collection of numbers (collection: number[])
//   public next(): T {
//     // Get the next element in the collection
//     const result: T = this.collection[this.position];
//     this.position += 1;
//     return result;
//   }

//   public hasNext(): boolean {
//     return this.position < this.collection.length;
//   }
// }

// // Client code
// const array: number[] = [1, 2, 3];
// const iterator = new ArrayIterator<number>(array);
// console.log(iterator.hasNext());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.hasNext());
// console.log(iterator.next());
// console.log(iterator.hasNext());

// ===

class User {
  constructor(public name: string) {}
}

interface MyIteratorResult<T> {
  value: T | null;
  done: boolean;
}

interface MyIterator<T> {
  next(): MyIteratorResult<T>;
  hasNext(): boolean;
}

interface Collection<T> {
  createIterator(): MyIterator<T>;
}

class UserCollection implements Collection<User> {
  constructor(private users: User[]) {}

  public createIterator(): MyIterator<User> {
    return new UserIterator(this);
  }

  public getItems(): User[] {
    return this.users;
  }
}

class UserIterator implements MyIterator<User> {
  private collection: UserCollection;
  private index: number = 0;

  constructor(collection: UserCollection) {
    this.collection = collection;
  }

  public hasNext(): boolean {
    console.log(this.collection.getItems());
    return this.index < this.collection.getItems().length;
  }

  public next(): MyIteratorResult<User> {
    if (this.hasNext()) {
      return {
        value: this.collection.getItems()[this.index++],
        done: false,
      };
    } else {
      return { value: null, done: true };
    }
  }
}

// Client Code
const users = [new User("Alice"), new User("Bob"), new User("Charlie")];

// Convert Array of Users into a collection
const userCollection = new UserCollection(users);

// create an iterator
const iterator = userCollection.createIterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
