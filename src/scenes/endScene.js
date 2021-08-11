import Phaser from 'phaser';
import gameConfig from '../config/config';
// eslint-disable-next-line import/no-cycle
import { score } from './game';

export default class endScene extends Phaser.Scene {
  constructor() {
    super('End');
  }

  create() {
    const postScore = (score) => {
      const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wFMA4yliEBsVkDHCw7Xx/scores';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: gameConfig.user,
          score,
        }),
      }).then((response) => response.json())
        .catch((error) => {
          throw new Error('Error:', error);
        });
    };
    postScore(score.score);

    this.add.text(gameConfig.width / 2, gameConfig.height / 2, `${gameConfig.user}`, { fontSize: '42px', fill: '#fff' });
    this.add.text(gameConfig.width / 2, gameConfig.height / 2 + 40, `SCORE: ${score.score}`, { fontSize: '42px', fill: '#fff' });

    const resetButton = this.add.text(gameConfig.width / 2, gameConfig.height / 2 + 100, 'Restart', { fontSize: '42px', fill: '#0f0' });
    resetButton.setInteractive();

    resetButton.on('pointerdown', () => { window.location.reload(); });
  }
}