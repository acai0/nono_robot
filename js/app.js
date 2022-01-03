const config = {
    width: 700,
    height: 400,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade:{
            gravity: {
                y: 300 //axe vertical
                
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}
let game = new Phaser.Game(config)
let nono 
let cursors

function preload() {
    console.log(this)
    this.load.image('nono', 'assets/nono.png')
    this.load.image('vert', 'assets/pipe.png')
    this.load.image('rouge', 'assetse/obstacle.png')
}
function create() {

    nono = this.physics.add.image(0, 0, 'nono')
    nourriture = this.physics.add.image(50,50, 'vert')
    obstacle = this.physics.add.image(50, 50, 'rouge')

    nono.body.collideWorldBounds = true; //collision avec notre cadre
    nourriture.body.collideWorldBounds = false;
    //obstacle.body.collideWorldBounds = false;
    //cursors = this.input.keyboard.createCursorKeys() //utilisation des touches clavier
    //console.log(cursors)
    //this.add.image(400, 300, 'bloc')
    
}
function update() {
    /*
    nono.setVelocityX(0)

    if(cursors.up.isDown){ // si la touche du haut est appuyé
    nono.setVelocity(0, -300) // vélosité 
}
if(cursors.right.isDown){
        nono.setVelocity(300, 0)
}
if(cursors.left.isDown){
        nono.setVelocity(-300, 0)
}
if(cursors.down.isDown){
        nono.setVelocity(0, 300)
}
*/
}
