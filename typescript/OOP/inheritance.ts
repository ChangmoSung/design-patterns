// // Inheritance
// // Create a new class based on an existing class
// // Code Reusability and Recycling - Reduces repetitive code
// // Polymorphism is built using inheritance

// class Animal {
//   constructor(public name: string) {}

//   move(distance: number): void {
//     console.log(`${this.name} moved ${distance} meters`);
//   }
// }

// class Dog extends Animal {
//   constructor(public name: string = "dog") {
//     super(name);
//   }
// }

// const myDog = new Dog();
// myDog.move(5);

// // ===

// class Product {
//   constructor(
//     public id: string,
//     public price: number,
//     public description: string
//   ) {}

//   display(): void {
//     console.log(
//       `ID: ${this.id}, Title: ${this.price}, Description: ${this.description}`
//     );
//   }
// }

// class Book extends Product {
//   constructor(
//     public id: string,
//     public price: number,
//     public description: string,
//     public author: string,
//     public title: string
//   ) {
//     super(id, price, description);
//   }

//   display(): void {
//     super.display();
//     console.log(`Author: ${this.author}, Title: ${this.title}`);
//   }
// }

// class Electronic extends Product {
//   constructor(
//     public id: string,
//     public price: number,
//     public description: string,
//     public brand: string,
//     public model: string
//   ) {
//     super(id, price, description);
//   }

//   display(): void {
//     super.display();
//     console.log(`Brand: ${this.brand}, Model: ${this.model}`);
//   }
// }

// const book = new Book("1", 10, "A good book", "John Doe", "John Doe's book");
// book.display();

// const laptop = new Electronic("2", 20, "A good laptop", "Apple", "MacBook");
// laptop.display();
