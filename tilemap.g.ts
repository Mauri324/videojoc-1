// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1000100000000000010301000000000000000002000101010100010001010100010101000000000001000100010000000100000000010101010001010100010001010100000100000000000000000100010100000001000101010101010101000001010000010001000000000000010100010000000000010001010101000001000101010001010100010001010100010000000100010000000100000001000100010101000101010101000101010101000100010000000000000000000000000001000101010101010101010001000101010001000000000000000100010001000000000001010101010101010100010101010000000000000000000000000000000000`, img`
. . . . 2 . 2 . . . . . . . . . 
. 2 2 2 2 . 2 . 2 2 2 . 2 2 2 . 
. . . . 2 . 2 . 2 . . . 2 . . . 
. 2 2 2 2 . 2 2 2 . 2 . 2 2 2 . 
. 2 . . . . . . . . 2 . 2 2 . . 
. 2 . 2 2 2 2 2 2 2 2 . . 2 2 . 
. 2 . 2 . . . . . . 2 2 . 2 . . 
. . . 2 . 2 2 2 2 . . 2 . 2 2 2 
. 2 2 2 . 2 . 2 2 2 . 2 . . . 2 
. 2 . . . 2 . . . 2 . 2 . 2 2 2 
. 2 2 2 2 2 . 2 2 2 2 2 . 2 . 2 
. . . . . . . . . . . . . 2 . 2 
2 2 2 2 2 2 2 2 . 2 . 2 2 2 . 2 
. . . . . . . 2 . 2 . 2 . . . . 
. 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
