class Box1 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
          'friction':1.0,
          'density':0.09
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      World.add(world, this.body);
    }

    score(){
      if(this.visibility<0 && this.visibility>-105){
        score++
      }
    }

    display(){

      if(this.body.speed<3){
        rectMode(CENTER);
        fill(1,34,174);
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
      }
  
      else{
        World.remove(world,this.body);
        push()
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        pop()
      }
     
    }
     }  