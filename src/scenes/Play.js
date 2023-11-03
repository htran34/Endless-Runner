// p1HighScore = 0;

class Play extends Phaser.Scene {
    constructor() {
        super("playScene1");
    }

    preload() {
        // load images/tile sprites
        this.load.image('mario', './assets/mario.png');
        this.load.image('background', './assets/scene1.png');
        this.load.image('pipe', './assets/pipeHitbox.png');
        this.load.image('box1', './assets/box1Hitbox.png');
        this.load.image('box2', './assets/box2Hitbox.png');
        this.load.image('box3', './assets/box1Hitbox.png');
        this.load.audio('music', './assets/backgroundMusic.wav');
    }

    create() {
        // deactivate space key capture from menu
        this.input.keyboard.removeCapture('SPACE');

        // play looping background music
        let musicConfig = {
            volume: 2,
            loop: true
        }
        this.sound.play('music', musicConfig);

        // load background image
        this.add.image(320, 240, 'background');

        // create Mario player sprite
        this.player = this.physics.add.sprite(0, 371, 'mario');
        this.player.setGravityY(500);

        // // adding ground 
        // // // source: https://phasergames.com/how-to-jump-in-phaser-3/#google_vignette
        this.ground = this.physics.add.sprite(320, 409, "block").setVisible(false);
        this.ground.displayWidth = 640 * 1.5;

        // adding hitboxes for pipe & boxes
        this.pipe = this.physics.add.sprite(550, 359, 'pipe').setVisible(false);
        this.box1 = this.physics.add.sprite(115, 270, 'box1').setVisible(false);
        this.box2 = this.physics.add.sprite(325, 270, 'box2').setVisible(false);
        this.box3 = this.physics.add.sprite(324, 132, 'box3').setVisible(false);
        let objects = [this.ground, this.pipe, this.box1, this.box2, this.box3]

        // adding collisions 
        for (let i = 0; i < objects.length; i++) {
            objects[i].setImmovable();
            this.physics.add.collider(this.player, objects[i]); 
        }
    }

    update() {
        // detect player collisions with objects from the side
        if (this.player.body.touching.right) {
            this.gameOver();
        }

        // moves Mario across the screen when unobstructed
        if (this.player.x < 640 ) {
            this.player.setVelocityX(80);
        }

        // jump movement (on spacekey pressed)
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        if (keySpace.isDown) {
            this.jump();
        }
    }

    jump() {
        if (this.player.body.onFloor()) {
            this.player.setVelocityY(-500);
        }
    }

    gameOver() {
        this.player.setVelocityX(0);
        this.player.setVelocityY(0);
        this.player.setVisible(false);
    }
}