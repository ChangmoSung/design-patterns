// // Bridge Pattern - Open/Closed Principle

// // Split a large class or a set of closely related classes
// // into 2 separate hierarchies-abstraction
// // and implementation - which can be developed independently.

// // 1. Decouple an abstraction from its implementation - Can change the implementation without affecting the abstraction

// interface MediaPlayerImplementation {
//   playAudio(): void;
//   playVideo(): void;
// }

// class WindowsMediaPlayer implements MediaPlayerImplementation {
//   public playAudio(): void {
//     console.log("Play audio for Windows");
//   }
//   public playVideo(): void {
//     console.log("Play video for Windows");
//   }
// }

// class MacOSMediaPlayer implements MediaPlayerImplementation {
//   public playAudio(): void {
//     console.log("Play audio for MacOS");
//   }
//   public playVideo(): void {
//     console.log("Play video for MacOS");
//   }
// }

// abstract class MediaPlayerAbstration {
//   constructor(protected implementation: MediaPlayerImplementation) {}

//   abstract playFile(): void;
// }

// class AudioPlayer extends MediaPlayerAbstration {
//   public playFile(): void {
//     this.implementation.playAudio();
//   }
// }

// class VideoPlayer extends MediaPlayerAbstration {
//   public playFile(): void {
//     this.implementation.playVideo();
//   }
// }

// // Client code
// const windowsAudioPlayer = new AudioPlayer(new WindowsMediaPlayer());
// windowsAudioPlayer.playFile();

// const macOSVideoPlayer = new VideoPlayer(new MacOSMediaPlayer());
// macOSVideoPlayer.playFile();

// // ===

// interface Database {
//   connect(): void;
//   query(query: string): void;
//   close(): void;
// }

// class PostgreSQLDatabase implements Database {
//   public connect(): void {
//     console.log("Connecting to PostgreSql");
//   }
//   public query(query: string): void {
//     console.log(`Executing query: ${query}`);
//     // detailed implementation
//   }
//   public close(): void {
//     console.log("Closing connection PostgreSQL");
//   }
// }

// class MongoDBDatabase implements Database {
//   public connect(): void {
//     console.log("Connecting to MongoDB");
//   }
//   public query(query: string): void {
//     console.log(`Executing query: ${query}`);
//     // detailed implementation
//   }
//   public close(): void {
//     console.log("Closing connection MongoDB");
//   }
// }

// abstract class DatabaseService {
//   constructor(protected database: Database) {}

//   abstract fetchData(query: string): void;
// }

// class ClientDatabaseService extends DatabaseService {
//   public fetchData(query: string): void {
//     this.database.connect();
//     this.database.query(query);
//     this.database.close();
//   }
// }

// // Client Code
// const postgreService = new ClientDatabaseService(new PostgreSQLDatabase());
// postgreService.fetchData("USERS");

// const mongoDbService = new ClientDatabaseService(new MongoDBDatabase());
// mongoDbService.fetchData("USERS");
