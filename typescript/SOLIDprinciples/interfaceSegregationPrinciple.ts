// Interface Segregation Principle (ISP)
// Don't add additional functionality to an existing interface by adding new methods.
// Instead, create a new interface.
// Break a large interface into smaller, more specific ones.
// 1. Improved Maintainability - Promotes smaller, easier to understand interfaces
// 2. Reduced Impact of Changes

interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface FaxMachine {
  fax(document: Document): void;
}

class SimplePrinter implements Printer {
  print(document: Document) {
    console.log("The machine is printing");
  }
}

class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
  print(document: Document) {
    console.log("The machine is printing");
  }

  scan(document: Document) {
    console.log("The machine is scanning");
  }

  fax(document: Document) {
    console.log("The machine is faxing");
  }
}

// ===

interface Post {
  title: string;
  content: string;
}

interface Comment {
  title: string;
  content: string;
}

interface PostCreator {
  createPost(post: Post): void;
}

interface CommentCreator {
  commentPost(comment: Comment): void;
}

interface PostSharer {
  sharePosts(post: Post): void;
}

// AdminUser is not the best place to implement createPost, commentPost, and sharePosts
// This is just for an example of Interface Segregation Principle
class AdminUser implements PostCreator, CommentCreator, PostSharer {
  createPost(post: Post): void {
    console.log(`Admin Create ${post}`);
  }

  commentPost(comment: Comment): void {
    console.log(`Admin Comment ${comment}`);
  }

  sharePosts(post: Post): void {
    console.log(`Admin Share ${post}`);
  }
}

class RegularUser implements CommentCreator, PostSharer {
  commentPost(comment: Comment): void {
    console.log(`Regular Comment ${comment}`);
  }

  sharePosts(post: Post): void {
    console.log(`Regular Share ${post}`);
  }
}
