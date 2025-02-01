// Prototype Pattern
// Allows cloning objects without coupling to their specific classes.
// Allows objects to be created without specifying their concrete class.
// Good for creating a clone.

// Useful cases
// 1. Clone complex or similar objects
// 2. High cost of object creation
// 4. Preserving historical states

interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this };
    return clone;
  }

  public getUserDetails(): UserDetails {
    return this.user;
  }
}

const user1 = new ConcretePrototype({
  name: "Name",
  age: 30,
  email: "email@example.com",
});
const user2 = user1.clone();

console.log("user1", user1);
console.log("user2", user2);
console.log("user1 === user2", user1 === user2);

// ===

interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

interface Shape {
  properties: ShapeProperties;
  clone(): Shape;
}

class Rectangle implements Shape {
  constructor(
    public properties: ShapeProperties,
    public width: number,
    public height: number
  ) {}

  public clone(): Shape {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Rectangle(clonedProperties, this.width, this.height);
  }
}

const redRectangle: Shape = new Rectangle(
  {
    color: "red",
    x: 20,
    y: 100,
  },
  10,
  20
);

const anotherRectangle: Shape = redRectangle.clone();
anotherRectangle.properties.color = "blue";

console.log("redRectangle", redRectangle);
console.log("anotherRectangle", anotherRectangle);
