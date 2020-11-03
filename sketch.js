var myFont;
var scaleObj,hammer,scaleImg,hammerImg;

var continueButton,continueImg;

var gameState = "on";

var whatIsLaw,whatIsLawImg,child1,child1Img,child2,child2Img;

function preload(){
  myFont = loadFont("heavycopperexpand.ttf");

  scaleImg = loadImage("scale.png");
  hammerImg = loadImage("hammer.png");

  continueImg = loadImage("continueButton.png");

  whatIsLawImg = loadImage("whatIsLaw.png");
  child1Img = loadImage("child1.png");
  child2Img = loadImage("child 2.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  scaleObj = createSprite(width-1600,150,0,0,);
  scaleObj.addImage("scale",scaleImg);

  hammer = createSprite(width-200,150,0,0);
  hammer.addImage("hammer",hammerImg);

  continueButton = createSprite(width/2,height/2,0,0);
  continueButton.addImage("continue",continueImg); 

  whatIsLaw = createSprite(500,500,0,0);
  whatIsLaw.addImage("law1",whatIsLawImg);
  whatIsLaw.scale = 0.3;
  whatIsLaw.visible=false;

  child1 = createSprite(1000,500,0,0);
  child1.addImage("child1",child1Img);
  child1.scale = 0.3;
  child1.visible=false;

  child2 = createSprite(1500,500,0,0);
  child2.addImage("child2",child2Img);
  child2.scale = 0.3;
  child2.visible=false;
  
}

function draw() {
  background("yellow");  
  drawSprites();

  if(mousePressedOver(continueButton)){
    gameState = "start";
  }

  if(gameState==="start"){
    continueButton.visible= false;
    gameState = "start1";
  }

  if(gameState==="start1"){
    whatIsLaw.visible=true;
    child1.visible= true;
    child2.visible=true;
  }

  textSize(72);
  textFont(myFont);
  fill(170, 17, 217);
  text("CHILD STATUTES",450,100);
}

/* function mousePressed(){
  continueButton.visible= false;
  gameState = "start1";
} */

