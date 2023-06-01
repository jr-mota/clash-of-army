import IActor from "../Interfaces/IActor";
import IActorSpriteComponent from "../Interfaces/IActorSpriteComponent";
import IVector2 from "../Interfaces/IVector2";
import Vector2 from "../Vector2";

export default abstract class Actor implements IActor {
  private readonly _position: IVector2 = new Vector2(0, 0);

  private _sprite: null | IActorSpriteComponent = null;

  private _radians: number = 0;

  constructor() {}

  getPosition(): IVector2 {
    return this._position;
  }

  getSpriteComponent(): null | IActorSpriteComponent {
    return this._sprite;
  }

  getRadians(): number {
    return this._radians;
  }

  setPosition(x: number, y: number): void {
    this._position.x = x;
    this._position.y = y;
  }

  setSpriteComponent(spriteComponent: IActorSpriteComponent) {
    this._sprite = spriteComponent;
  }

  update(timeStep: number): void {}
}
