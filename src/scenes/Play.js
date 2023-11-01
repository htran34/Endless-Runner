// initialize high score
p1HighScore = 0;

class Play extends Phaser.Scene {
    constructor() {
        super("playScene2");
    }

    preload() {
        // load images/tile sprites
        this.load.image('mario', './assets/mario.png');
    }

    create() {
        // add blue-colored sky background
        this.add.rectangle(200, 0, 1000, 1000, 0x63a0fd);   
    }
    update() {
    }
}