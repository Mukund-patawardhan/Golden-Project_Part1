class HCar{
    constructor(){
        this.posX=[1033,638,228,-99,497,-902];
        this.r=Math.round(random(1,this.posX.length));
        this.car=createSprite(-windowWidth*3,this.posX[this.r-1],60,30);
        console.log(this.posX[this.r-1])
        if(this.posX[this.r-1]===497){
            this.car.y=638;
        }
        this.car.setVelocity(7,0);
        this.ran=Math.round(random(1,31));
        this.IMG=loadImage("car"+this.ran+".png");
        this.car.addImage("car",this.IMG);
        this.car.scale=0.25;

        this.pollution=false;
    }

    Properties(){
        if(this.car.x>windowWidth*2.5){
            this.car.destroy();
        }
        if(this.car.isTouching(game.player)){
            this.car.destroy();
            score--;
        }
        if(this.ran>26){
            this.pollution=true;
        }
    }
}