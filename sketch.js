var canvas;
var music;
var box1
var box2
var box3
var box4
var ball
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  
    box1 = createSprite(100,570,160,40)
    box1.shapeColor = "red"
    box2 = createSprite(300,570,160,40)
    box2.shapeColor = "blue"
    box3 = createSprite(500,570,160,40)
    box3.shapeColor = "yellow"
    box4 = createSprite(700,570,160,40)
    box4.shapeColor = "green"
    ball  =  createSprite(random(20,750),100,40,40)
    ball.shapeColor = "white"
    ball.setVelocity(4,3)


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background("pink");
    edges = createEdgeSprites()
    
    if(ball.isTouching(box1)){
        ball.shapeColor= "red"
        ball.bounceOff(box1)
    }
    if(ball.isTouching(box2)){
        ball.shapeColor=  "blue"
        ball.bounceOff(box2)
    }
    if(ball.isTouching(box3)){
        ball.shapeColor= "yellow"
        ball.bounceOff(box3)
    }
    if(ball.isTouching(box4)){
        ball.shapeColor=  "green"
        ball.bounceOff(box4)
    }
    ball.bounceOff(edges)
  
    drawSprites()



    //add condition to check if box touching surface and make it box
}
