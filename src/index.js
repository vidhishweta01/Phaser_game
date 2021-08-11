import './style.css';
import Phaser from 'phaser';
import Model from './model';
import config from './config/config';
import BootScene from './scenes/bootScene';
import PreloaderScene from './scenes/preloader';
import TitleScene from './scenes/title';
import GameSc from './scenes/game';
import leaderBoardScene from './scenes/leaderBoard';
import OptionsScene from './scenes/optionSC';
import CreditsScene from './scenes/creditScene';
import NameScene from './scenes/nameScene';
import EndScene from './scenes/endScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('GameSc', GameSc);
    this.scene.add('Leaderboard', leaderBoardScene);
    this.scene.add('Optionsc', OptionsScene);
    this.scene.add('Creditss', CreditsScene);
    this.scene.add('Name', NameScene);
    this.scene.add('End', EndScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
