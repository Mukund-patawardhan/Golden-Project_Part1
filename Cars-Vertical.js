class VCar{
    constructor(){
        this.posY=[-1967,-1406,-607,270,850,1575,2142];
        this.car=createSprite(random(this.posY),-windowHeight*3,30,60);
        this.car.setVelocity(0,7);
        this.ran=Math.round(random(1,31));
        this.IMG=loadImage("car "+this.ran+".png");
        this.car.addImage("car",this.IMG);
        this.car.scale=0.25;

        this.pollution=false;
    }

    Properties(){
        if(this.car.y>windowHeight*2.5){
            this.car.destroy();
        }
        if(this.car.isTouching(game.player)){
            this.car.destroy();
            score--;
        }
        if(this.ran<6){
            this.pollution=true;
        }
    }
}