const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//var RAND = random(1200,400);
var drop ;
//var drop1 ;

function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  //for(var i=0;i<1000;i++){
    if (World.frameCount % 5 === 0) {
  drop =new RainDrop(random(0,1200),0);
    }
    //}
 /* if(frameCount % 2 === 0 ){
   rain1 = new Drop (random(1200,400));
 }*/
}

function draw() {

  Engine.update(engine);

  background("yellow"); 
  //Drop[i].fall();
 // for(var i=0;i<1000;i++){
  /*Drop[10].display();
  Drop[20].display();
  Drop[30].display();
  Drop[40].display();
  Drop[50].display();
  Drop[60].display();
//  Drop[200].display();
  Drop[400].display();*/
  //for(var i=0;i<1000;i++){

  if (World.frameCount % 5 === 0) {

    var drop1 =new RainDrop(random(0,1200),0);
  }


    drop.display();
  
 

  //////drawSprites();

}