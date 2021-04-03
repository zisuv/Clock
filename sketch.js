

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);
 
}

function draw() {
  background(0);  
  translate(200,200)
  rotate (-90)

  var hr = hour();
 var mn = minute();
 var sc = second();


 strokeWeight(8);
  stroke("red");
  noFill();
  scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);
  
  stroke("blue");
   mnAngle= map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);
  stroke("green");
  hrAngle= map(hr%12,0,60,0,360);
  arc(0,0,280,280,0,hrAngle);

 

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  
}