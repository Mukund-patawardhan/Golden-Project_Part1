var canvas;
var form,game;
var gameState=0;
var up,down,right,left,stand;
var roads;
var score=0;
var g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14;

function preload(){
  up=loadAnimation("walkingUp1.png","walkingUp2.png");
  down=loadAnimation("walkingDown1.png","walkingDown2.png");
  left=loadAnimation("walkingLeft1.png","walkingLeft2.png");
  right=loadAnimation("walkingRight1.png","walkingRight2.png");
  stand=loadAnimation("standing.png");

  roads=loadImage("roads1.png");

  g1=loadImage("./garbage1.png");
  g2=loadImage("garbage2.png");
  g3=loadImage("garbage3.png");
  g4=loadImage("garbage4.png");
  g5=loadImage("garbage5.png");
  g6=loadImage("garbage6.png");
  g7=loadImage("garbage7.png");
  g8=loadImage("garbage7.png");
  g9=loadImage("garbage9.png");
  g10=loadImage("garbage10.png");
  g11=loadImage("garbage11.png");
  g12=loadImage("garbage12.png");
  g13=loadImage("garbage13.png");
  g14=loadImage("garbage14.png");
}

function setup() {
  canvas=createCanvas(windowWidth-30,windowHeight-30);

  game=new Game ();
}

function draw() {
  background("black");  

  if(gameState===0){
    game.form();
  }
  if(gameState===1){
    game.game();
  }

}

function keyReleased(){
  game.player.setVelocity(0,0);
  game.player.changeAnimation("stand",stand);
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    game.player.setVelocity(1,0);
    game.player.addAnimation("right",right);
    game.player.changeAnimation("right",right);
  }
  if(keyCode===LEFT_ARROW){
    game.player.setVelocity(-1,0);
    game.player.addAnimation("left",left);
    game.player.changeAnimation("left",left);
  }
  if(keyCode===UP_ARROW){
    game.player.setVelocity(0,-1);
    game.player.addAnimation("up",up);
    game.player.changeAnimation("up",up);
  }
  if(keyCode===DOWN_ARROW){
    game.player.setVelocity(0,1);
    game.player.addAnimation("down",down);
    game.player.changeAnimation("down",down);
  }
}
