class Kid{
    constructor(x, y, width, height){
        var options = {
            
            'friction':1.0,
            'density':0.4
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("BOY.gif");
        World.add(world, this.body);
      }
      display(){
      //  var angle = this.body.angle;
        var pos = this.body.position;
        push();
        
        
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
      }
}