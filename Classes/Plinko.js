class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
     var bodyPos=this.body.position;
     fill("grey");
     ellipse(bodyPos.x,bodyPos.y,this.radius,this.radius);   
    }
}