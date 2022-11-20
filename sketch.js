var platform1,platform2,platform3,platformGroup
var setPlatform = false

function preload() {
  jumpingAnimation = loadAnimation("assets/jump_start.png", "assets/jump_down.png", "assets/jump_end.png");
  run1Img = loadAnimation("assets/run_1.png", "assets/run_2.png");
  backgroundImg = loadImage("./assets/background.png");
  dog_boneImg = loadImage("assets/dog_bone.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  dog = createSprite(300, height-160, 50, 50);
  //dog.addAnimation("run",run1Img );
  dog.addAnimation("jumping", jumpingAnimation)
  ground = createSprite(width / 2, height - 100, width, 10)
  ground.visible = false

  bone = createSprite(575, 100, 11, 11)
  bone.addImage(dog_boneImg)
  bone.scale = 0.2
  bone.visible = false

  bone2 = createSprite(200, 300, 10, 10)
  bone2.addImage(dog_boneImg)
  bone2.scale = 0.2
  bone2.visible = false





}

function draw() {
  background(backgroundImg);



  if (keyDown("space") && dog.y >= height - 300) {
    dog.velocityY = -15;
    // dog.changeAnimation("jumping")

  }


  if (keyDown("right")) {
    dog.x += 4
    dog.mirrorX(+1)
  }

  if (keyDown("left")) {
    dog.x -= 4
    dog.mirrorX(-1)
  }
  
  if (frameCount === 60) {
    platformPositions = [[width / 2 - 200, height / 2 + 100], [width / 2 + 150, height / 2 + 20], [width / 2 + 400, height / 3]]
    bone.visible = true
    createPlatforms()
    setInterval( destroyPlatforms, 10000)
   
  }

  if (frameCount === 400) {
    platformPositions = [[width / 2 - 200, height / 2 + 50], [width / 2 + 150, height / 2 + 120], [width / 2 + 400, height / 3]]
    createPlatforms()
    console.log(setPlatform)
    bone2.visible = true
   //setInterval(destroyPlatforms, 10000)
  }

  if(setPlatform){
    if (dog.collide(platform1) || dog.collide(platform2) || dog.collide(platform3)) {
    
      if (keyDown("up")) {
        dog.velocityY = -15
        console.log("up")
      }
    }
  }



  dog.velocityY += 0.45
  dog.collide(ground)
  //dog.collide(platform1)
  drawSprites();
}
function destroyPlatforms(){
   platform1.destroy()
   platform2.destroy()
   platform3.destroy()
   setPlatform = false
   dog.x = 300
   dog.y = height-100

}

function createPlatforms() {
  platform1 = createSprite(platformPositions[0][0], platformPositions[0][1], 200, 20)
  platform2 = createSprite(platformPositions[1][0], platformPositions[1][1], 200, 20)
  platform3 = createSprite(platformPositions[2][0], platformPositions[2][1], 200, 20)
  setPlatform = true

 

}

