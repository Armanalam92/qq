  var peppa,peppaImage;

  var house,houseImage;

  var platform,platformImage;

  var mouseicon,mouseiconImage;

  var playbutton,playbuttonImage;

  var background2,background2Image;

  var gamelogo,gamelogoImage;

  var name1,name1Image;

  var leftarrow,leftarrowImage;

  var rightarrow,rightarrowImage;

  var homeicon,homeiconImage;

  var about,aboutImage;

  var info,infoImage;

  var shop,shopImage;;

  var boundary1;

   var coins,coinsImage;
  
  var coins2,coins2Image;

  var scene,sceneImage;

  var jump,jumpImage;

  var to,toImage;

  var air,airImage;

  var air1,air1Image;

  var hiden;

  var mud,mudImage;

  var ballon1,ballon1Image;

  var ballon2,ballon2Image;

  var ballon3,ballon3Image;

  var alien,alienRunning;

  var boundary2;

  var alien2,alien2Running;

  var alien3,alien3Running;

  var life,lifeImage;

  var life2,life2Image;

  var life3,life3Image;

  var restart,restartImage;

  var gameOver,gameOverImage;









function preload() {

  restartImage = loadImage("restart.png");

  gameOverImage = loadImage("gameOver.png");

  lifeImage = loadImage("life.png");

  life2Image = loadImage("life.png");

  life3Image = loadImage("life.png");

alienRunning = loadAnimation("alien1.png","alien2.png");

alien2Running = loadAnimation("alien1.png","alien2.png");

  alien3Running = loadAnimation("alien1.png","alien2.png");

  ballon1Image = loadImage("blue_balloon0.png");

  ballon2Image = loadImage("green_balloon0.png");

  ballon3Image = loadImage("pink_balloon0.png");

 airImage = loadImage("air.jpg");

 air1Image = loadImage("air.jpg");

  toImage = loadImage("platform.png");

  jumpImage = loadImage("32.png");

  houseImage = loadImage("house.jpg");

  mudImage = loadImage("mud.png");

   sceneImage = loadImage("back.jpg");

   coins2Image = loadImage("654.png");

   coinsImage = loadImage("346 (2).png");

  shopImage = loadImage("png.png");

  infoImage = loadImage("ewew.png");

  aboutImage = loadImage("icow.png");

   homeiconImage = loadImage("icn.jpg");

   leftarrowImage = loadImage("left.jpg");

   rightarrowImage = loadImage("right.jpg");

   peppaImage = loadImage("peppa.png");

  platformImage = loadImage("pla.png");

  name1Image = loadImage("4.png");

  gamelogoImage = loadImage("2.jpg"); 

  background2Image = loadImage("123.png");

  mouseiconImage = loadImage("download.jpg");

  playbuttonImage = loadImage("hj.jpg")

 
}





function setup () {

  createCanvas(600,400);

  if(keyDown("space")&& peppa.y >= 100) {
   peppa.velocityY = -13;
  }
  
 


  background2 = createSprite(300,200);
  background2.addImage(background2Image);
  background2.scale=0.5;


       gamelogo = createSprite(300,50);
       gamelogo.addImage(gamelogoImage);
       gamelogo.scale=0.2;
    

  playbutton = createSprite(300,350,10,10);
  playbutton.addImage(playbuttonImage);
  playbutton.scale=0.2;

  mouseicon = createSprite(300,200,10,10);
  mouseicon.addImage(mouseiconImage);
  mouseicon.scale=0.3;

  name1 = createSprite(500,380);
  name1.addImage(name1Image);
  name1.scale=0.2;

 
  
  homeicon = createSprite(50,20);
  homeicon.addImage(homeiconImage);
  homeicon.scale=0.1;
   

  about = createSprite(550,20);
  about.addImage(aboutImage);
  about.scale=0.1;


  peppa = createSprite(100,320,40,10);
  peppa.addImage(peppaImage)  
  peppa.scale=0.2;
 
  rightarrow = createSprite(550,350);
  rightarrow.addImage(rightarrowImage);
  rightarrow.scale=0.3;


  leftarrow = createSprite(50,350);
  leftarrow.addImage(leftarrowImage);
  leftarrow.scale=0.3;

  shop = createSprite(550,300);
  shop.addImage(shopImage);
  shop.scale=0.1;

 air = createSprite(300,200);
 air.addImage(airImage);

 air1 = createSprite(100,200);
 air1.addImage(air1Image);


  boundary1 = createSprite(650,200,10,400);

  hiden = createSprite(610,10,10,100);
 
  boundary2 = createSprite(10,200,10,400);


  coins = createSprite(200,200);
  coins.addImage(coinsImage);
   coins.scale=0.5;

 
     

  coins2 = createSprite(500,200);
  coins2.addImage(coins2Image);
    coins2.scale=0.5;



    jump = createSprite(50,280);
    jump.addImage(jumpImage);
    jump.scale=0.1;

    house = createSprite(200,350);
    house.addImage(houseImage);


    to = createSprite(300,350);
    to.addImage(toImage);

    alien = createSprite(300,347);
    alien.addAnimation(alienRunning);

    life = createSprite(500,15);
    life.addImage(lifeImage);
    life.scale=0.1;

    life2 = createSprite(550,15);
    life2.addImage(life2Image);
    life2.scale=0.1;

    life3 = createSprite(450,15);
    life3.addImage(life3Image);
    life3.scale=0.1;

    alien2 = createSprite(400,297);
    alien2.addAnimation("alien",alien2Running);

    alien3 = createSprite(500,297);
    alien3.addAnimation("alien",alien3Running);

    restart = createSprite(300,200);
    restart.addImage(restartImage);
    restart.scale=0.5;
    
    gameOver = createSprite(200,100);
    gameOver.addImage(gameOverImage);
    gameOver.scale=0.5;

  
   rightarrow.visible=false;
   leftarrow.visible=false;
   rightarrow.destroy();
   leftarrow.destroy();
   peppa.destroy();
   coins2.destroy();
   coins.destroy();
   jump.destroy();
  to.destroy();
   to.visible=false;
  air.destroy();
  air1.destroy();
  hiden.destroy();
  house.destroy();
  alien.destroy();
  alien2.destroy();
  alien3.destroy();
  boundary2.destroy();
  life.destroy();
  life2.destroy();
  life3.destroy();
  restart.destroy();
  gameOver.destroy();



    

  

}

function draw () {
   background(128);

 

   if(mouseicon.isTouching(jump)&& peppa.y >= 100) {
    peppa.velocityY = -13;
  }

 peppa.velocityY = peppa.velocityY + 0.8
  
boundary2.visible=false;


peppa.setCollider("circle",0,0,100);
peppa.debug=false;


if (alien.isTouching(peppa)) {
 life3.destroy();
}

if (alien2.isTouching(peppa)) {
 life.destroy();
}


if (alien3.isTouching(peppa)) {
 life2.destroy();
 restart = createSprite(300,200);
 restart.addImage(restartImage);
 restart.scale=0.5;
 
 gameOver = createSprite(300,100);
 gameOver.addImage(gameOverImage);
 
 alien.velocityX=0;
 alien2.velocityX=0;
 alien3.velocityX=0;
 peppa.velocityX=0;
 



}

if (mouseicon.isTouching(restart)) {
  playbutton.destroy();
  about.destroy();
  shop.destroy();
    coins.destroy();
    coins2.destroy();
     restart.destroy();
     gameOver.destroy();


    boundary2.visible=false;
    to.visible=false;
  about.visible=true;
  about.visible=true;

   platform = createSprite(300,170);
   platform.addImage(platformImage);


   to = createSprite(300,400);
   to.addImage(toImage);


peppa = createSprite(100,320,40,10);
peppa.addImage(peppaImage);
peppa.scale=0.2;


 rightarrow = createSprite(550,350);
  rightarrow.addImage(rightarrowImage);
  rightarrow.scale=0.3;


  leftarrow = createSprite(50,350);
  leftarrow.addImage(leftarrowImage);
  leftarrow.scale=0.3;

   
jump = createSprite(50,260);
jump.addImage(jumpImage);
jump.scale=0.1;

alien = createSprite(300,300);
alien.addAnimation("alien",alienRunning);


alien2 = createSprite(400,297);
alien2.addAnimation("alien",alien2Running);

alien3 = createSprite(500,297);
alien3.addAnimation("alien",alien3Running);


air = createSprite(300,200);
air.addImage(airImage);
air.scale=0.1;


air1 = createSprite(500,100);
air1.addImage(air1Image);
air1.scale=0.1; 

ballon1 = createSprite(300,150);
ballon1.addImage(ballon1Image);
ballon1.scale=0.1;

ballon2 = createSprite(500,50);
ballon2.addImage(ballon2Image);
ballon2.scale=0.1;

  life = createSprite(500,15);
  life.addImage(lifeImage);
  life.scale=0.1;

  life2 = createSprite(550,15);
  life2.addImage(life2Image);
  life2.scale=0.1;

  life3 = createSprite(450,15);
  life3.addImage(life3Image);
  life3.scale=0.1;


  mouseicon = createSprite(300,200,10,10);
  mouseicon.addImage(mouseiconImage);
  mouseicon.scale=0.3;

  boundary2 = createSprite(10,200,10,400);

  homeicon = createSprite(50,20);
homeicon.addImage(homeiconImage);
homeicon.scale=0.1;



boundary1 = createSprite(700,200,10,400);


}


if (alien.isTouching(boundary2)) {
  alien.destroy();
  alien2.destroy();
  alien3.destroy();
  alien.visible=false;

  alien = createSprite(300,297);
    alien.addAnimation("alien",alienRunning);

    alien2 = createSprite(400,297);
    alien2.addAnimation("alien",alien2Running);

    alien3 = createSprite(500,297);
    alien3.addAnimation("alien",alien3Running);
  

    peppa.velocityX=0;
}

if (peppa.isTouching(ballon1)) {
   ballon1.destroy();
}

if (peppa.isTouching(ballon2)) {
 ballon2.destroy();
}




  if (peppa.isTouching(hiden)) {
    playbutton.destroy();
    about.destroy();
    shop.destroy();
      coins.destroy();
      coins2.destroy();
      hiden.destroy();
     
     

      boundary2.visible=false;
      to.visible=false;
    about.visible=true;
    about.visible=true;

     platform = createSprite(300,170);
     platform.addImage(platformImage);


     to = createSprite(300,400);
     to.addImage(toImage);


 peppa = createSprite(100,320,40,10);
  peppa.addImage(peppaImage);
  peppa.scale=0.4;


   rightarrow = createSprite(550,350);
    rightarrow.addImage(rightarrowImage);
    rightarrow.scale=0.3;


    leftarrow = createSprite(50,350);
    leftarrow.addImage(leftarrowImage);
    leftarrow.scale=0.3;

     
  jump = createSprite(50,260);
  jump.addImage(jumpImage);
  jump.scale=0.1;
 
  alien = createSprite(300,300);
  alien.addAnimation("alien",alienRunning);

  alien2 = createSprite(400,297);
  alien2.addAnimation("alien",alien2Running);

  alien3 = createSprite(500,297);
  alien3.addAnimation("alien",alien3Running);

  
  
  
  air = createSprite(300,200);
  air.addImage(airImage);
  air.scale=0.1;
  
 
  air1 = createSprite(500,100);
  air1.addImage(air1Image);
  air1.scale=0.1; 

  ballon1 = createSprite(300,150);
  ballon1.addImage(ballon1Image);
  ballon1.scale=0.1;

  ballon2 = createSprite(500,50);
  ballon2.addImage(ballon2Image);
  ballon2.scale=0.1;

  
  life = createSprite(500,15);
  life.addImage(lifeImage);
  life.scale=0.1;

  life2 = createSprite(550,15);
  life2.addImage(life2Image);
  life2.scale=0.1;

  life3 = createSprite(450,15);
  life3.addImage(life3Image);
  life3.scale=0.1;


    mouseicon = createSprite(300,200,10,10);
    mouseicon.addImage(mouseiconImage);
    mouseicon.scale=0.3;

    boundary2 = createSprite(10,200,10,400);
  
    homeicon = createSprite(50,20);
  homeicon.addImage(homeiconImage);
  homeicon.scale=0.1;
  
 

 
   

  boundary1 = createSprite(700,200,10,400);
  

  } 

 peppa.collide(to); 
 peppa.collide(air); 
 peppa.collide(air1);
 
   mouseicon.x = World.mouseX
   mouseicon.y = World.mouseY



              if (peppa.isTouching(boundary1)) {


               scene = createSprite(300,190);
               scene.addImage(sceneImage);
               

               peppa = createSprite(100,320,40,10);
               peppa.addImage(peppaImage)  
               peppa.scale=0.4;
               
               
              
                     
               homeicon = createSprite(50,20);
               homeicon.addImage(homeiconImage);
               homeicon.scale=0.1;
                

               to = createSprite(300,400);
               to.addImage(toImage);
               
   rightarrow = createSprite(550,350);
   rightarrow.addImage(rightarrowImage);
   rightarrow.scale=0.3;


   leftarrow = createSprite(50,350);
   leftarrow.addImage(leftarrowImage);
   leftarrow.scale=0.3;

    
   jump = createSprite(50,260);
   jump.addImage(jumpImage);
   jump.scale=0.1;

   
  air = createSprite(300,200);
  air.addImage(airImage);
  air.scale=0.1;
  
 
  air1 = createSprite(500,100);
  air1.addImage(air1Image);
  air1.scale=0.1; 

  hiden = createSprite(610,10,10,100);

  ballon1 = createSprite(300,150);
  ballon1.addImage(ballon1Image);
  ballon1.scale=0.1;

  ballon2 = createSprite(500,50);
  ballon2.addImage(ballon2Image);
  ballon2.scale=0.1;

    life = createSprite(500,15);
    life.addImage(lifeImage);
    life.scale=0.1;

    life2 = createSprite(550,15);
    life2.addImage(life2Image);
    life2.scale=0.1;

    life3 = createSprite(450,15);
    life3.addImage(life3Image);
    life3.scale=0.1;

    alien2 = createSprite(400,297);
    alien2.addAnimation("alien",alien2Running);

    alien3 = createSprite(500,297);
    alien3.addAnimation("alien",alien3Running);
  
    
  alien = createSprite(300,300);
  alien.addAnimation("alien",alienRunning);
  


  mouseicon = createSprite(300,200,10,10);
  mouseicon.addImage(mouseiconImage);
  mouseicon.scale=0.3;

  
  

      
              }

    if (mouseicon.isTouching(rightarrow)) {  
        peppa.x=peppa.x+5;

    }


       if (mouseicon.isTouching(leftarrow)) {
         peppa.x=peppa.x-5;
       }


         if (mouseicon.isTouching(shop)) {
            coins = createSprite(200,200);
            coins.addImage(coinsImage);
             coins.scale=0.5;

           
               

            coins2 = createSprite(500,200);
            coins2.addImage(coins2Image);
              coins2.scale=0.5;
         }

    if (mouseicon.isTouching(about)) {
       info = createSprite(300,200);
       info.addImage(infoImage);
        info.scale=0.5;


       homeicon = createSprite(50,20);
       homeicon.addImage(homeiconImage);
       homeicon.scale=0.1;
    }





   if (mouseicon.isTouching(homeicon)) {

    rightarrow.destroy();
    leftarrow.destroy();
    alien.destroy();
    alien2.destroy();
    alien3.destroy();

    background2 = createSprite(300,200);
    background2.addImage(background2Image);
    background2.scale=0.5;
  
    homeicon = createSprite(50,20);
    homeicon.addImage(homeiconImage);
    homeicon.scale=0.1;
     
  
    about = createSprite(550,20);
    about.addImage(aboutImage);
    about.scale=0.1;
  
   
         gamelogo = createSprite(300,50);
         gamelogo.addImage(gamelogoImage);
         gamelogo.scale=0.2;
      
  
    playbutton = createSprite(300,350,10,10);
    playbutton.addImage(playbuttonImage);
    playbutton.scale=0.2;
  
    mouseicon = createSprite(300,200,10,10);
    mouseicon.addImage(mouseiconImage);
    mouseicon.scale=0.3;
  
    name1 = createSprite(500,380);
    name1.addImage(name1Image);
    name1.scale=0.2;
  

    shop = createSprite(550,300);
    shop.addImage(shopImage);
    shop.scale=0.1;
  
   }





  


   if (mouseicon.isTouching(playbutton)) {
   playbutton.destroy();
    about.destroy();
    shop.destroy();
      coins.destroy();
      coins2.destroy();
     

      boundary2.visible=false;
      to.visible=false;
    about.visible=true;
    about.visible=true;

     platform = createSprite(300,170);
     platform.addImage(platformImage);


     to = createSprite(300,400);
     to.addImage(toImage);


 peppa = createSprite(100,320,40,10);
  peppa.addImage(peppaImage);
  peppa.scale=0.4;


   rightarrow = createSprite(550,350);
    rightarrow.addImage(rightarrowImage);
    rightarrow.scale=0.3;


    leftarrow = createSprite(50,350);
    leftarrow.addImage(leftarrowImage);
    leftarrow.scale=0.3;

     
  jump = createSprite(50,260);
  jump.addImage(jumpImage);
  jump.scale=0.1;
 
  alien = createSprite(300,300);
  alien.addAnimation("alien",alienRunning);
  

  alien2 = createSprite(400,297);
  alien2.addAnimation("alien",alien2Running);

  alien3 = createSprite(500,297);
  alien3.addAnimation("alien",alien3Running);

  
  air = createSprite(300,200);
  air.addImage(airImage);
  air.scale=0.1;
  
 
  air1 = createSprite(500,100);
  air1.addImage(air1Image);
  air1.scale=0.1; 

  ballon1 = createSprite(300,150);
  ballon1.addImage(ballon1Image);
  ballon1.scale=0.1;

  ballon2 = createSprite(500,50);
  ballon2.addImage(ballon2Image);
  ballon2.scale=0.1;

    life = createSprite(500,15);
    life.addImage(lifeImage);
    life.scale=0.1;

    life2 = createSprite(550,15);
    life2.addImage(life2Image);
    life2.scale=0.1;

    life3 = createSprite(450,15);
    life3.addImage(life3Image);
    life3.scale=0.1;


    mouseicon = createSprite(300,200,10,10);
    mouseicon.addImage(mouseiconImage);
    mouseicon.scale=0.3;

    boundary2 = createSprite(10,200,10,400);
  
    homeicon = createSprite(50,20);
  homeicon.addImage(homeiconImage);
  homeicon.scale=0.1;
  


  boundary1 = createSprite(700,200,10,400);
  

   }
 
  alien.velocityX=-3;
  alien2.velocityX=-3;
  alien3.velocityX=-3;

   drawSprites();
//game was completed  (:

}