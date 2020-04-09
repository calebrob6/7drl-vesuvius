"use strict";

var SpriteMaps = {
    "urls":[
        "images/sprites/fontlarge.png",
        "images/sprites/fontsmall1.gif",
        "images/sprites/fontsmall2.gif",
        "images/sprites/things.png",
        "images/sprites/characters.png",
        "images/sprites/basictiles.png",
        "images/sprites/dead.png"
    ],
    "resolutions":[
        16,
        16,
        16,
        16,
        16,
        16,
        16
    ],
    "images":[],
    load: function(){
        let tImage;
        for(let i in this.urls){
            tImage = new Image();
            tImage.src = this.urls[i];
            tImage.onload = (function(url){
                console.debug("Loaded image: " + url);
            })(this.urls[i]);
            this.images.push(tImage);
        }

    }
}

//-------------------------
// Sprite
//-------------------------
var Sprite = function(spriteMapIdx, spriteHeight, spriteWidth, coordsList){
    this.spriteMapIdx = spriteMapIdx;
    this.coordsList = coordsList;

    this.spriteMapResolution = SpriteMaps.resolutions[this.spriteMapIdx];

    this.height = spriteHeight * this.spriteMapResolution;
    this.width = spriteWidth * this.spriteMapResolution;
}

Sprite.prototype.draw = function(ctx, x, y, frame=0, outputResolution=1){
    ctx.save()

    let spriteX = this.coordsList[frame][0] * this.spriteMapResolution;
    let spriteY = this.coordsList[frame][1] * this.spriteMapResolution;
    
    ctx.drawImage(
        SpriteMaps.images[this.spriteMapIdx],
        spriteX,
        spriteY,
        this.width,
        this.height,
        x,
        y,
        this.width * outputResolution,
        this.height * outputResolution
    );

    ctx.restore()
}

//-------------------------
// Entity
//-------------------------
var Entity = function(sprite, x, y){
    this.sprite = sprite;
    this.x = x;
    this.y = y;
}

Entity.prototype.draw = function(ctx){
    this.sprite.draw(ctx, this.x, this.y, 0);
}


var terrainSprites = {
    "grass": new Sprite(5, 1, 1, [[3,1]]),
    "flowers": new Sprite(5, 1, 1, [[4,1]])
}

var capitalLettersBlue = {
    "A": new Sprite(0, 1, 1, [[0,0]]),
    "B": new Sprite(0, 1, 1, [[1,0]]),
    "C": new Sprite(0, 1, 1, [[2,0]]),
    "D": new Sprite(0, 1, 1, [[3,0]]),
    "E": new Sprite(0, 1, 1, [[4,0]]),
    "F": new Sprite(0, 1, 1, [[5,0]]),
    "G": new Sprite(0, 1, 1, [[6,0]]),
    "H": new Sprite(0, 1, 1, [[7,0]]),
    "I": new Sprite(0, 1, 1, [[8,0]]),
    "J": new Sprite(0, 1, 1, [[9,0]]),
    "K": new Sprite(0, 1, 1, [[10,0]]),
    "L": new Sprite(0, 1, 1, [[11,0]]),
    "M": new Sprite(0, 1, 1, [[12,0]]),
    "N": new Sprite(0, 1, 1, [[0,1]]),
    "O": new Sprite(0, 1, 1, [[1,1]]),
    "P": new Sprite(0, 1, 1, [[2,1]]),
    "Q": new Sprite(0, 1, 1, [[3,1]]),
    "R": new Sprite(0, 1, 1, [[4,1]]),
    "S": new Sprite(0, 1, 1, [[5,1]]),
    "T": new Sprite(0, 1, 1, [[6,1]]),
    "U": new Sprite(0, 1, 1, [[7,1]]),
    "V": new Sprite(0, 1, 1, [[8,1]]),
    "W": new Sprite(0, 1, 1, [[9,1]]),
    "X": new Sprite(0, 1, 1, [[10,1]]),
    "Y": new Sprite(0, 1, 1, [[11,1]]),
    "Z": new Sprite(0, 1, 1, [[12,1]])
}