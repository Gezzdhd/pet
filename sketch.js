//Create variables here
var dog, happyDog, foodS, foodStock
var database, dogImg1, dogImg2
function preload()
{
	dogImg1= loadImage("images/dogImg.png")
  dogImg2= loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog= createSprite(300,300,10,10)
dog.addImage(dogImg1)
dog.scale=0.3
foodStock=database.ref('Food')
foodStock.on("value", readStock)
}


function draw() {  
background(46,139,87)
  //add styles here
if(keyDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(dogImg2)
drawSprites();
textSize(20)
fill("blue")
text("press up arrow to feed the dog", 250,100)
}
}


function readStock(data){
foodS=data.val()
}


function writeStock(x){
  if(x<=0){ x=0; }else{ x=x-1; }
  database.ref('/').update({
  Food:x
})
}