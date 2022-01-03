const config = {
    width: 700,
    height: 400,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade:{
            gravity: {
                y: 300 //axe vertical 
            },
                debug: false
            
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
    this.load.image('vert', 'assets/pipe.png')
    this.load.image('rouge', 'assets/obstacle.png')
    this.load.spritesheet('nono', 'assets/nono.png', 
    { frameWidth: 50, frameHeight: 48 }
    );
}
function create() {
    // position fixe de nono
    nono = this.physics.add.image(500, 500, 'nono')

    nourriture = this.physics.add.image(200,200, 'vert')
    nourriture = this.physics.add.image(50,70, 'vert')
    nourriture = this.physics.add.image(400,400, 'vert')
    obstacle = this.physics.add.image(500, 150, 'rouge')
    obstacle = this.physics.add.image(100, 200, 'rouge')

//collision avec le cadre
nono.body.collideWorldBounds = true;
nourriture.body.collideWorldBounds = false;
obstacle.body.collideWorldBounds = false;


cursors = this.input.keyboard.createCursorKeys() //utilisation des touches clavier
console.log(cursors)
//this.add.image(400, 300, 'bloc')
}
function update() {

// Faire fonctionner avec les touches du clavier

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

}
