class Scroll{
    constructor(x, y) {
  
      var options = {
            
        isStatic:true,
        'restitution':0.01,
        'friction':1.0,
        'density':2.0
      
    }
        
        this.body = Bodies.rectangle(x, y, 600, 600, options);
        this.width = 600;
        this.height = 600;
        this.image = loadImage("scro4-removebg-preview.png");
        World.add(world, this.body);
      }
      display(){
       
        var pos = this.body.position;
        push();
        
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
  
        
      }
  }
  