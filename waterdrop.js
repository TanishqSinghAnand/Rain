class RainDrop {
    constructor(x,y){

        var options = {

            'friction': 1.0   ,
            'gravity' : 0.5  ,
            'density' : 1 

        }

     //   this.body=Bodies.rectangle(x,y,width,height,options);
        this.body = Bodies.rectangle(x, y, width, height, options);

    //    this.y = 0 ;
       // this.x = random(0,1200);
        this.width = 20 ;
        this.height = 30 ;
    //    this.image = loadImage("drop.png");

        World.add(world, this.body);

    }

    display(){

        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        this.velocityY = 20;
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER); 
        rect(0,0, this.width, this.height);
        pop();


    }
}