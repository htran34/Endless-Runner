// Hunter Tran
// Endless Mario 
// 30 hours
// This endless version of the classic Super Mario Bros game was
// a concept that I personally found interesting, as Mario is a game
// that has always allowed the player to progress at their own pace
// and feel relatively safe with navigating their environment. This 
// twist on the game was something I wanted to help people experience 
// where the player's precision in their movement from the older games
// was required but at a faster & uncontrollable pace.
// I'm proud of much of the artwork that I added into the game such as
// the 'buildings' and brick floor, as I feel that they look visuaully appealing to the 
// less critical game players, and for my first time attempting my own 
// pixel art I think I did a good job!
// With regards to going beyond the class examples, I think one of the coolest
// thing I did with my game was implementing 5 different scenes in escalating
// difficulty, and then looping back to the first scene once the player 
// completed the 5th scene to create my 'technically endless' play loop.
// This was mostly a stylistic choice by me as I wanted the game to feel pointless
// for the player with no real accomplishment aside from raising their score.
// Although the idea is simple, I kept track of whenever the player restarted 
// the game going back to the first scene (without dying or getting game over)
// in a variable and used that variable to allow my game to continue playing the 
// background music without starting over again when they completed all 5 scenes.
// The other neat thing I did was the scoring system, which I made much more 
// complex than the original Mario game. The player is awarded escalating amount of 
// points for each stage (from stage 1 to 5) and points are only awarded for each 
// jump made by the player. My reasoning for behind this was because I wanted
// my game's scene to feel more and more cramped with more obstacles as the player
// progressed making it harder to jump, so players would have to take risks if they 
// wanted to increase their score faster. Additionally, to avoid causing player tilt 
// or anger from game overs, I allowed players to be compensated for the respective
// point award of the current stage they were in whenever they die so they could
// begin again with something left.

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    physics: {
      default: 'arcade',
      arcade: {
          // gravity: { y: 300 },
          debug: false
      }
    },
    scene: [ Menu, Menu2, Stage1, Stage2, Stage3, Stage4, Stage5]
};

let game = new Phaser.Game(config);

// reserve keyboard vars
let keySpace, score;
let stage6 = false;
let soundConfig = {
  volume: 2,
  loop: true
}