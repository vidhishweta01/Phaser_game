import Phaser from 'phaser';
import config from '../config/config';
import Button from '../object/button';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    // Game
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'button', 'button1', 'Play', 'Name');

    // Leaderboard
    this.scoresButton = new Button(this, config.width / 2, config.height / 2, 'button', 'button1', 'Leaderboard', 'Leaderboard');

    // Options
    this.optionsButton = new Button(this, config.width / 2, config.height / 2 + 100, 'button', 'button1', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 200, 'button', 'button1', 'Credits', 'Credits');

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton(gameObject, oSet = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width / 2, config.height / 2 - oSet * 100, config.width, config.height),
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
  }
}