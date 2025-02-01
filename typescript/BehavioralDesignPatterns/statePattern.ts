// State Pattern

// One of the most commonly used pattern
// Allow an object to change its behavior when its internal state changes

// 1. Large if statements or switch-case statements based on object state
// 2. Complex or error-prone state transitions
// 3. State-specific behavior spread out throughout the code
// 4. Single Responsibility Principle
// 5. Open/Closed Principle
// 6. Simplified Complex State Logic
// 7. Separation of Concerns
// 8. Dynamic State Transitions at runtime

// Caveats
// Overkill for Simple State Transitions

interface LightState {
  switchState(lightSwitch: LightSwitch): void;
}

class OnState implements LightState {
  public switchState(lightSwitch: LightSwitch): void {
    console.log("Light state is On. Turning Off ...");
    lightSwitch.setState(new OffState());
  }
}
class OffState implements LightState {
  public switchState(lightSwitch: LightSwitch): void {
    console.log("Light state is Off. Turning On ...");
    lightSwitch.setState(new OnState());
  }
}

class LightSwitch {
  constructor(private state: LightState) {}

  public setState(state: LightState): void {
    this.state = state;
  }
  public press(): void {
    this.state.switchState(this);
  }
}

// client code
const lightSwitch = new LightSwitch(new OffState());
lightSwitch.press();
lightSwitch.press();

// ===

interface Tool {
  onMouseDown(): void;
  onMouseUp(): void;
}

class SelectionTool implements Tool {
  public onMouseDown(): void {
    console.log("Selection started");
  }
  public onMouseUp(): void {
    console.log("Selection drawn");
  }
}

class BrushTool implements Tool {
  public onMouseDown(): void {
    console.log("Brush stroke started");
  }
  public onMouseUp(): void {
    console.log("Brush stroke drawn");
  }
}

class EraserTool implements Tool {
  public onMouseDown(): void {
    console.log("Eraser started");
  }
  public onMouseUp(): void {
    console.log("Erased");
  }
}

class Canvas {
  constructor(private tool: Tool) {}

  public setTool(tool: Tool): void {
    this.tool = tool;
  }

  public onMouseDown(): void {
    this.tool.onMouseDown();
  }

  public onMouseUp(): void {
    this.tool.onMouseUp();
  }
}

// client code
const canvas = new Canvas(new SelectionTool());
canvas.onMouseDown();
canvas.onMouseUp();

canvas.setTool(new BrushTool());
canvas.onMouseDown();
canvas.onMouseUp();

canvas.setTool(new EraserTool());
canvas.onMouseDown();
canvas.onMouseUp();
