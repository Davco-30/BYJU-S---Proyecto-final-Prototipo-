var pte;
var cloud;
var score = 0;

var pte_Img;
var cloud_Img;

function preload(){
  /*trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  groundImage = loadImage("ground2.png");*/

  pte_Img = loadAnimation("Pte2.png");
  cloud_Img = loadImage("cloud.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pte = createSprite(120,height-420);
  pte.scale = 0.5;
  //Sólo en addAnimation, se agrega una etiqueta
  pte.addAnimation("Flying", pte_Img);
}

function createClouds(){
  if(frameCount%70 == 0){ //Esta función cuenta cada 70 cuadros
    cloud = createSprite(width-100,200);
    cloud.addImage(cloud_Img);
    cloud.velocityX = -10;
    cloud.y = Math.round(random(20,100));

    //Función para darl eprofundidad al sprite y que no estén encima
    pte.depth = cloud.depth;
    pte.depth += 1;
  }
}

function draw() {
  background("white");

  text("Puntuación: " + score, width-100, 30);
  score = score + Math.round(getFrameRate()/60);

  if(keyDown("UP_ARROW")){
    //pte.velocityY = -10;
    pte.y = pte.y - 10;
  }

  if(keyDown("DOWN_ARROW")){
    //pte.velocityY = 10;
    pte.y = pte.y + 10;
  }

  //Código para agregar gravedad
  //pte.velocityY = pte.velocityY + 0.8;

  createClouds();
  drawSprites();
}

