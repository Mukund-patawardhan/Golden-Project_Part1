class Garbage{
    constructor(){
        this.garbage=createSprite(random(-windowWidth*2,windowWidth*2),random(-windowHeight*2,windowHeight*2),5,5);
        this.ran=Math.round(random(1,14));
        this.g=loadImage("garbage"+this.ran+".png");
        this.garbage.addImage("g",this.g);
        this.garbage.scale=0.05;
    }

    touch(){
        if(this.garbage.isTouching(game.player)){
            this.garbage.x=random(-windowWidth*2,windowWidth*4);
            this.garbage.y=random(-windowHeight*2,windowHeight*4);
            if(dist(this.garbage.x,this.garbage.y,game.player.x,game.player.y)<700){
                this.garbage.x=random(-windowWidth*2,windowWidth*4);
                this.garbage.y=random(-windowHeight*2,windowHeight*4);
            }
        }
    }
}