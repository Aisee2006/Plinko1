class Divisions{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
        this.image=loadImage("Sprites/wall.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
    }
}