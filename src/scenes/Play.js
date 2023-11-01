// p1HighScore = 0;
let gameover = false;
let onPlatform = false;

class Play extends Phaser.Scene {
    constructor() {
        super("playScene2");
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
        this.player = this.physics.add.image(0, 371, 'mario');
        this.player.setGravityY(500);

        // // adding ground 
        // // // source: https://phasergames.com/how-to-jump-in-phaser-3/#google_vignette
        this.ground = this.physics.add.sprite(320, 409, "block").setVisible(false);
        this.ground.displayWidth = 640 * 1.5;
        this.ground.setImmovable();

        // adding hitboxes for pipe & boxes
        this.pipe = this.physics.add.image(550, 359, 'pipe').setVisible(false);
        this.box1 = this.physics.add.image(115, 270, 'box1').setVisible(false);
        this.box2 = this.physics.add.image(325, 270, 'box2').setVisible(false);
        this.box3 = this.physics.add.image(324, 132, 'box3').setVisible(false);

        // adding collisions
        this.physics.add.collider(this.player, this.ground);
        this.physics.add.collider(
            this.player,
            this.pipe,
            (player, pipe) =>
            {
                if (player.body.touching.right && pipe.body.touching.left)
                {
                    gameover = true;
                }
         }); 
         this.physics.add.collider(
            this.player,
            this.box2,
            (player, box) =>
            {
                if (player.body.touching.bottom && box.body.touching.top)
                {
                    onPlatform = true;
                }
         }); 
    }

    update() {
        // lets player jump onto platforms and stay there 
        // until they fall off the edge
        if (onPlatform == true) {
            this.player.setGravityY(0);
        }
        else {
            this.player.setGravityY(500);
        }

        // moves Mario across the screen when unobstructed
        if ((this.player.x < 640 ) && (gameover == false)) {
            this.player.setVelocityX(200);
        }
        else if (gameover == true) {
            this.player.setVelocityX(0);
            this.player.setVisible(false);
        }

        // jump movement (on spacekey pressed)
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        if (keySpace.isDown) {
            this.jump();
        }
        else {
            this.player.setVelocityY(0);
        }
    }

    jump() {
        if (this.player.y > 230) {
            this.player.setGravityY(0);
            this.player.setVelocityY(-50);
        }
        else {
            this.player.setGravityY(500);
            this.player.setVelocityY(0);
        }
    }
}