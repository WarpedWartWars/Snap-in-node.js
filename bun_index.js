const {Window} = require('skia-canvas')

import {} from "./Snap4.0beta/morphic";
/*import {} from "./Snap4.0beta/widgets";
import {} from "./Snap4.0beta/blocks";
import {} from "./Snap4.0beta/threads";
import {} from "./Snap4.0beta/objects";*/
//import {} from "./Snap4.0beta/gui";
/*import {} from "./Snap4.0beta/lists";
import {} from "./Snap4.0beta/byob";
import {} from "./Snap4.0beta/xml";
import {} from "./Snap4.0beta/store";
import {} from "./Snap4.0beta/locale";
import {} from "./Snap4.0beta/cloud";
import {} from "./Snap4.0beta/sha512";*/

let win = new Window(800, 600)
win.title = "Canvas Window"
var world = new WorldMorph(e.target.canvas);
//new IDE_Morph().openIn(world);
win.on("draw", e => {
  world.doOneCycle();
})
