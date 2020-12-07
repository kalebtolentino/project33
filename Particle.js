class Particle {
    constructor(x, y) {
      var options = {
          'restitution':0.4,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      
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
      fill(this.color);
      circle(0, 0, 10);
      pop();
    }
  };
  