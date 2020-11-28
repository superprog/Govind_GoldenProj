class Frame{
    constructor(x, y, angle) {
  
      var options = {
            
        isStatic:true,
        'restitution':0.01,
        'friction':1.0,
        'density':2.0
      
    }
        
        this.body = Bodies.rectangle(x, y, 150, 150, options);
        this.width = 150;
        this.height = 150;
        this.image = loadImage("bag.jpg");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
  }
  