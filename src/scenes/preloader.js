//function preload ()
  //{
    // this.load.audio('bgMusic', ['assets/GameMusic.wav']);
    // this.load.audio('coinSound', ['assets/coins.wav']);
    // this.load.audio('deathSound', ['assets/deathSound.png']);
    // this.load.image('sky1', 'assets/sky1.jpeg');
    // this.load.image('ground', 'assets/br.png');
    // this.load.image('star', 'assets/coins.png');
    // this.load.image('bomb', 'assets/bomb1.gif');
    // this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 77, frameHeight: 100 });
    // this.load.spritesheet('playerDeath', 'assets/death.png', { frameWidth: 133, frameHeight: 84 });    
  //}

  import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    // add logo image
    this.add.image(960, 540, 'logo').setScale(1.5);

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(800, 920, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 + 250,
      text: 'LOADING',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 + 300,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 350,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(810, 930, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    // load assets needed in our game
    this.load.image('button', 'assets/button.png');
    this.load.image('button1', 'assets/button1.png');
    this.load.image('phaserLogo', 'assets/logo.png');
    this.load.image('box', 'assets/greybox.png');
    this.load.image('checkedBox', 'assets/checkbox.png');
    this.load.audio('bgMusic', ['assets/GameMusic.wav']);
    this.load.audio('deathSound', ['assets/deathSound.wav']);
    this.load.audio('coinSound', ['assets/coins.wav']);

    this.load.html('nameForm', 'assets/nameForm.html');

    this.load.image('sky', 'assets/BG/sky1.jpeg');
    this.load.image('ground', 'assets/br.png');
    this.load.image('star', 'assets/coin.png');
    this.load.image('bomb', 'assets/bomb1.gif');
    
    this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 77, frameHeight: 100 });
    this.load.spritesheet('playerDeath', 'assets/death.png', { frameWidth: 133, frameHeight: 84 });
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}