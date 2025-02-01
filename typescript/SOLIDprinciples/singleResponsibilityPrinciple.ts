// // Single Responsibility Principle (SRP)
// // A class should only have one reason to change
// // A class should only have one responsibility or job
// // 1. Easier Maintenance - A class with a single responsibility is easier to maintain and update
// // 2. Improved Understandability - The purpose of a class with a single responsibility is clear to developers
// // 3. Easiter Testing - Focused tests can be written for a class with a single responsibility
// // 4. Reduced Coupling - By minimizing the impact of changes, the SRP reduces the risk of creating bugs
// // 5. Reusability - Classes can be reusable in different contexts

// // Assign properties of user
// class User {
//   constructor(name: string, email: string) {}
// }

// // Create methods for user
// class UserAuthentication {
//   constructor(user: User) {}

//   authenticate(password: string) {
//     // implementation logic
//   }
// }

// // ===

// class BlogPost {
//   title: string;
//   content: string;

//   constructor(title: string, content: string) {
//     this.title = title;
//     this.content = content;
//   }
// }

// class BlogPostDisplay {
//   constructor(public blogPost: BlogPost) {}

//   displayHTML() {
//     return `<h1>${this.blogPost.title} ${this.blogPost.content}</h1>`;
//   }
// }

// class BlogPostJson {
//   constructor(public blogPost: BlogPost) {}

//   returnJSON() {
//     return JSON.stringify({
//       title: this.blogPost.title,
//       content: this.blogPost.content,
//     });
//   }
// }
