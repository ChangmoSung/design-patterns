// Template Method Pattern

// Defines the skeleton of an algorithm in a base class and
// lets subclasses override steps of the algorithm without changing the structure.

// Make parts of an algorithm optional, mandatory, or customizable by subclasses.

// 1. Whenever I have a master algorithm for performing multiple tasks
// and other algorithms inherit the master algorithm with a little bit modification
// 2. Extend part of al algorithm
// 3. Algorithm has mandatory as well as optional parts
// 4. Complex conditional logic - if statements etc..
// 5. Algorithm has a specific sequence of operations
// e,g,. To bake cake, preheat -> mix -> bake -> cooling down -> decorate
// For every cake making, I have to follow the sequence
// 6. Code Reusability
// 7. Client Interface Segregation - Client code doesn't need to change when method implementation is changed
// 8. Extensibility

// Caveats
// Inheritance Complexity
// Limited Flexibility in Algorithm Structure - Subclasses can't change the order or add/remove steps of the algorithm
// Lack of Runtime Flexibility - Determines which version will be executed at compile-time
// May lead to a large number of classes

abstract class CakeRecipe {
  public bakeCake(): void {
    this.preHeatOven();
    this.mixIngredients();
    this.bake();
    this.coolingDown();
    this.decorate();
  }

  // Non-abstract methods are what we use in common
  // Can change the behavior if needed though
  protected preHeatOven(): void {
    console.log("Preheating oven to 175 Degree C");
  }

  protected bake(): void {
    console.log("Baking cake ....");
  }

  protected coolingDown(): void {
    console.log("Cooling down the cake ...");
  }

  protected decorate(): void {
    console.log("Decorating cake ...");
  }

  // Abstract because ingredients are different for each cake
  protected abstract mixIngredients(): void;
}

class ChocolateCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: chocolate, sugar, butter, flour, eggs");
  }

  protected decorate(): void {
    console.log(" Decorating cake with chocolate");
  }
}

class VanillaCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: vanilla extract, sugar, butter, flour, eggs");
  }
}

// client code
function bakecake(cake: CakeRecipe) {
  cake.bakeCake();
}

console.log("Baking a chocolate cake");
bakecake(new ChocolateCake());

console.log("Baking a vanilla cake");
bakecake(new VanillaCake());

// ===

abstract class DataParser {
  public parseData(): void {
    this.loadData();
    const data = "Sample Data";
    const parsedData = this.parse(data);
    this.validate(parsedData);
    this.useData(parsedData);
  }

  protected loadData(): void {
    console.log("Loading Data...");
  }

  protected validate(data: any): void {
    console.log("Validating data....");
  }

  protected useData(data: any): void {
    console.log("Using Data...");
  }

  protected abstract parse(data: any): void;
}

class JSONParser extends DataParser {
  protected parse(data: any): void {
    console.log("Parsing data as JSON");
    return data;
  }
}

class XMLParser extends DataParser {
  protected parse(data: any): void {
    console.log("Parsing data as XML");
    return data;
  }
}

// Client code
function dataParser(dataParser: DataParser) {
  dataParser.parseData();
}

console.log("Parsing JSON data");
dataParser(new JSONParser());

console.log("Parsing XML data");
dataParser(new XMLParser());
