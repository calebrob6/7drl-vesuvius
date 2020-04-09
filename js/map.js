"use strict";

var Map = function(){
    this.map = [];
    
    for(let y=0;y<gViewportHeight;y+=16){
        let row = [];
        for(let x=0;x<gViewportWidth;x+=16){
        
            if(Math.random() < 0.5){
                row.push(new Entity(terrainSprites["grass"], x, y))
            }else{
                row.push(new Entity(terrainSprites["flowers"], x, y))
            }
        }
        this.map.push(row);
    }
}

Map.prototype.draw = function(ctx){
    ctx.save()

    for(let i=0;i<this.map.length;i++){
        for(let j=0;j<this.map[i].length;j++){
            this.map[i][j].draw(ctx)
        }
    }
    
    ctx.restore()
}

Map.prototype.update = function(dt){

}