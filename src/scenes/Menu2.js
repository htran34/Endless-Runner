class Menu2 extends Phaser.Scene {
    constructor() {
        super("menuScene2");
    }

    preload() {
        this.load.audio('start', './assets/gameStart.wav');
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
        this.add.text(50, 200, 'CREDITS', menuConfig);
        this.add.text(50, 250, 'MUSIC: ultragamemusic on YT', menuConfig);
        this.add.text(50, 300, 'Mario character & music all', menuConfig);
        this.add.text(50, 350, 'originally created by Nintendo Co.', menuConfig);

        // define keys
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // initialize score
        score = 0;
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySpace)) {
            game.settings = {}
            this.sound.play('start');
            this.scene.start('playScene1');    
          }
    }
}