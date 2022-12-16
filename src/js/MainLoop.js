export default class MainLoop {
  constructor(game, renderer) {
    this.game = game;
    this.renderer = renderer;

    this.lastDT = Date.now();

    this.rAF = null;

    this.paused = false;
  }

  start() {
    this.rAF = window.requestAnimationFrame(this.loop.bind(this));
  }

  pause() {
    this.paused = true;
  }

  continue() {
    this.paused = false;
  }

  loop() {
    if (this.paused) return;

    const dt = Date.now() - this.lastDT;
    this.lastDT = Date.now();

    this.game.getEffectManager().loop(dt, this.renderer);
    this.game.getWorldEntityManager().loop(dt, this.renderer);

    window.requestAnimationFrame(this.loop.bind(this));
  }
}
