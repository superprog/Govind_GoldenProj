class Man{
    constructor(x, y, angle) {
  
      var options = {
            
        isStatic:true,
        'restitution':0.01,
        'friction':1.0,
        'density':2.0
      
    }
        
        this.body = Bodies.rectangle(x, y, 140, 140, options);
        this.width = 140;
        this.height = 140;
        this.image = loadImage("man-removebg-preview.png");
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
  