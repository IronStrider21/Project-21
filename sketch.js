var bullet;
var wall;
var speed;
var weight;
var thickness;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(100, 200, 60, 10);
  bullet.shapeColor=color("white");
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(255,255,255);  
  drawSprites();

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if (damage<10)
    {
      bullet.shapeColor=color(0,255,0);
    }
  }
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
return false;
}