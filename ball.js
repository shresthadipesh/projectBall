function Ball(x,y){
    this.x=x;
    this.y=y;
    this.vel_x=random(-1,1);
    this.vel_y=random(-1,1);
    this.acc_x=random(-0.1,0.1);
    this.acc_y=random(-0.1,0.1);
    this.isMouseClicked= false;
    
    this.show=function(){
      fill(120,200,255);
      ellipse(this.x,this.y,10,10);
    }
    
    this.update=function(){
      if(this.isMouseClicked){
      this.x=this.x+this.vel_x;
      this.y=this.y+this.vel_y;
      this.vel_x+=this.acc_x;
      this.vel_y+=this.acc_y;
      }
    }
      this.bounce=function(){
    if( this.x > 600 || this.x < 0 ){
      this.vel_x*=-1;
    
    }
    if(this.y > 600 || this.y < 0){
      this.vel_y*=-1;
      }
   }
   
   this.checkCollision=function(){
     var d= dist(mouseX,mouseY,this.x,this.y);
     if(d<10){
       this.isMouseClicked=true;
     }
   }
}