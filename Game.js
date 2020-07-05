class Game{
    constructor(){
        form=new Form();
        this.player=createSprite(windowWidth/2,windowHeight/2,100,100);
        this.player.addAnimation("stand",stand);
        this.player.scale=0.05;

        this.g=[];
        for(var i=0;i<11;i++){
            this.g.push(new Garbage());
        }
        this.zoomIn=createButton("+");
        this.zoomOut=createButton("-");

        this.buildings=[];
        //this.buildings.push(new Building());

        this.Hcars=[];
        this.Vcars=[];

        this.detect=false;

        this.score=createElement('h1');

        this.zoom=0
        camera.zoom=4;
    }

    form(){
        form.display();
    }

    game(){

        if(frameCount%100===0){
            this.Vcars.push(new VCar());
        }
        if(frameCount%100===0){
            this.Hcars.push(new HCar());
        }
        
        imageMode(CORNER);
        image(roads,-windowWidth*2,-windowHeight*2,windowWidth*4,windowHeight*4);
        camera.x=this.player.x;
        camera.y=this.player.y;

        this.player.frameDelay=10;

        camera.zoom=camera.zoom+this.zoom;
        
        for(var j=0;j<this.g.length;j++){
            this.g[j].touch();
            for (var i=0;i<this.Hcars.length;i++){
                this.Hcars[i].Properties();
                if(this.Hcars[i].car.isTouching(this.g[j].garbage)){
                    this.g[j].garbage.x=random(-windowWidth*2,windowWidth*4);
                    this.g[j].garbage.y=random(-windowHeight*2,windowHeight*4);
                    if(dist(this.g[j].garbage.x,this.g[j].garbage.y,game.player.x,game.player.y)<700){
                        this.g[j].garbage.x=random(-windowWidth*2,windowWidth*4);
                        this.g[j].garbage.y=random(-windowHeight*2,windowHeight*4);
                    }
                }
            }
            for (var i=0;i<this.Vcars.length;i++){
                this.Vcars[i].Properties();
                if(this.Vcars[i].car.isTouching(this.g[j].garbage)){
                    this.g[j].garbage.x=random(-windowWidth*2,windowWidth*4);
                    this.g[j].garbage.y=random(-windowHeight*2,windowHeight*4);
                    if(dist(this.g[j].garbage.x,this.g[j].garbage.y,game.player.x,game.player.y)<700){
                        this.g[j].garbage.x=random(-windowWidth*2,windowWidth*4);
                        this.g[j].garbage.y=random(-windowHeight*2,windowHeight*4);
                    }
                }
            }
        }

        this.zoomIn.position(windowWidth*0,windowHeight*0);
        this.zoomOut.position(windowWidth*0.03,windowHeight*0);

        this.zoomIn.mousePressed(()=>{
            camera.zoom=camera.zoom+0.1;
        })
        this.zoomOut.mouseReleased(()=>{
            this.zoom=0.02;
        })
        if(camera.zoom>4){
            this.zoom=0;
        }
        this.zoomOut.mousePressed(()=>{
            this.zoom=-0.1;
         })
         if(camera.zoom<2){
             this.zoom=0.02;
         }

         this.score.html("SCORE : "+score);
         this.score.position(windowWidth*0.8,windowHeight*0);

        drawSprites();

        textSize(200);
        text(this.player.x+"____"+this.player.y,-windowWidth*3,windowHeight*0.2);
    }
}