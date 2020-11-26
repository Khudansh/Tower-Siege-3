class Polygon{

    constructor(x,y,width,height){
        var options={
            restitution:0.5
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.image=loadImage("hexagon.png");

    }

    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

    }
}