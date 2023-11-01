// p1HighScore = 0;
let gameover = false;

class Play extends Phaser.Scene {
    constructor() {
        super("playScene2");
    }

    preload() {
        // load images/tile sprites
        this.load.image('mario', './assets/mario.png');
        this.load.image('background', './assets/scene1.png');
        this.load.image('pipe', './assets/pipeHitbox.png');
        this.load.audio('music', './assets/backgroundMusic.wav');
    }

    create() {
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

        // // adding ground physics
        // // // source: https://phasergames.com/how-to-jump-in-phaser-3/#google_vignette
        this.ground = this.physics.add.sprite(320, 409, "block").setVisible(false);
        this.ground.displayWidth = 640 * 1.5;
        this.ground.setImmovable();

        // add hitbox for pipe
        this.pipe = this.physics.add.image(550, 359, 'pipe').setVisible(false);
    
        // add collisions
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
    }

    update() {
        // moves Mario across the screen when unobstructed
        if ((this.player.x < 640 ) && (gameover == false)) {
            this.player.setVelocityX(25);
        }
        else if (gameover == true) {
            this.player.setVelocityX(0);
            this.player.setVisible(false);
        }

        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // jump movement (on spacekey pressed)
        if (keySpace.isDown) {
            console.log('pressing space')
            this.jump();
        }
        else {
            this.player.setVelocityY(0);
        }
        //this.input.on('pointerdown', this.jump(), this)
    }

    jump() {
        if (this.player.y > 241) {
            this.player.setVelocityY(-50);
        }
        else {
            this.player.setVelocityY(0);
        }
    }
}