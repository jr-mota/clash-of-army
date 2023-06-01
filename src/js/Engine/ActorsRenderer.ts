import IActor from "../Interfaces/IActor";
import IActorRenderer from "../Interfaces/IActorsRenderer";
import IRenderer from "../Interfaces/IRenderer";
import IResourceManager from "../Interfaces/IResourceRenderer";

export default class ActorsRenderer implements IActorRenderer {
  private readonly _renderer: IRenderer;
  private readonly _resourceManager: IResourceManager;

  constructor(renderer: IRenderer, resourceManager: IResourceManager) {
    this._renderer = renderer;
    this._resourceManager = resourceManager;
  }

  renderActor(actor: IActor) {
    const actorSpriteComponent = actor.getSpriteComponent();

    if (!actorSpriteComponent) {
      return;
    }

    const spriteSheet = this._resourceManager
      .getSpriteSheets()
      .get(actorSpriteComponent.getSpriteSheetName());

    if (!spriteSheet) {
      return;
    }

    this._renderer.drawImage(
      spriteSheet,
      actor.getPosition().x,
      actor.getPosition().y,
      actorSpriteComponent.getSize().x,
      actorSpriteComponent.getSize().y,
      actor.getRadians(),
      actorSpriteComponent.getSource().x,
      actorSpriteComponent.getSource().y,
      actorSpriteComponent.getSize().x,
      actorSpriteComponent.getSize().y,
      0,
      0
    );
  }
}