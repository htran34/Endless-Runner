class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_mario', './assets/marioJump.wav');
        this.load.image('titleBox', './assets/menuTitle.png');
        //this.load.bitmapFont('atari', 'assets/fonts/atari-smooth.png', 'assets/fonts/atari-smooth.xml');
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontSize: '28px',
            align: 'center',
            strokeThickness: 3
        }

        // display various menu elements
        this.add.rectangle(200, 0, 1000, 1000, 0x63a0fd);   // sets menu background color 
        this.add.image(320, 100, 'titleBox');               
        this.add.text(150, 300, 'PRESS SPACE TO START', menuConfig);
        this.add.text(150, 350, 'PRESS SPACE TO JUMP', menuConfig);

        // define keys
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySpace)) {
            game.settings = {
                //spaceshipSpeed: 3,
                //spacejetSpeed: 5,
                
            }
            //this.sound.play('sfx_select');
            /* Play Mario menu button sound here! */
            this.scene.start('playScene2');    
          }
    }
}