var tom, tomImg1, tomImg2, tomImg3
var jerry,jerryImg1, jerryImg2, jerryImg3
var garden, gardenImage
var canvas,bg


function preload() {
    
tomImg1 = loadAnimation ("tomOne.png");
tomImg2 = loadAnimation ("tomTwo.png","tomThree.png");
tomImg3 = loadAniamtion ("tomThree.png");

jerryImg1 = loadAnimation ("jerryOne.png");
jerryImg2 = loadAnimation ("jerryTwo.png","jerryThree.png");
jerryImg3 = loadAnimaiton ("jerryThree.png");



bg = loadImage ("garden.png");


}

function setup(){
    createCanvas(1000,800);

  tom = createSprite (870,600);
  tom.addAnimation ("tomSleeping",tomImg1);
  tom.scale = 0.2;
  
  jerry = createSprite (200,600);
  jerry.addAniamtion ("jerryStanding",jerryImg1);
  jerry.scale = 0.15;
 


 }

function draw() {

    background(bg);

    if (tom.x - jerry.x < (tom.width - jerry.width)/2) {
        tom.veloctiyX = 0;
        tom.addImage ("tomLastImage",tomImg3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation ("tomLastImage");
        jerry.addAnimation ("jerryLastImage",jerryImg3);
        jerry.scale = 0.15;
        jerry.changeAnimation ("jerryLastImage");
    }
   
  
    

    drawSprites();
}


function keyPressed(){

if (keyCode === LEFT_ARROW) {
    tom.velocityX = -5;
    tom.addAnimation ("tomRunnning",tomImg2);
    tom.changeAnimation("tomRunning");
    
    jerry.addAnimation ("jerryTeasing",jerryImg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation ("jerryTeasing");
}


}



