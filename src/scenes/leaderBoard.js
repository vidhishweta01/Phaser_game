import Phaser from 'phaser';
import _ from 'lodash';
import config from '../config/config';
import Button from '../object/button';

export default class leaderBoardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
    this.scores = 0;
    this.placement = config.height / 2;
  }

  create() {
    this.getScore();
  }

  getScore = () => {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wFMA4yliEBsVkDHCw7Xx/scores';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
      .then((data) => {
        this.scores = data.result;
        this.dom();
      })
      .catch((error) => {
        throw new Error('Error:', error);
      });
  };

  dom = () => {
    this.gameButton = new Button(this, config.width / 2, 100, 'button', 'button2', 'Home', 'Title');
    let x = 450;
    const sortedscore = _.sortBy(this.scores, 'score');
    sortedscore.forEach((item) => {
      this.add.text(config.width / 2 - 200, config.height / 2 + x - 200, `${item.user} SCORE: ${item.score}`, { fontSize: '42px', fill: '#fff' });
      x -= 60;
      this.placement += 50;
    });
  }
}