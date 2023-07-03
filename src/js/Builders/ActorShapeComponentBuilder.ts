import { Vector2 } from "../Engine";
import Shape from "../Engine/ActorComponents/Shape";
import IActor from "../Engine/Interfaces/IActor";
import IConcreteShape from "../Engine/Interfaces/IConcreteShape";
import IVector2 from "../Engine/Interfaces/IVector2";
import Rectangle from "../Engine/Shapes/Rectangle";

export default class ActorShapeComponentBuilder {
  private _concreteShape: IConcreteShape = new Rectangle(new Vector2(0, 0));

  createRectangle(size: IVector2): ActorShapeComponentBuilder {
    this._concreteShape = new Rectangle(size);

    return this;
  }

  build(actor: IActor): Shape {
    return new Shape(actor, this._concreteShape);
  }
}