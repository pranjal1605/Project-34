//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImg,happyDogImg;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  var dog = createSprite(250,250,0.5,0.5);
  dog.addImage("dog",dogImg);
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(color(46,139,87));
  if(keyDown(UP_ARROW)){
    // foodStock = foodStock - 1;
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  // if(keyWentDown(UP_ARROW)){
  //   // writeStock(foodS);
  //   // dog.addImage(happyDogImg);
  // }

  drawSprites();
  //add styles here
  textSize(10);
  fill("red");
  stroke("blue");
  text("Prees UP_ARROW key to feed Drago milk",100,50);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



