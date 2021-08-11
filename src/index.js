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

// var config = {
//   type: Phaser.AUTO,
//   width: 1848,
//   height: 1019,
//   physics: {
//       default: 'arcade',
//       arcade: {
//           gravity: { y: 300 },
//           debug: false
//       }
//   },
//   scene: {
//       preload: preload,
//       create: create,
//       update: update
//   }
// };

// let player;
// let stars;
// let bombs;
// let platforms;
// let cursors;
// let score = 0;
// let gameOver = false;
// let scoreText;

// const game = new Phaser.Game(config);

// function preload ()
// {
//   this.load.image('sky1', 'assets/sky1.jpeg');
//   this.load.image('ground', 'assets/br.png');
//   this.load.image('star', 'assets/coins.png');
//   this.load.image('bomb', 'assets/bomb1.gif');
//   this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 77 , frameHeight: 100 });
// }

// function create ()
// {
//   //  A simple background for our game
//   this.add.image(400, 300, 'sky1');

//   //  The platforms group contains the ground and the 2 ledges we can jump on
//   platforms = this.physics.add.staticGroup();

//   //  Here we create the ground.
//   //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
//   platforms.create(400, 870, 'ground').setScale(2).refreshBody();

//   //  Now let's create some ledges
//   platforms.create(110, 300, 'ground');
//   platforms.create(770, 480, 'ground');
//   platforms.create(1300, 680, 'ground');
//   platforms.create(1115, 950, 'ground');
//   platforms.create(1800, 500, 'ground');
//   platforms.create(1600, 950, 'ground');
//   platforms.create(1300, 319, 'ground');

//   // The player and its settings
//   player = this.physics.add.sprite(100, 450, 'dude');

//   //  Player physics properties. Give the little guy a slight bounce.
//   player.setBounce(0.3);
//   player.setCollideWorldBounds(true);

//   //  Our player animations, turning, walking left and walking right.
//   this.anims.create({
//       key: 'left',
//       frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 1 }),
//       frameRate: 5,
//       repeat: -1
//   });

//   this.anims.create({
//       key: 'turn',
//       frames: [ { key: 'dude', frame: 2 } ],
//       frameRate: 20
//   });

//   this.anims.create({
//       key: 'right',
//       frames: this.anims.generateFrameNumbers('dude', { start: 3, end: 4 }),
//       frameRate: 5,
//       repeat: -1
//   });

//   //  Input Events
//   cursors = this.input.keyboard.createCursorKeys();

//   //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
//   stars = this.physics.add.group({
//       key: 'star',
//       repeat: 15,
//       setXY: { x: 100, y: 0, stepX: 100 }
//   });

//   stars.children.iterate(function (child) {

//       //  Give each star a slightly different bounce
//       child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

//   });

//   bombs = this.physics.add.group();

//   //  The score
//   scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

//   //  Collide the player and the stars with the platforms
//   this.physics.add.collider(player, platforms);
//   this.physics.add.collider(stars, platforms);
//   this.physics.add.collider(bombs, platforms);

//   //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
//   this.physics.add.overlap(player, stars, collectStar, null, this);

//   this.physics.add.collider(player, bombs, hitBomb, null, this);
// }

// function update ()
// {
//   if (gameOver)
//   {
//       return;
//   }

//   if (cursors.left.isDown)
//   {
//       player.setVelocityX(-300);

//       player.anims.play('left', true);
//   }
//   else if (cursors.right.isDown)
//   {
//       player.setVelocityX(300);

//       player.anims.play('right', true);
//   }
//   else
//   {
//       player.setVelocityX(0);

//       player.anims.play('turn');
//   }

//   if (cursors.up.isDown && player.body.touching.down)
//   {
//       player.setVelocityY(-330);
//   }
// }

// function collectStar (player, star)
// {
//   star.disableBody(true, true);

//   //  Add and update the score
//   score += 10;
//   scoreText.setText('Score: ' + score);

//   if (stars.countActive(true) === 0)
//   {
//       //  A new batch of stars to collect
//       stars.children.iterate(function (child) {

//           child.enableBody(true, child.x, 0, true, true);

//       });

//       var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

//       var bomb = bombs.create(x, 16, 'bomb');
//       bomb.setBounce(1);
//       bomb.setCollideWorldBounds(true);
//       bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
//       bomb.allowGravity = false;

//   }
// }

// function hitBomb (player, bomb)
// {
//   this.physics.pause();

//   player.setTint(0xff0000);

//   player.anims.play('turn');

//   gameOver = true;
// }
