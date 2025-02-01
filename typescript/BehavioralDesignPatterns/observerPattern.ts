// Observer Pattern

// Create a subscription mechanism to send notifications
// to multiple objects about new events that happen to the object they're observing.

// 1. When I want to observe changes in an object

// Caveats
// Possible unexpected updates
// Memory Leaks - Must remove observers when they're no longer needed

// interface Observer {
//   update(subject: Subject): void;
// }

// class ConcreteObserever implements Observer {
//   constructor(private id: number) {}

//   public update(subject: Subject): void {
//     console.log(
//       `Observer ${this.id} updated, new state: ${subject.getState()}`
//     );
//   }
// }

// // subject is what is being watched
// interface Subject {
//   addObserver(observer: Observer): void;
//   removeObserver(observer: Observer): void;
//   notifyObservers(): void;
//   getState(): number;
//   setState(state: number): void;
// }

// class ConcreteSubject implements Subject {
//   private observers: Observer[] = [];
//   private state: number = 0;

//   public addObserver(observer: Observer): void {
//     const found = this.observers.includes(observer);
//     if (found) {
//       return console.log("Observer already exists");
//     }

//     this.observers.push(observer);
//     console.log("Observer Added Successfully");
//   }

//   public removeObserver(observer: Observer): void {
//     const observerIndex = this.observers.indexOf(observer);
//     if (!observerIndex) {
//       return console.log("Observer Does not Exist");
//     }
//     this.observers.splice(observerIndex, 1);
//     console.log("Observer was successfully removed");
//   }

//   public notifyObservers(): void {
//     this.observers.forEach((observer) => {
//       console.log("this", this);
//       observer.update(this);
//     });
//   }

//   public getState(): number {
//     return this.state;
//   }

//   public setState(state: number): void {
//     this.state = state;
//     console.log("Setting State ....");
//     this.notifyObservers();
//   }
// }

// // client code
// const subject = new ConcreteSubject();

// const observer1 = new ConcreteObserever(1);
// subject.addObserver(observer1);

// const observer2 = new ConcreteObserever(2);
// subject.addObserver(observer2);

// subject.setState(123);

// ===

interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(): void {
    if (
      this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      for (const observer of this.observers) {
        observer.update(this.temperature, this.humidity, this.pressure);
      }
    }
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }

  // additional weather data
}

class CurrentConditionsDisplay implements Observer {
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;

  constructor(private weatherData: Subject) {
    this.weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  public display(): void {
    if (
      this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      console.log(
        `Temperature: ${this.temperature}, Humidity: ${this.humidity}, Pressure: ${this.pressure}`
      );
    } else {
      console.log("Weather data is not available");
    }
  }
}

// client code
const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);

// Simulate new Weather Adjustments
weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 30.4);
