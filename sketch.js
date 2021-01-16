const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ground,plinkos,divisions,balls;
var particles = [];
var obs = [];
var obs2 = [];
var stands = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;

  //All Bodies are created here
   for (var d = 0; d<=width; d = d+80){
      stands.push(new Walls(d,540));
   }
   for (var p = 23; p<=width; p = p+70){
      obs.push(new Obstacles(p,250));
   }

   for (var q = 23; q<=width; q = q+70){
    obs2.push(new Obstacles(q,100));
 }
 ground = new Ground();

  Engine.run(engine);
}

function draw() {
  background("black");
  Engine.update(engine);

 for(var k = 0; k<stands.length; k++){
    stands[k].display();
  }
  for(var l = 0; l<stands.length; l++){
    obs[l].display();
  }
  for(var m = 0; m<stands.length; m++){
    obs2[m].display();
  }

  if (frameCount%50===0){
   particles.push(new Particles(random(10,390),0,20));
  }
  for(var x = 0; x<particles.length; x++){
    particles[x].display();
  }
  ground.display();
}