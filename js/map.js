"use strict";

function getNeighbors(vals, x, y){
    let neighbors = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    for(let ydiff=-1, i=0;ydiff<=1;ydiff++,i++){
        for(let xdiff=-1, j=0;xdiff<=1;xdiff++,j++){
            if(y+ydiff>=0 && y+ydiff<vals.length && x+xdiff>=0 && x+xdiff<vals[y+ydiff].length){
                neighbors[i][j] = vals[y+ydiff][x+xdiff];
            }
        }   
    }
    return neighbors
}


var Map = function(vals){
    this.map = [];

    for(let y=0;y<vals.length;y++){
        let row = [];
        for(let x=0;x<vals[y].length;x++){
        
            if(vals[y][x] == 1){
                row.push(SPRITES_TILES["rock_floor"]);
            }else{
                let neighbors = getNeighbors(vals, x, y);

                let sumNeighbors = neighbors[0][0] + neighbors[0][1] + neighbors[0][2] + neighbors[1][0] + neighbors[1][1] + neighbors[1][2] + neighbors[2][0] + neighbors[2][1] + neighbors[2][2];
                if(sumNeighbors == 0){
                    row.push(SPRITES_TILES["black_square"]);
                }else{
                    if(neighbors[2][1] == 1){
                        row.push(SPRITES_TILES["wall_bottom_1"]);
                    }else{
                        row.push(SPRITES_TILES["wall_top_1"]);
                    }
                }
            }
        }
        this.map.push(row);
    }
}

Map.prototype.draw = function(ctx){
    ctx.save()

    let topLeftCoordX = Math.floor(gViewportOffsetPixelsX / 16);
    let topLeftCoordY = Math.floor(gViewportOffsetPixelsY / 16);

    let windowOffsetPixelsX = -(gViewportOffsetPixelsX % 16);
    let windowOffsetPixelsY = -(gViewportOffsetPixelsY % 16);

    let numX = Math.ceil(gViewportWidth / 16) + 1;
    let numY = Math.ceil(gViewportHeight / 16) + 1;

    //console.debug(`Drawing from (${topLeftCoordX}, ${topLeftCoordY})`);

    for(let y=0;y<numY;y++){
        for(let x=0;x<numX;x++){
            let xCoord = windowOffsetPixelsX + (x*16);
            let yCoord = windowOffsetPixelsY + (y*16);
            
            if(topLeftCoordY+y >= 0 && topLeftCoordY+y < this.map.length && topLeftCoordX+x >= 0 && topLeftCoordX+x < this.map[topLeftCoordY+y].length){
                this.map[topLeftCoordY+y][topLeftCoordX+x].draw(ctx, xCoord, yCoord, 0);
            }else{
                SPRITES_TILES["black_square"].draw(ctx, xCoord, yCoord, 0);
            }

        }
    }
    
    ctx.restore()
}

Map.prototype.update = function(dt){

}