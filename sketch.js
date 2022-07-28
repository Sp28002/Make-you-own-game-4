var rocket, ufo; 
var gem1, gem2;
var space;
var meteor;
var ufoG, gem1G, gem2G,meteorG; 
var spaceImg, ufoImg, rocketImg, meteorImg, gem1Img, gem2Img, endImg;

//Game States
var PLAY=1;
var END=0;
var gameState=1;
var score;

function preload(){
  spaceImg = loadImage("space.jpg");
  rocketImg = loadImage("rocket.png");
  ufoImg = loadImage ("ufo.png");
  meteorImg = loadImage("meteor.png");
  gem1Img = loadImage("blue gem.png");
  gem2Img = loadImage("purple gem.png");
   endImg =loadImage("gameover.png");
}

function setup(){

  createCanvas(windowWidth,windowHeight);

  // Moving background
 space=createSprite(width/2,200);
 space.addImage(spaceImg);
 space.velocityY = 0.1;


 //creating rocket
 rocket = createSprite(width/2,height-20,20,20);
 rocket.addImage(rocketImg);
 rocket.scale=0.5;

 score = 0

 ufoG=new Group();
 gem1G=new Group();
 gem2G=new Group();
 meteorG=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  rocket.x = World.mouseX;
  
  edges= createEdgeSprites();
  rocket.collide(edges);

  if(space.y > height ){
    space.y = height/2;
  }
 
   createUfo();
   createGem1();
   createGem2();
   createMeteor();

   if (gem1G.isTouching(rocket)) {
     gem1G.destroyEach();
     score=score + 100;
   }
   else if (gem2G.isTouching(rocket)) {
     gem2G.destroyEach();
     score=score + 50;
     
   }else{
     if(ufoG.isTouching(rocket)) {
       gameState=END;
       
       rocket.addImage(endImg);
       rocket.x=width/2;
       rocket.y=height/2;
       rocket.scale=0.6;
       
       gem1G.destroyEach();
       gem2G.destroyEach();
       ufoG.destroyEach();
       meteorG.destroyEach();
       
       gem1G.setVelocityYEach(0);
       gem2G.setVelocityYEach(0);
       ufoG.setVelocityYEach(0);
       meteorG.setVelocityYEach(0);
     }
      else if(meteorG.isTouching(rocket)){
       gameState=End

       rocket.addImage(endImg);
       rocket.x=width/2;
       rocket.y=height/2;
       rocket.scale=0.6;
       
       gem1G.destroyEach();
       gem2G.destroyEach();
       ufoG.destroyEach();
       meteorG.destroyEach();
       
       gem1G.setVelocityYEach(0);
       gem2G.setVelocityYEach(0);
       ufoG.setVelocityYEach(0);
       meteorG.setVelocityYEach(0)
   }
 }
 
 drawSprites();
 textSize(20);
 fill(255);
 text("Score: "+ score,width-130,55);
 }

}

function createGem1() {
 if (World.frameCount % 200 == 0) {
 var gem1= createSprite(Math.round(random(50, width-50),40, 10, 10));
 gem1.addImage(gem1Img);
 gem1.scale=0.4;
 gem1.velocityY = 5;
 gem1.lifetime = 200;
 gem1G.add(gem1);
 }
}

function createGem2() {
 if (World.frameCount % 320 == 0) {
 var gem2 = createSprite(Math.round(random(50, width-50),40, 10, 10));
 gem2.addImage(gem2Img);
 gem2.scale=0.3;
 gem2.velocityY = 5;
 gem2.lifetime = 200;
 gem2G.add(gem2);
}
}

function createUfo(){
 if (World.frameCount % 530 == 0) {
 var ufo = createSprite(Math.round(random(50, width-50),40, 10, 10));
 ufo.addImage(ufoImg);
 ufo.scale=0.2;
 ufo.velocityY = 4;
 ufo.lifetime = 200;
 ufoG.add(ufo);
 }
}

function createMeteor(){
  if (World.frameCount % 320 == 0){
    var meteor = createSprite(Math.round(random(40, width-40), 40, 10,10));
    meteor.addImage(meteorImg)
    meteor.scale=0.2
    meteor.velocityY = 6;
    meteor.lifetime = 200
    meteorG.add(meteor);
  }
}