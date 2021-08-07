import Phaser from 'phaser';
export const gameConfig = {
  type: Phaser.AUTO,
  width: 1848,
  height: 1019,
  parent: 'canvas',
  dom: {
    createContainer: true,
  },
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
  
};