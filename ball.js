class Paper{
  constructor(x, y, angle) {

    var options = {
          
      isStatic:true,
      'restitution':0.01,
      'friction':1.0,
      'density':2.0
    
  }
      
      this.body = Bodies.circle(x, y, 20, options);
      this.r = 20;
      this.width = 70;
      this.height = 70;
      this.image = loadImage("cpi-removebg-preview.png");
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

          
     
        
       
        
       
      
       
      
       

   