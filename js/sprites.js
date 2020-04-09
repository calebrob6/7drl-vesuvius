"use strict";

var SPRITE_LOAD_COUNTER = 0;

var SpriteLoader = {
    "images": new Object(),
    "resolutions": new Object(),
    "register": function(url){
        let tImage = new Image();
        tImage.src = url;
        SpriteLoader.images[url] = tImage;
        tImage.url = url;
        tImage.onload = function(){
            console.debug("Loaded image: " + this.url + " with shape (" +this.height+", " +this.width+ ")");
            SpriteLoader.resolutions[this.url] = [this.width, this.height];
            SPRITE_LOAD_COUNTER -= 1;
        };
        SPRITE_LOAD_COUNTER += 1;
    }
};

//-------------------------
// Sprite
//-------------------------
var Sprite = function(frames){
    /*
    frames should be a list of URLs to the different images in the sprite

    The SpriteLoader will automatically record the height and width of the sprite so that we don't have to worry about it here.
    */
    this.spriteWidth = null;
    this.spriteHeight = null;

    this.frames = frames;

    for(let i=0;i<frames.length;i++){
         SpriteLoader.register(frames[i]);
    }

}

Sprite.prototype.draw = function(ctx, x, y, frameIndex=0, outputResolution=1){
    ctx.save();

    let url = this.frames[frameIndex];
    let spriteWidth = SpriteLoader.resolutions[url][0];
    let spriteHeight = SpriteLoader.resolutions[url][1];

    ctx.drawImage(
        SpriteLoader.images[url],
        0,
        0,
        spriteWidth,
        spriteHeight,
        x,
        y,
        spriteWidth * outputResolution,
        spriteHeight * outputResolution
    );
    ctx.restore();
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
    this.sprite.draw(ctx, this.x, this.y, 0, 1);
}



//-------------------------
// Define all the sprites that we care about by name 
//-------------------------
var SPRITES_TILES = {
    "wall_bottom_1": new Sprite(["images/sprites/basictiles/basictiles_0_0.png"]),
	"wall_top_1": new Sprite(["images/sprites/basictiles/basictiles_1_0.png"]),
	"wall_bottom_2": new Sprite(["images/sprites/basictiles/basictiles_2_0.png"]),
	"wall_top_2": new Sprite(["images/sprites/basictiles/basictiles_3_0.png"]),
	"wall_fire_bottom_1": new Sprite(["images/sprites/basictiles/basictiles_4_0.png"]),
	"wall_fire_top_1": new Sprite(["images/sprites/basictiles/basictiles_5_0.png"]),
	"wall_fire_bottom_2": new Sprite(["images/sprites/basictiles/basictiles_6_0.png"]),
	"wall_fire_top_2": new Sprite(["images/sprites/basictiles/basictiles_7_0.png"]),
	"wood_panel": new Sprite(["images/sprites/basictiles/basictiles_0_1.png"]),
	"red_square": new Sprite(["images/sprites/basictiles/basictiles_1_1.png"]),
	"farm_square": new Sprite(["images/sprites/basictiles/basictiles_2_1.png"]),
	"green_square": new Sprite(["images/sprites/basictiles/basictiles_3_1.png"]),
	"flower_square": new Sprite(["images/sprites/basictiles/basictiles_4_1.png"]),
	"water_stone": new Sprite(["images/sprites/basictiles/basictiles_5_1.png"]),
	"moss_path": new Sprite(["images/sprites/basictiles/basictiles_6_1.png"]),
	"rock_wall": new Sprite(["images/sprites/basictiles/basictiles_7_1.png"]),
	"wood_floor": new Sprite(["images/sprites/basictiles/basictiles_0_2.png"]),
	"red_carpet": new Sprite(["images/sprites/basictiles/basictiles_1_2.png"]),
	"farm_blob": new Sprite(["images/sprites/basictiles/basictiles_2_2.png"]),
	"green_blob": new Sprite(["images/sprites/basictiles/basictiles_3_2.png"]),
	"plant": new Sprite(["images/sprites/basictiles/basictiles_4_2.png"]),
	"waterfall": new Sprite(["images/sprites/basictiles/basictiles_5_2.png"]),
	"black_square": new Sprite(["images/sprites/basictiles/basictiles_6_2.png"]),
	"rock_wall_to_black": new Sprite(["images/sprites/basictiles/basictiles_7_2.png"]),
	"wall_nw": new Sprite(["images/sprites/basictiles/basictiles_0_3.png"]),
	"wall_n": new Sprite(["images/sprites/basictiles/basictiles_1_3.png"]),
	"wall_ne": new Sprite(["images/sprites/basictiles/basictiles_2_3.png"]),
	"pot": new Sprite(["images/sprites/basictiles/basictiles_3_3.png"]),
	"pot_broken": new Sprite(["images/sprites/basictiles/basictiles_4_3.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_5_3.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_6_3.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_7_3.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_0_4.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_1_4.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_2_4.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_3_4.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_4_4.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_5_4.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_6_4.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_7_4.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_0_5.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_1_5.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_2_5.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_3_5.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_4_5.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_5_5.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_6_5.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_7_5.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_0_6.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_1_6.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_2_6.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_3_6.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_4_6.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_5_6.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_6_6.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_7_6.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_0_7.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_1_7.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_2_7.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_3_7.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_4_7.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_5_7.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_6_7.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_7_7.png"]),
	"grass_1": new Sprite(["images/sprites/basictiles/basictiles_0_8.png"]),
	"grass_2": new Sprite(["images/sprites/basictiles/basictiles_1_8.png"]),
	"lava_floor": new Sprite(["images/sprites/basictiles/basictiles_2_8.png"]),
	"signpost": new Sprite(["images/sprites/basictiles/basictiles_3_8.png"]),
	"gold": new Sprite(["images/sprites/basictiles/basictiles_4_8.png"]),
	"gems": new Sprite(["images/sprites/basictiles/basictiles_5_8.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_6_8.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_7_8.png"]),
	"rock_floor": new Sprite(["images/sprites/basictiles/basictiles_0_9.png"]),
	"stone_floor": new Sprite(["images/sprites/basictiles/basictiles_1_9.png"]),
	"lava_floor": new Sprite([
        "images/sprites/basictiles/basictiles_2_9.png",
        "images/sprites/basictiles/basictiles_3_9.png"
    ]),
	"tree": new Sprite(["images/sprites/basictiles/basictiles_4_9.png"]),
	"tree_2": new Sprite(["images/sprites/basictiles/basictiles_5_9.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_6_9.png"]),
	"null": new Sprite(["images/sprites/basictiles/basictiles_7_9.png"]),
	"stone_path_vertical": new Sprite(["images/sprites/basictiles/basictiles_0_10.png"]),
	"stone_path_horizontal": new Sprite(["images/sprites/basictiles/basictiles_1_10.png"]),
	"wood_path_vertical": new Sprite(["images/sprites/basictiles/basictiles_0_11.png"]),
	"wood_path_horizontal": new Sprite(["images/sprites/basictiles/basictiles_1_11.png"])
};
var SPRITES_THINGS = {

};
var SPRITES_DEAD = {

};
var SPRITES_CHARACTERS = {
    "player_south": new Sprite([
        "images/sprites/characters/characters_0_0.png",
        "images/sprites/characters/characters_1_0.png",
        "images/sprites/characters/characters_2_0.png"
    ]),
    "player_west": new Sprite([
        "images/sprites/characters/characters_0_1.png",
        "images/sprites/characters/characters_1_1.png",
        "images/sprites/characters/characters_2_1.png"
    ]),
    "player_east": new Sprite([
        "images/sprites/characters/characters_0_2.png",
        "images/sprites/characters/characters_1_2.png",
        "images/sprites/characters/characters_2_2.png"
    ]),
    "player_north": new Sprite([
        "images/sprites/characters/characters_0_3.png",
        "images/sprites/characters/characters_1_3.png",
        "images/sprites/characters/characters_2_3.png"
    ])
};