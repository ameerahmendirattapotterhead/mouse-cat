var garden,gardenimg;
var cat,catani,catimg;
var mouse,mouseani,mousemicro,mousegift;

function preload() {
    //load the images here
    gardenimg = loadImage("images/garden.png");
    catani = loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png");
    catimg = loadImage("images/cat4.png");
    mousemicro = loadImage("images/mouse4.png");
    mouseani = loadAnimation("images/mouse2.png","images/mouse3.png","images/mouse2.png","images/mouse3.png")
    mousegift = loadImage("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,500);
    garden.addImage(gardenimg);

    mouse = createSprite(200,700);
    mouse.addImage(mousegift);
    mouse.scale=0.2;

    cat=createSprite(600,700);
    cat.addImage(catimg);
    cat.scale=0.2;
}

function draw() {

    background(255);
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    cat.setCollider("rectangle",0,0,cat.width,cat.height);
    cat.debug=true;
    mouse.setCollider("rectangle",0,0,mouse.width,mouse.height);
    mouse.debug=true;

    if(mouse.isTouching(cat)){
        mouse.changeAnimation(mousemicro);
        cat.changeImage(catimg);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown("space")){
        cat.changeAnimation("catrunning",catani);
        mouse.changeAnimation("mousetease",mouseani);
    }

}
