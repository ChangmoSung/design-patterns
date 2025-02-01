// // Abstraction
// // Developers only get a function to perform an action
// // Developers don't worry about the behind logic to perform the action
// // It allows changes to code without affecting other parts of the system
// // 1. Simplicity - Hide complex details
// // 2. Maintainability - Changes don't affect application
// // 3. Reusability - Generic classes can be reused
// // 4. Modularity - Each object manages its own behavior
// // 5. Security - Hide internal states and implementation and expose only essential features
// // Secure because developers don't directly interact with the classes

// interface Shape {
//   area(): number;
//   perimeter(): number;
// }

// class Circle implements Shape {
//   constructor(private radius: number) {}

//   area(): number {
//     return Math.PI * this.radius * this.radius;
//   }

//   perimeter(): number {
//     return 2 * Math.PI * this.radius;
//   }
// }

// class Rectangle implements Shape {
//   constructor(private width: number, private height: number) {}

//   area(): number {
//     return this.width * this.height;
//   }

//   perimeter(): number {
//     return 2 * (this.width + this.height);
//   }
// }

// function calculateTotalArea(shape: Shape): number {
//   return shape.area();
// }

// const circle: Circle = new Circle(5);
// const rectangle: Rectangle = new Rectangle(4, 6);

// console.log("Area of Circle", calculateTotalArea(circle));
// console.log("Area of Rectangle", calculateTotalArea(rectangle));

// // ===

// const now = new Date();

// const currentYear = now.getFullYear();
// const currentMonth = now.getMonth() + 1;
// const currentDate = now.getDate();

// console.log("currentYear", currentYear);
// console.log("currentMonth", currentMonth);
// console.log("currentDate", currentDate);

// // ===

// // async function createUser() {
// //   const user = new User();

// //   const userRepository = getRepository(User);
// //   await userRepository.save(user);
// // }

// // async function getUser() {
// //   const userRepository = getRepository(User);
// //   const user = await userRepository.findOne({ id: 1 });
// //   return user;
// // }
