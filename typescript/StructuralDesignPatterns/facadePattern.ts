// Facade Pattern
// Encapsulate a complex subsystem behind a simplified client interface

// 1. Simplified Interface - Provides a simple interface for clients to complex subsystems
// 2. Reduced Dependencies - Reduces dependencies from client code to subsystem classes
// 3. Decoupling of Subsystems and Client - Changesin subsystems have minimal effect on client code
// 4. Easy to use

class Amplifier {
  public turnOn(): void {
    console.log("Amplifier is turned On");
  }

  public setVolume(level: number): void {
    console.log(`Volume is set to ${level}`);
  }
}

class DvdPlayer {
  public turnOn(): void {
    console.log("The DVD Player is tuned on");
  }

  public play(movie: string) {
    console.log(`Playing ${movie}`);
  }
}

class Projector {
  public turnOn(): void {
    console.log("Projector is turned on");
  }

  public setInput(dvdPlayer: DvdPlayer): void {
    console.log("Input set to DvdPlayer");
  }
}

class Lights {
  public dim(level: number): void {
    console.log(`Lights dimmed to ${level}`);
  }
}

class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private dvdPlayer: DvdPlayer,
    private projector: Projector,
    private lights: Lights
  ) {}

  public watchMovie(movie: string, volume: number, level: number) {
    console.log(`Get Ready To Watch ${movie}`);
    this.lights.dim(level);
    this.amplifier.turnOn();
    this.amplifier.setVolume(volume);
    this.dvdPlayer.turnOn();
    this.projector.turnOn();
    this.projector.setInput(this.dvdPlayer);
    this.dvdPlayer.play(movie);
  }
}

// Client Code
const amplifier = new Amplifier();
const dvdPlayer = new DvdPlayer();
const projector = new Projector();
const lights = new Lights();

const homeTheater = new HomeTheaterFacade(
  amplifier,
  dvdPlayer,
  projector,
  lights
);

homeTheater.watchMovie("Inception", 10, 5);
