class Ground {
  constructor(x,y,w,h) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  display(){
    var bodyPos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(bodyPos.x, bodyPos.y, this.w, this.h);
  }
}