// initialize high score
p1HighScore = 0;

class Play extends Phaser.Scene {
    constructor() {
        super("playScene2");
    }

    preload() {
        // load images/tile sprites
        this.load.image('mario', './assets/mario.png');
        this.load.image('background', './assets/scene1.png');
    }

    create() {
        // load background image
        this.add.image(320, 240, 'background');

        // create Mario player sprite
        console.log(0)
        this.player = this.physics.add.image(0, 371, 'mario');
        this.player.setGravityY(100);

        // // adding ground physics
        // // // source: https://phasergames.com/how-to-jump-in-phaser-3/#google_vignette
        let ground = this.physics.add.sprite(320, 409, "block").setVisible(false);
        ground.displayWidth = 640 * 1.5;
        ground.setImmovable();
        this.physics.add.collider(this.player, ground);
    }

    update() {
        // move Mario across the screen constantly
        if (this.player.x < 640) {
            this.player.x += 2;
        }
    }
}