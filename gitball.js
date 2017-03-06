var balls=[]

function setup() {
  createCanvas(600,600);


  //translate(300,300);
  //beginShape();
  //noFill();
  //stroke(30)
  //strokeWeight(10)
for(var angle=0; angle<2*PI; angle+=0.1){
  var x=200*cos(angle);
  var y= 200*sin(angle);
  var ball=new Ball(x+300,y+300);
  balls.push(ball);
  //vertex(x,y);
}
//endShape();

}

function draw() {
    background(0);
  
 for(var i=0;i<balls.length;i++){
   balls[i].show();
   balls[i].update();
   balls[i].bounce();
 }
}

function mousePressed(){
  for(var i=0;i<balls.length;i++){
   //balls[i].isMouseClicked=true;
   balls[i].checkCollision();  
 }
}