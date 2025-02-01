// // Command Pattern

// // Turn a request into a standalone object with all info on the request

// // 1. Deferred Operation - Job Queue
// // 2. Undo/Redo
// // 3. When I need to specify the exact operation at runtime
// // 4. Extensibility
// // 5. Decoupling - The invoker doesn't need to know specifics
// // 6. Separate complex commands

// // Caveats
// // May lead to a large number of classes
// // Debugging can be hard because of dynamic and deferred command execution
// // Undo Functionality Difficulty

// interface ICommand {
//   execute(): void;
//   undo(): void;
// }

// class Light {
//   public turnOn(): void {
//     console.log("The Light is on");
//   }

//   public turnOff(): void {
//     console.log("The Light is off");
//   }
// }

// class TurnOnCommand implements ICommand {
//   constructor(private light: Light) {}

//   public execute(): void {
//     this.light.turnOn();
//   }

//   public undo(): void {
//     this.light.turnOff();
//   }
// }

// class TurnOffCommand implements ICommand {
//   constructor(private light: Light) {}

//   public execute(): void {
//     this.light.turnOff();
//   }

//   public undo(): void {
//     this.light.turnOn();
//   }
// }

// class SimpleRemoteControl {
//   private currentCommand!: ICommand;
//   private undoCommand!: ICommand;
//   private commandQueue: ICommand[] = [];

//   public setCommand(command: ICommand): void {
//     this.undoCommand = this.currentCommand;
//     this.currentCommand = command;
//     this.commandQueue.push(command);
//   }

//   public buttonWasPressed(): void {
//     if (this.commandQueue.length) {
//       const command = this.commandQueue.shift();
//       command?.execute();
//     }
//   }

//   public undoButtonWasPressed(): void {
//     this.undoCommand.execute();
//   }

//   public hasCommands(): boolean {
//     return this.commandQueue.length > 0;
//   }
// }

// // client Code
// const remote: SimpleRemoteControl = new SimpleRemoteControl();
// const light: Light = new Light();

// // Turning On The Light
// remote.setCommand(new TurnOnCommand(light));
// remote.buttonWasPressed();

// // Turning Off the Light
// remote.setCommand(new TurnOffCommand(light));
// remote.buttonWasPressed();

// // Undo last operation
// remote.undoButtonWasPressed();

// // Create a command que
// remote.setCommand(new TurnOnCommand(light));
// remote.setCommand(new TurnOffCommand(light));

// while (remote.hasCommands()) {
//   remote.buttonWasPressed();
// }

// ===

interface ICommand {
  execute(): void;
  undo(): void;
}

class MyFileSystem {
  private commandQueue: ICommand[] = [];

  public addCommand(command: ICommand): void {
    this.commandQueue.push(command);
  }

  public executeCommand(): void {
    if (this.commandQueue.length > 0) {
      const command = this.commandQueue.shift();
      command?.execute();
    }
  }

  public undoCommand(): void {
    if (this.commandQueue.length > 0) {
      const command = this.commandQueue.pop();
      command?.undo();
    }
  }

  public hasCommands(): boolean {
    return this.commandQueue.length > 0;
  }
}

class CreateFileCommand implements ICommand {
  constructor(private path: string) {}

  public execute(): void {
    console.log(`Creating file at ${this.path}`);
  }

  public undo(): void {
    console.log(`Deleting file at ${this.path}`);
  }
}

class DeleteFileCommand implements ICommand {
  constructor(private path: string) {}

  public execute(): void {
    console.log(`Deleting file at ${this.path}`);
  }

  public undo(): void {
    console.log(`Restoring file at ${this.path}`);
  }
}

class ReadFileCommand implements ICommand {
  constructor(private path: string) {}

  public execute(): void {
    console.log(`Reading file at ${this.path}`);
  }

  public undo(): void {
    console.log("undo operation not available");
  }
}

class UpdateFileCommand implements ICommand {
  constructor(
    private path: string,
    private newContent: string,
    private oldContent: string
  ) {}

  public execute(): void {
    console.log(`Updating file ${this.path}, new content: ${this.newContent}`);
  }

  public undo(): void {
    console.log(`Reverting file ${this.path}, old content: ${this.oldContent}`);
  }
}

// client code
const myFileSystem = new MyFileSystem();

myFileSystem.addCommand(new CreateFileCommand("/path/file.txt"));
myFileSystem.addCommand(
  new UpdateFileCommand("/path/file.txt", "new content", "old content")
);
myFileSystem.addCommand(new ReadFileCommand("/path/file.txt"));
myFileSystem.addCommand(new DeleteFileCommand("/path/file.txt"));

while (myFileSystem.hasCommands()) {
  myFileSystem.executeCommand();
}

// myFileSystem.undoCommand();
