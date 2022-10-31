var bombObstacle,boxObstacle,carImage,boxImage,bombImage,gameOver,roadImage,car,road,bomb

function preload() {
carImage=loadImage("car_image.png")
roadImage=loadImage("Road.png")
bombImage=loadImage("bomb_obstacle.png")
}
function setup( ){createCanvas(400,600)
  
    road=createSprite(200,200)
    road.addImage(roadImage)
    road.velocityY=4
    car=createSprite(70,580,20,20)
    car.addImage(carImage)
    car.scale=0.1
    }

function draw(){
    if(road.Y=400){
        road.Y=height/2
    }
    obstacle()
    drawSprites()
}

function obstacle(){
if(World.frameCount%300==0){
    bomb=createSprite(Math.round(random(0,350),40,10,10))
    bomb.addImage(bombImage)
    bomb.scale=0.05
    bomb.velocityY=3
}
}










