class Snowman{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            setStatic:true
        }
        this.body = Bodies.rectangle(x,y,options);
        this.image = loadImage("Sprites/snowman.jpeg");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect( 0, 0);
        pop();
      }
}