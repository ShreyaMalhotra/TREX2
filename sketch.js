
var trex ,trex_running;

//intendaion : giving tab spaces in the beginning of the line

//load animations, images and sound
function preload () {
  trexani = loadAnimation ("trex1.png", "trex3.png", "trex4.png")
  groundani = loadImage ("ground2.png")
  cloudImg = loadImage ("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  trex = createSprite (50, 180, 20, 25)
  trex.addAnimation ("running", trexani)  
  trex.scale = 0.5

  ground = createSprite (300, 190, 600, 20)
  ground.addImage (groundani)

  ground2 = createSprite (300, 200, 600, 20)
  ground2.visible = false 

}

function draw(){
  background("gray")
  
  trex.collide (ground2)

  ground.velocityX = -4
  if (ground.x < 0 ) {
    ground.x = 600
  }

  if (keyDown ("space")&& trex.y>=166) {
  trex.velocityY = -6
  }
  trex.velocityY = trex.velocityY + 0.2 
  clouds();
  
  drawSprites ()
 
}

function clouds () {
  if (frameCount%100===0) {
  var cloud = createSprite (600, random(30,100), 20, 25)
  cloud.velocityX = -3 
  cloud.addImage (cloudImg)
  cloud.scale = 0.5
trex.depth = cloud.depth+1
cloud.lifetime = 200

  }
}
