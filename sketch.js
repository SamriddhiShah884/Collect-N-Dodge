
var plane, planeImg;
var background, backgroundImg;
var PLAY=1;
var END=0;
var gameState=PLAY;
var sun, sunImg, sunGroup;
var rainbow, rainbowImg, rainbowGroup;
var sound;
var music;
var gameOverImg;
var score=0;
var live=0;
var sc, scImg, scGroup;

function preload(){
  planeImg1=loadImage("green.png");
  planeImg2=loadImage("blue.png");
  planeImg3=loadImage("dark.png");
  planeImg4=loadImage("orange.png");
  planeImg5=loadImage("yellow.png");
  planeImg6=loadImage("purple.png");
  planeImg7=loadImage("pink.png");
  backgroundImg=loadImage("backgroundCloud.jpg");
  sound=loadSound("ttsMP3.com_VoiceText_2020-11-18_16_52_55.mp3");
  sunImg=loadImage("sun.png");
  music=loadSound("bm.mp3");
  rainbowImg=loadImage("rainbow.png");
  gameOverImg=loadImage("gameOverPic.png");
  scImg=loadImage("storm cloud.png");
}

function setup(){
   //sound.play();
     music.play();
  createCanvas(450, 450);

 
  
  background=createSprite(0,0,30,30);
  background.addImage( backgroundImg);
  background.scale=1;
  
  plane=createSprite(200,370,40,40);
  plane.addImage(planeImg1);
  plane.scale=1;
  
  sunGroup=new Group();
  rainbowGroup=new Group();
  scGroup=new Group();
  
}

function draw(){
document.getElementById("score_label").innerHTML="Score: "+score;
     
 if(gameState===PLAY){

  background.velocityY = 7;
  
     if (background.y > 250){
      background.y = 100;
      console.log("Change Position ");
    }
    
    plane.x=mouseX;
   
   if(frameCount%60===0){
   createStars();
   }
   
   if(frameCount%70===0){
     createSc();
   }
   
   if(frameCount%90===0){
      createRainbows();
   }
    
    if(keyDown("a")){
     var r=Math.round(random(1,6));
      switch(r){
        case 1: plane.addImage(planeImg2);
          break;
          
        case 2: plane.addImage(planeImg1);
          break;
          
        case 3: plane.addImage(planeImg3);
          break;
        
        case 4: plane.addImage(planeImg4);
          break;
          
          case 5: plane.addImage(planeImg5);
          break;
        
          case 6: plane.addImage(planeImg7);
          break;
        case 7: plane.addImage(planeImg6);
          break;
          default:break;
      }
    }
    
   
   if(plane.isTouching(sunGroup)){
     score=score+10;
     sunGroup.destroyEach();
     
   }
   
    if(plane.isTouching(rainbowGroup)){
     score=score+20;
     rainbowGroup.destroyEach();
     
   }
   
     if(plane.isTouching(scGroup)){
     
      
   plane.addImage(gameOverImg);
       plane.scale=0.4;
       gameState=END;
       scGroup.destroyEach();
     
   }
  }
  
  else if(gameState===END){
    background.velocityY=0;
    rainbowGroup.setVelocityYEach(0);
  sunGroup.setVelocityYEach(0);
  }
  
  
  drawSprites();
}

function  createStars(){
  rnx=random(50,400);
  sun=createSprite(rnx,100,30,30);
  sun.velocityY=6;
  sun.lifetime=300;
  sun.addImage(sunImg);
  sun.scale=0.1;
  sunGroup.add(sun);
}

function  createRainbows(){
  rnx=random(50,400);
  rainbow=createSprite(rnx,0,30,30);
  rainbow.velocityY=9;
rainbow.lifetime=300;
  rainbow.addImage(rainbowImg);
 rainbow.scale=0.05;
  rainbowGroup.add(rainbow);
}

function createSc(){
    rnx=random(50,400);
  sc=createSprite(rnx,0,30,30);
  sc.velocityY=9;
sc.lifetime=300;
  sc.addImage(scImg);
sc.scale=0.5;
  scGroup.add(sc);
  sc.debug=false;
  sc.setCollider("rectangle",0,-100,sc.width-70,sc.height-400);
}

