//Create variables here
var dog, happyDog, Database, foodS, foodStock,dogImg;


function preload()
{
  //load images here
  happyDog=loadImage("dogImg1.png");
  dogImg=loadImage("dogImg.png");
  

}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(400,400,10,10);
  Database = firebase.database();
  foodStock=Database.ref('food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  
 background(rgb(46, 139, 87));

 textSize(20);
 fill("GhostWhite");
 text("press right arrow to feed juli",200,20);

 scale(0.5);
 //dog.addImage(happyDog)
 
 if(keyDown(RIGHT_ARROW)){
  writeStock(foodS);
  console.log(foodS)
  dog.addImage(happyDog)
 }
 else {
  dog.addImage(dogImg);
 }

  drawSprites();

 
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){

if(x<=0){
  x=-0;
}else{
  x=x-1
}

  Database.ref('/').update({
    food:x
  })
}

