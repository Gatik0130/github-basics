var backImage,backgr;
var player, player_running;
var ground,ground_img;

var FoodGroup, bananaImage;
var obstaclesGroup, obstacle_img;

var gameOver;
var score=0;


function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  

  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png"); 
  
}

function setup() {
  createCanvas(800,400);
  backgr=createSprite(400,200);
  backgr.addImage(backImage);
  backgr.velocityX= -2
  
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground=createSprite(400,390,800,20)
  ground.visible=false 
  
  
  bananaGroup= new Group()
  
  obstacleGroup= new Group()
  
  

  
  
}
function draw(){
  
  background(220)
  
  player.collide(ground);
  
 
  if (backgr.x-180<0){
    backgr.x=backgr.width/2
  }
  
  if (player.isTouching(bananaGroup)) {
    score= score +10
    bananaGroup.destroyEach()
    
  }
  switch(score){
    case 10 :player.scale=0.12
      break;
      case 20 :player.scale=0.14
      break;
      case 30 :player.scale=0.16
      break;
      case 40 :player.scale=0.18
      break;
      default: break;
  }
    
  if (player.isTouching(obstacleGroup)){
    score=0
    player.scale=0.1
    obstacleGroup.destroyEach();
  }
  
  if (keyDown("SPACE")&& player.y>348 ){
    player.velocityY=-10
  }
  player.velocityY+=0.5 
  
  banana30();
  obstacles30();
  
  drawSprites();
  
  fill("white")
  text("score:"+ score,500,50)
}

function banana30(){
  if (World.frameCount%60===0){
     banana =createSprite(600,120,20,20)
    banana.y=random(150,200)
    banana.addImage(bananaImage)
    banana.scale=0.05
    banana.velocityX=-3
   
    banana.lifetime=200 
    bananaGroup.add(banana)
    
  }}

function obstacles30(){
  if (World.frameCount%170===0){
     obstacles =createSprite(600,360,20,20)
    
    obstacles.addImage(  obstacle_img)
    obstacles.scale=0.3
    obstacles.velocityX=-3
    obstacles.lifetime=200
    obstacleGroup.add(obstacles)
    
  }}



