//////// BEFORE RUNNING:
// if your snap source folder isn't the same folder as this file,
// copy `snap-logo-sm.png` (or `.gif` or whatever it is) to this folder
// also if it complains about `scriptsPaneTexture.gif` copy that too

//////// start §0 STUBBING STUFF TO MAKE IT WORK IN NODE.JS

const {App, Window, Canvas, CanvasRenderingContext2D: _crc2, Image: _Image} = require("skia-canvas");
const {LocalStorage} = require("node-localstorage");
const {XMLHttpRequest: xmlhr} = require("xmlhttprequest");
const {URL} = require("node:url");
const fs = require("node:fs/promises");

var Element = function(){
  this.style={};
  this.dataset={};
  this.offsetParent=null;
  this.offsetLeft=0;
  this.offsetTop=0;
  this.scrollLeft=0;
  this.scrollTop=0;
};
Element.prototype.setAttribute = function(){};
Element.prototype.addEventListener = function(a,b,...rest){
  if (a==="mousewheel") {
    a = "wheel";
  }
  win.on(a,function(e){
    e.preventDefault = function(){};
    if(a==="wheel"){
      e.wheelDeltaX = e.deltaX;
      e.wheelDeltaY = e.deltaY;
    }
    if(a==="mousemove"){
      //console.log(e);
    }
    b(e);
  },...rest);
};
Element.prototype.getBoundingClientRect = function(){
  return {left:0,top:0};
};
Element.prototype.blur = function(){};
Element.prototype.focus = function(){};

HTMLCanvasElement = function(c){this._canvas=c||new Canvas();};
HTMLCanvasElement.prototype = new Element();
HTMLCanvasElement.prototype.getContext = function(){return new CanvasRenderingContext2D(this._canvas.getContext(...arguments));};
Object.defineProperty(HTMLCanvasElement.prototype, "width", {
  get: function(){return this._canvas.width;},
  set: function(val){this._canvas.width=val;}
});
Object.defineProperty(HTMLCanvasElement.prototype, "height", {
  get: function(){return this._canvas.height;},
  set: function(val){this._canvas.height=val;}
});
HTMLCanvasElement.prototype.toDataURL = function(){return this._canvas.toDataURLSync(...arguments);};

CanvasRenderingContext2D = function(_ocrc2){this._pcrc2=_ocrc2||new _crc2();};
CanvasRenderingContext2D.prototype.drawImage = function(i,...rest){
  if (i._canvas!==undefined) {
    this._pcrc2.drawImage(i._canvas,...rest);
  } else {
    this._pcrc2.drawImage(i,...rest);
  }
};
CanvasRenderingContext2D.prototype.getImageData = function(){
  return this._pcrc2.getImageData(...arguments);
};
CanvasRenderingContext2D.prototype.measureText = function(){
  return this._pcrc2.measureText(...arguments);
};
CanvasRenderingContext2D.prototype.fillText = function(){
  return this._pcrc2.fillText(...arguments);
};
CanvasRenderingContext2D.prototype.beginPath = function(){
  return this._pcrc2.beginPath(...arguments);
};
CanvasRenderingContext2D.prototype.arc = function(){
  return this._pcrc2.arc(...arguments);
};
CanvasRenderingContext2D.prototype.lineTo = function(){
  return this._pcrc2.lineTo(...arguments);
};
CanvasRenderingContext2D.prototype.closePath = function(){
  return this._pcrc2.closePath(...arguments);
};
CanvasRenderingContext2D.prototype.fill = function(){
  return this._pcrc2.fill(...arguments);
};
CanvasRenderingContext2D.prototype.stroke = function(){
  return this._pcrc2.stroke(...arguments);
};
CanvasRenderingContext2D.prototype.fillRect = function(){
  return this._pcrc2.fillRect(...arguments);
};
CanvasRenderingContext2D.prototype.createLinearGradient = function(){
  return this._pcrc2.createLinearGradient(...arguments);
};
CanvasRenderingContext2D.prototype.moveTo = function(){
  return this._pcrc2.moveTo(...arguments);
};
CanvasRenderingContext2D.prototype.createRadialGradient = function(){
  return this._pcrc2.createRadialGradient(...arguments);
};
CanvasRenderingContext2D.prototype.save = function(){
  return this._pcrc2.save(...arguments);
};
CanvasRenderingContext2D.prototype.scale = function(){
  return this._pcrc2.scale(...arguments);
};
CanvasRenderingContext2D.prototype.restore = function(){
  return this._pcrc2.restore(...arguments);
};
CanvasRenderingContext2D.prototype.translate = function(){
  return this._pcrc2.translate(...arguments);
};
CanvasRenderingContext2D.prototype.rect = function(){
  return this._pcrc2.rect(...arguments);
};
CanvasRenderingContext2D.prototype.clip = function(){
  return this._pcrc2.clip(...arguments);
};
CanvasRenderingContext2D.prototype.bezierCurveTo = function(){
  return this._pcrc2.bezierCurveTo(...arguments);
};
Object.defineProperty(CanvasRenderingContext2D.prototype, "fillStyle", {
  get: function(){return this._pcrc2.fillStyle;},
  set: function(val){this._pcrc2.fillStyle=val;}
});
CanvasRenderingContext2D.prototype.clearRect = function(){
  return this._pcrc2.clearRect(...arguments);
};
Object.defineProperty(CanvasRenderingContext2D.prototype, "globalAlpha", {
  get: function(){return this._pcrc2.globalAlpha;},
  set: function(val){this._pcrc2.globalAlpha=val;}
});
CanvasRenderingContext2D.prototype.rotate = function(){
  return this._pcrc2.rotate(...arguments);
};
CanvasRenderingContext2D.prototype.quadraticCurveTo = function(){
  return this._pcrc2.quadraticCurveTo(...arguments);
};
CanvasRenderingContext2D.prototype.arcTo = function(){
  return this._pcrc2.arcTo(...arguments);
};

XMLHttpRequest = xmlhr;
Image = _Image;

sessionStorage = function(){};
localStorage = new LocalStorage("./localStorage");

document = function(){};
document.createElement = function(t){
  if(t==="canvas"){return new HTMLCanvasElement();}
  return new Element();
};
document.createElementNS = function(a,t){
  return this.createElement(t);
};
document.getElementById = function(){return null;};
document.body = function(){};
document.body.appendChild = function(){};
document.body.addEventListener = Element.prototype.addEventListener;
document.documentElement = new Element();
document.head = function(){};
document.head.querySelector = function(){return null;}
document.addEventListener = Element.prototype.addEventListener;

location = function(){};
location.hash = "";

window = function(){};
window.document = document;
window.addEventListener = Element.prototype.addEventListener;
window.location = location;
Object.defineProperty(window, "innerWidth", {
  get: function(){return win.width;},
  //set: function(val){this._canvas.width=val;}
});
Object.defineProperty(window, "innerHeight", {
  get: function(){return win.height;},
  //set: function(val){this._canvas.height=val;}
});
window.open = async function(url){console.log(await url);};
window.pageXOffset = 0;
window.pageYOffset = 0;

//////// end §0, start §1 IMPORTING SNAP

const {all} = require("./add_exports.js");

var mo = {};
const ml = ["morphic", "symbols", "widgets", "blocks", "threads", "objects", "scenes", "gui", "paint", "lists", "byob", "tables", "sketch", "video", "maps", "extensions", "xml", "store", "locale", "cloud", "api", "sha512"]; //for snap 9.2.18
//const ml = ["morphic", "widgets", "blocks", "threads", "objects", "gui", "lists", "byob", "xml", "store", "locale", "cloud", "sha512"]; //for snap4.0beta
//change this to the folder where the snap js files are, relative to this file
var sjsfs = "Snap/src/"; //must have slash at the end, unless the files are in the same folder as this file, in which case set this to ""
for (var m in ml) {
  all(sjsfs+ml[m]+".js"); //comment this line out if you want to modify the <name>-e.js files
  mo[m] = require("./"+sjsfs + ml[m] + "-e.js");
  for (var e in mo[m]) {
    globalThis[e] = mo[m][e];
  }
}

saveAs = async function(blob, filename) { //has to be after importing Filesaver.min.js
  await fs.writeFile(filename,Buffer.from(await blob.arrayBuffer()));
}

standardSettings.useVirtualKeyboard = false;

//////// end §1, start §2 INITIALIZING AND RUNNING

//App.FPS = 20;

var winw = 800;
var winh = 600;
var win = new Window(winw,winh);
win.title = "Snap! Build Your Own Blocks";
win.fit = "none";
var world;
win.on("setup", e => {
  world = new WorldMorph(new HTMLCanvasElement(e.target.canvas));
  new IDE_Morph().openIn(world);
});
win.on("frame", e => {//win.close();
  /*console.log(e);
  if (timestamp - lastTime < 1000 / FPS) {
      return;
  }*/
  world.doOneCycle();//win.close();
  /*lastTime = Math.max(
      lastTime + 1000 / FPS,
      timestamp - 1000 / FPS
  );*/
});
win.on("resize", e => {
  //console.log(e);
  e.target.width = e.width;
  e.target.height = e.height;
  //e.target.canvas.width = e.width;
  //e.target.canvas.height = e.height;
  //console.log(e.target.canvas.width,e.target.canvas.left);
  //console.log(e.target.canvas.height, e.target.height, window.innerHeight);
});

//////// end §2
