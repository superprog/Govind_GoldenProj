const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var clue1b ; 

var form;

var name = null;
var playerCount = 0; 
var k =1;
var bg;


var farmer;
var gameState  = "start";

var clueCount=0;

var level;
var f = 0;
var xPo;

var bgimg;

var closeB;
var yPo;

var close2B;

var randomObj1,randomObj2,randomObj3,randomObj4,randomObj5;

var img1 , img2,img3,img4,img5;

var open = 0;

var kid;

var rid11;

var scroll2;
var rid13img;

var riddle1Group;

var riddle2Group;

var riddle3Group;

var riddle4Group;

function preload(){
  background_img = loadImage("background.jpg");

  sticker_img = loadImage("horror-removebg-preview.png");

  img1 = loadImage("rObj1.png");

  img2 = loadImage("rand2.png");

  bgimg = loadImage("tunnel.jpg");

rid11img=loadImage("rid11.png");
rid12img=loadImage("rid12.png");
rid13img=loadImage("rid13.jpg");
rid14img=loadImage("rid14.png");

rid21img=loadImage("riddle2ans.png");
rid22img=loadImage("riddle2ans2.png");
rid23img=loadImage("riddle2ans3.png");
rid24img=loadImage("riddle2ans4.png");

rid31img=loadImage("riddle21.png");
rid32img=loadImage("riddle22.jpg");
rid33img=loadImage("riddle23.jpg");
rid34img=loadImage("riddle24.jpg");


rid41img=loadImage("riddle41.jpg");
rid42img=loadImage("riddle42.gif");
rid43img=loadImage("riddle43.jpg");
rid44img=loadImage("riddle44.png");

  scro1 = loadImage("riddle1.png");
  scro2 = loadImage("riddle2.png");
  scro3 = loadImage("riddle3.png");
  scro4 = loadImage("riddle4.png");
  scro5 = loadImage("scro4-removebg-preview.png");    

  wr = loadImage("wrong1.png");
}

function setup() {

  

  engine = Engine.create();
  world = engine.world;

  createCanvas(displayWidth,displayHeight);
 // createSprite(400, 200, 50, 50);

 //bg =  createSprite(displayWidth/2,displayHeight/2,displayWidth*12,displayHeight);
 //bg.addImage(background_img);
// bg.velocityX = -5;

 randomObj1 = createSprite(1650,100,50,50);
 randomObj1.addImage(img1);
 randomObj1.scale = 0.3;

 
 randomObj2 = createSprite(3900,690,50,50);
 randomObj2.addImage(img2);

 randomObj2.scale = 0.25;
 
 riddle1Group = new Group();
 riddle2Group = new Group();
 riddle3Group = new Group();
 riddle4Group = new Group();
 
 form = new Form();


ground1 = new Ground(680,740,displayWidth*10,140);

clue1 = new Paper(600,640);
//horrorclue  = new Paper(2500,600);
frame1 = new Frame(900,120);
manimg = new Man(900,120);

box1 = new Box(2500,630);

kid=new Kid(0,600,200,200);
clue1b = createButton('OPEN');
clue2b = createButton('OPEN NEXT RIDDLE');
clue3ba = createButton('OPEN BOX');
clue3bb = createButton('OPEN NEXT RIDDLE');
clue4b = createButton('OPEN NEXT RIDDLE');
clue5b = createButton('OPEN NEXT CLUE');


table1 = new Table(4500,615,200,150);

juice1 = new Juice(4490,530,100,100);

sticker1 = new Horror(2500,620);




 scroll2 = new Scroll(6000,200);

norm1 = new Norm(3500,100);

closeB = createButton('CLOSE');

close2B = createButton('CLOSE');

close3B = createButton('CLOSE');

close4B = createButton('CLOSE');

close5B = createButton('CLOSE');

fire1 = new Fire(1500,630,80,80);


farmer = new Farmer(200,600,325,350);
 Engine.run(engine);
}

function draw() {

  Engine.update(engine);
 // background(120);  
  if(gameState==="start"){
    console.log(gameState)
    form.display();
    background(120);  


  }


 if(gameState === "play"){
  
  

  background(background_img);
  clue1.display();
  /*if(bg.x<0){
    bg.x = bg.width/2;
  }*/

  fire1.display();
    
    frame1.display();
   manimg.display();
  
   form.hide();
   
    norm1.display();
    ground1.display();
    farmer.display();
    sticker1.display();
    table1.display();
    juice1.display();
    if(box1!==null){
    box1.display();
}


camera.position.x = farmer.body.position.x;
//console.log(farmer.body.position.x);

if(isTouchingC(farmer,clue1)){
  console.log(isTouchingC(farmer,clue1))
  open++;
  clue1b.show();
  clue1b.position(displayWidth/2-50,displayHeight/4);
// console.log(open);
  //Matter.Body.setStatic(farmer.body,true);
}

if(isTouchingR(farmer,fire1)){
  open++;
  clue2b.position(displayWidth/2-50,displayHeight/4);
  //Matter.Body.setStatic(farmer.body,true);
}

if(isTouchingR(farmer,sticker1)){
 
  clue3ba.position(displayWidth/2-50,displayHeight/4);
 // Matter.Body.setStatic(farmer.body,true);
}
if( box1=== null){
  clue3bb.position(displayWidth/2-50,displayHeight/4);
  //Matter.Body.setStatic(farmer.body,true);
  open++;
}


if(isTouchingR(farmer,norm1)){
  
  clue4b.position(displayWidth/2-50,displayHeight/4);
 // Matter.Body.setStatic(farmer.body,true);
 open++;
}


if(isTouchingR(farmer,juice1)){
  open++;
  clue5b.position(displayWidth/2-50,displayHeight/4);
 // Matter.Body.setStatic(farmer.body,true);
}


clue1b.mousePressed(function(){

  if(clueCount===0){
  clue1b.hide();
  console.log(clueCount)
  //gameState="clue1";
  //1
  //clueCount 1 is for opening clue 1;
  clueCount+=1;//1
  }

})

clue2b.mousePressed(function(){
  if(clueCount===2){
    clue2b.hide();
    //1
    clueCount+=1;//3
  }
})

clue3ba.mousePressed(function(){
  if(clueCount===4){
    //clue2b.hide();
clue3ba.hide();
box1 = null;


    clueCount+=1;//5
  }
})

clue3bb.mousePressed(function(){
  if(clueCount===5){
    //clue2b.hide();
clue3bb.hide();
//1
    clueCount+=1;//6
  }
})


clue4b.mousePressed(function(){
  if(clueCount===7){
    //clue2b.hide();
clue4b.hide();

//1

    clueCount+=1;//8
  }
})

clue5b.mousePressed(function(){
  if(clueCount===9){
    //clue2b.hide();
clue5b.hide();
//1
    clueCount+=1;//10
  }
})







if(clueCount===1){
  xPo=farmer.body.position.x;
  yPo = farmer.body.position.y;
  clue1b.hide();
  //Matter.Body.setPosition(farmer.body,{x:scroll1.body.position.x,y:scroll1.body.position.y})
  camera.position.x = 0;
  //scroll1.display();
  

image(scro1,-500,50,1000,600);
  //text("HERE'S YOUR FIRST RIDDLE!",300,300);

  rid11 = createSprite(-250,300,100,100);
  rid11.addImage(rid11img);
  rid11.scale=0.6;

  rid12 = createSprite(150,300,100,100);
  rid12.addImage(rid12img);
  rid12.scale=0.1;

  rid13 = createSprite(-250,500,100,100);
rid13.addImage(rid13img);
rid13.scale=0.2;

rid14 = createSprite(150,500,100,100);
rid14.addImage(rid14img);
rid14.scale=0.8;

riddle1Group.add(rid11);
riddle1Group.add(rid12);
riddle1Group.add(rid13);
riddle1Group.add(rid14);
  
  if(mousePressedOver(rid11)){
    
 riddle1Group.destroyEach();
  closeB.position(displayWidth/2-50,displayHeight/4);
  f++;
}


if(mousePressedOver(rid12)){
  riddle1Group.destroyEach();
wrong();


}

if(mousePressedOver(rid13)){
  riddle1Group.destroyEach();
  wrong();
  f++;
  }

  if(mousePressedOver(rid14)){
    riddle1Group.destroyEach();
    wrong();
    f++;
    }
}



if(clueCount===3){

  //scroll1 = null;
  
  xPo=farmer.body.position.x;
  yPo = farmer.body.position.y;

  camera.position.x = 0;
  image(scro2,-700,50,1000,600);

rid21 = createSprite(-250,300,100,100);
  rid21.addImage(rid21img);
  rid21.scale=0.5;

  rid22 = createSprite(150,300,100,100);
  rid22.addImage(rid22img);
  rid22.scale=0.5;

  rid23 = createSprite(-250,500,100,100);
rid23.addImage(rid23img);
rid23.scale=0.5;

rid24 = createSprite(150,500,100,100);
rid24.addImage(rid24img);
rid24.scale=0.5;


riddle2Group.add(rid21);
riddle2Group.add(rid22);
riddle2Group.add(rid23);
riddle2Group.add(rid24);


if(mousePressedOver(rid21)){
  //

close2B.position(displayWidth/2-50,displayHeight/4);
riddle2Group.destroyEach();
  

}

if(mousePressedOver(rid22)){
  riddle2Group.destroyEach();
  wrong();
  
  }
  
  if(mousePressedOver(rid23)){
    riddle2Group.destroyEach();
    wrong();
    
    }
  
    if(mousePressedOver(rid24)){
      riddle2Group.destroyEach();
    wrong();
      
      }
  
  //close2B.position(displayWidth/2-50,displayHeight/4);

}

if(clueCount===6){
  xPo=farmer.body.position.x;
  yPo = farmer.body.position.y;
  
  //Matter.Body.setPosition(farmer.body,{x:scroll1.body.position.x,y:scroll1.body.position.y})
  camera.position.x = 0;
 image(scro3,-700,-50,1600,400);


rid31 = createSprite(-250,300,100,100);
  rid31.addImage(rid31img);
  rid31.scale=0.6;

  rid32 = createSprite(150,300,100,100);
  rid32.addImage(rid32img);
  rid32.scale=01;

  rid33 = createSprite(-250,500,100,100);
rid33.addImage(rid33img);
rid33.scale=1;

rid34 = createSprite(150,500,100,100);
rid34.addImage(rid34img);
rid34.scale=0.8;

riddle3Group.add(rid31);
riddle3Group.add(rid32);
riddle3Group.add(rid33);
riddle3Group.add(rid34);

if(mousePressedOver(rid32)){
  
  riddle3Group.destroyEach();

close3B.position(displayWidth/2-50,displayHeight/4);
}

if(mousePressedOver(rid31)){
  riddle3Group.destroyEach();
  wrong();
  
  }
  
  if(mousePressedOver(rid33)){
    riddle3Group.destroyEach();
    wrong();
    
    }
  
    if(mousePressedOver(rid34)){
      riddle3Group.destroyEach();
      wrong();
      
      }

}

if(clueCount===8){
  xPo=farmer.body.position.x;
  yPo = farmer.body.position.y;
  
  //Matter.Body.setPosition(farmer.body,{x:scroll1.body.position.x,y:scroll1.body.position.y})
  camera.position.x = 0;
  image(scro4,-700,0,1000,300);

  
rid41 = createSprite(-250,300,100,100);
rid41.addImage(rid41img);
rid41.scale=0.6;

rid42 = createSprite(150,300,100,100);
rid42.addImage(rid42img);
rid42.scale=0.5;

rid43 = createSprite(-250,500,100,100);
rid43.addImage(rid43img);
rid43.scale=1;

rid44 = createSprite(150,500,100,100);
rid44.addImage(rid44img);
rid44.scale=0.8;

riddle4Group.add(rid41);
riddle4Group.add(rid42);
riddle4Group.add(rid43);
riddle4Group.add(rid44);
if(mousePressedOver(rid42)){
  riddle4Group.destroyEach();
  close4B.position(displayWidth/2-50,displayHeight/4);
}

if(mousePressedOver(rid41)){
  riddle4Group.destroyEach();
  wrong();
  
  }
  
  if(mousePressedOver(rid43)){
    riddle4Group.destroyEach();
    wrong();
    
    }
  
    if(mousePressedOver(rid44)){
      riddle4Group.destroyEach();
      wrong();
      
      }


}

if(clueCount===10){
  xPo=farmer.body.position.x;
  yPo = farmer.body.position.y;
  
  //Matter.Body.setPosition(farmer.body,{x:scroll1.body.position.x,y:scroll1.body.position.y})
  camera.position.x = 5500;
  //image(scro5,-700,50,1500,1000);
  scroll2.display();

  close5B.position(displayWidth/2-50,displayHeight/4);
}

closeB.mousePressed(function(){
  if(clueCount===1){
  //Matter.Body.setPosition(farmer.body,{x:xPo,y:yPo})
  camera.position.x =farmer.body.position.x;
  closeB.hide();
  riddle1Group.destroyEach();
  open++;//0

  //clueCount 2 is for closing clue 1;
  clueCount+=1;//2
 
  }

 // Matter.Body.setStatic(farmer.body,false);
})

close2B.mousePressed(function(){
  if(clueCount===3){
    //Matter.Body.setPosition(farmer.body,{x:xPo,y:yPo})
    camera.position.x =farmer.body.position.x;
    close2B.hide();
    riddle2Group.destroyEach();
    open++;//0
    //clueCount 2 is for closing clue 1;
    clueCount+=1;//4
  
    }
    //Matter.Body.setStatic(farmer.body,false);
})

close3B.mousePressed(function(){
  if(clueCount===6){
  //Matter.Body.setPosition(farmer.body,{x:xPo,y:yPo})
  camera.position.x =farmer.body.position.x;
  close3B.hide();
  riddle3Group.destroyEach();
  open++;//0
  //clueCount 2 is for closing clue 1;
  clueCount+=1;//7
  
  }
  //Matter.Body.setStatic(farmer.body,false);

})

close4B.mousePressed(function(){
  if(clueCount===8){
  //Matter.Body.setPosition(farmer.body,{x:xPo,y:yPo})
  camera.position.x =farmer.body.position.x;
  close4B.hide();
  riddle4Group.destroyEach();
  open++;//0
  //clueCount 2 is for closing clue 1;
  clueCount+=1;//9
 
  }

  //Matter.Body.setStatic(farmer.body,false);
})

close5B.mousePressed(function(){
  if(clueCount===10){
  //Matter.Body.setPosition(farmer.body,{x:xPo,y:yPo})
  camera.position.x =farmer.body.position.x;
  close5B.hide();

  open++;//0
  //clueCount 2 is for closing clue 1;
  clueCount+=1;//11
 
  }
  
//Matter.Body.setStatic(farmer.body,false);
})

if(clueCount===11){
kid.display();
if(isTouchingR(kid,farmer)){
  
  
 gameState="end";


}
}

if(gameState==="end"){
  background(bgimg);
textSize(25);
  fill("blue");
  stroke("black");
  strokeWeight(2);
  text("GOOD JOB!" , displayWidth/2-800,displayHeight/2-300);
text("YOU SUCCESSFULLY SAVED THE FARMER'S KID",displayWidth/2-800,displayHeight/2-200);

}

drawSprites();
 }

  
 
  
}

function keyPressed(){

  //if(gameState==="play" && open%2 === 0 ){

  
  //open=0;
if(keyCode === RIGHT_ARROW){
  farmer.body.position.x+=10;
 

}

if(keyCode===32 && gameState==="wrong"){

  gameState= "start";

form.show();
correctit();
  
  
}

if(keyCode === LEFT_ARROW){
  farmer.body.position.x-=10;
  
}

if(keyCode === UP_ARROW){
  farmer.body.position.y-=10;
  
}

if(keyCode === DOWN_ARROW){
  farmer.body.position.y+=10;
  
}
  
  }
  

  

  
//}

function isTouchingC(obj1,obj2){
var  farmerBody = obj1.body.position;
var  clue1Body = obj2.body.position;



  if(clue1Body.x-farmerBody.x<obj1.width/2+obj2.r  ){
  
    return true;
      
    }
  
  
  
    else{
      return false;
    }
  
  }

  function isTouchingR(obj3,obj4){
    var  farmerBody = obj3.body.position;
    var  clueBody = obj4.body.position;

    if(clueBody.x-farmerBody.x<obj3.width/2+obj4.width/2 ){

   
      return true;
        
      }
    
    
    
      else{
        return false;
      }

  }

  function wrong(){
  //  open--
    gameState = "wrong";
    imageMode(CENTER);
    image(wr,-50,300,1000,600);
    clueCount=0;
  }

function correctit(){
 // clueCount=0;
  Matter.Body.setPosition(farmer.body,{x:200,y:600});
}
