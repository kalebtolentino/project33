class Plinko {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          isStatic: true
      }
      this.body = Bodies.circle(x, y, 10, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      /*pos.x = mouseX;
      pos.y = mouseY;*/
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      circle(0, 0, 10);
      pop();
    }
  };
  