(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Bones_atlas_1", frames: [[0,762,478,351],[0,0,989,760],[480,762,277,272],[759,762,221,196]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bones1Lacrimalcolor = function() {
	this.initialize(img.Bones1Lacrimalcolor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2360,1640);


(lib.Bonesoutline = function() {
	this.initialize(img.Bonesoutline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2360,1640);


(lib.Bones1ethmoid = function() {
	this.initialize(ss["Bones_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bones1Frontal1 = function() {
	this.initialize(ss["Bones_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bones1Mandiblecolor = function() {
	this.initialize(img.Bones1Mandiblecolor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2360,1640);


(lib.Bones1Maxillacolor = function() {
	this.initialize(img.Bones1Maxillacolor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2360,1640);


(lib.Bones1nasalcolor = function() {
	this.initialize(ss["Bones_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bones1Parietalcolor = function() {
	this.initialize(img.Bones1Parietalcolor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2360,1640);


(lib.Bones1Sphenoidcolor = function() {
	this.initialize(img.Bones1Sphenoidcolor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2360,1640);


(lib.Bones1temporalcolortransparent = function() {
	this.initialize(img.Bones1temporalcolortransparent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2360,1640);


(lib.Bones1vomercolor = function() {
	this.initialize(ss["Bones_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bones1zygomaticcolor = function() {
	this.initialize(img.Bones1zygomaticcolor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2360,1640);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ZygomaticText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.ZygomaticText = new cjs.Text("Zygomatic", "50px 'Times New Roman'");
	this.ZygomaticText.name = "ZygomaticText";
	this.ZygomaticText.lineHeight = 57;
	this.ZygomaticText.lineWidth = 260;
	this.ZygomaticText.parent = this;
	this.ZygomaticText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.ZygomaticText).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ZygomaticText, new cjs.Rectangle(0,0,264.3,64.4), null);


(lib.ZygomaticButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Zygomatic
	this.instance = new lib.Bones1zygomaticcolor();
	this.instance.setTransform(0,0,0.6328,0.6328);

	this.instance_1 = new lib.Bones1zygomaticcolor();
	this.instance_1.setTransform(0,0,0.6328,0.6328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1493.4,1037.8);


(lib.VomerText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.VomerText = new cjs.Text("Vomer", "50px 'Times New Roman'");
	this.VomerText.name = "VomerText";
	this.VomerText.lineHeight = 57;
	this.VomerText.lineWidth = 169;
	this.VomerText.parent = this;
	this.VomerText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.VomerText).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VomerText, new cjs.Rectangle(0,0,172.5,59.4), null);


(lib.VomerButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vomer
	this.instance = new lib.Bones1vomercolor();
	this.instance.setTransform(1,-8);

	this.instance_1 = new lib.Bones1vomercolor();
	this.instance_1.setTransform(1,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{y:-8}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{y:-3}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8,222,201);


(lib.TemporalText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.TemporalText = new cjs.Text("Temporal", "50px 'Times New Roman'");
	this.TemporalText.name = "TemporalText";
	this.TemporalText.lineHeight = 57;
	this.TemporalText.lineWidth = 223;
	this.TemporalText.parent = this;
	this.TemporalText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.TemporalText).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TemporalText, new cjs.Rectangle(0,0,226.9,68.4), null);


(lib.TemporalButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Temporal
	this.instance = new lib.Bones1temporalcolortransparent();
	this.instance.setTransform(0,0,0.627,0.627);

	this.instance_1 = new lib.Bones1temporalcolortransparent();
	this.instance_1.setTransform(0,0,0.627,0.627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1479.8,1028.3);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Spheniod", "50px 'Times New Roman'");
	this.text.lineHeight = 57;
	this.text.lineWidth = 283;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,287.4,59.4), null);


(lib.ParietalText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.ParietalText = new cjs.Text("Parietal", "50px 'Times New Roman'");
	this.ParietalText.name = "ParietalText";
	this.ParietalText.lineHeight = 57;
	this.ParietalText.lineWidth = 207;
	this.ParietalText.parent = this;
	this.ParietalText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.ParietalText).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ParietalText, new cjs.Rectangle(0,0,211.3,68.5), null);


(lib.ParietalButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Parietal
	this.instance = new lib.Bones1Parietalcolor();
	this.instance.setTransform(0,0,0.6344,0.6344);

	this.instance_1 = new lib.Bones1Parietalcolor();
	this.instance_1.setTransform(0,0,0.6344,0.6344);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1497.2,1040.4);


(lib.NasalText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.NasalText = new cjs.Text("Nasal", "50px 'Times New Roman'");
	this.NasalText.name = "NasalText";
	this.NasalText.lineHeight = 57;
	this.NasalText.lineWidth = 167;
	this.NasalText.parent = this;
	this.NasalText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.NasalText).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NasalText, new cjs.Rectangle(0,0,171,60.8), null);


(lib.NasalButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Nasal
	this.instance = new lib.Bones1nasalcolor();
	this.instance.setTransform(0,0,0.6051,0.6051);

	this.instance_1 = new lib.Bones1nasalcolor();
	this.instance_1.setTransform(0,0,0.6051,0.6051);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167.6,164.6);


(lib.MaxillaText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.MaxillaText = new cjs.Text("Maxilla", "50px 'Times New Roman'");
	this.MaxillaText.name = "MaxillaText";
	this.MaxillaText.lineHeight = 57;
	this.MaxillaText.lineWidth = 195;
	this.MaxillaText.parent = this;
	this.MaxillaText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.MaxillaText).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MaxillaText, new cjs.Rectangle(0,0,199.3,62.6), null);


(lib.MaxillaButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Maxilla
	this.instance = new lib.Bones1Maxillacolor();
	this.instance.setTransform(0,0,0.6259,0.6259);

	this.instance_1 = new lib.Bones1Maxillacolor();
	this.instance_1.setTransform(0,0,0.6259,0.6259);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1477,1026.4);


(lib.MandibleText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.MandibleText = new cjs.Text("Mandible", "50px 'Times New Roman'");
	this.MandibleText.name = "MandibleText";
	this.MandibleText.lineHeight = 57;
	this.MandibleText.lineWidth = 225;
	this.MandibleText.parent = this;
	this.MandibleText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.MandibleText).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MandibleText, new cjs.Rectangle(0,0,229.2,68.5), null);


(lib.MandibleButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mandible
	this.instance = new lib.Bones1Mandiblecolor();
	this.instance.setTransform(0,0,0.6353,0.6353);

	this.instance_1 = new lib.Bones1Mandiblecolor();
	this.instance_1.setTransform(0,0,0.6353,0.6353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:0,y:0}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{x:-2,y:2}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,1501.2,1043.8);


(lib.LacrimalText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.LacrimalText = new cjs.Text("Lacrimal", "50px 'Times New Roman'");
	this.LacrimalText.name = "LacrimalText";
	this.LacrimalText.lineHeight = 57;
	this.LacrimalText.lineWidth = 226;
	this.LacrimalText.parent = this;
	this.LacrimalText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.LacrimalText).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LacrimalText, new cjs.Rectangle(0,0,230.4,66), null);


(lib.LacrimalButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Lacrimal
	this.instance = new lib.Bones1Lacrimalcolor();
	this.instance.setTransform(0,0,0.6062,0.6062);

	this.instance_1 = new lib.Bones1Lacrimalcolor();
	this.instance_1.setTransform(0,0,0.6062,0.6062);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1430.7,994.2);


(lib.FrontalText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.FrontalText = new cjs.Text("Frontal", "50px 'Times New Roman'");
	this.FrontalText.name = "FrontalText";
	this.FrontalText.lineHeight = 57;
	this.FrontalText.lineWidth = 213;
	this.FrontalText.parent = this;
	this.FrontalText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.FrontalText).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrontalText, new cjs.Rectangle(0,0,217.1,69.2), null);


(lib.FrontalButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Frontal
	this.instance = new lib.Bones1Frontal1();
	this.instance.setTransform(0,0,0.6304,0.6304);

	this.instance_1 = new lib.Bones1Frontal1();
	this.instance_1.setTransform(0,0,0.6304,0.6304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,623.5,479.1);


(lib.EthmoidText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.EthmoidText = new cjs.Text("Ethmoid", "50px 'Times New Roman'");
	this.EthmoidText.name = "EthmoidText";
	this.EthmoidText.lineHeight = 57;
	this.EthmoidText.lineWidth = 213;
	this.EthmoidText.parent = this;
	this.EthmoidText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.EthmoidText).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EthmoidText, new cjs.Rectangle(0,0,217.3,65.7), null);


(lib.EthmoidButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ethmoid
	this.instance = new lib.Bones1ethmoid();
	this.instance.setTransform(0,0,0.6245,0.6245);

	this.instance_1 = new lib.Bones1ethmoid();
	this.instance_1.setTransform(0,0,0.6245,0.6245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,298.5,219.2);


(lib.ColoredSpheniodButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bones1Sphenoidcolor();
	this.instance.setTransform(0,-3,0.6304,0.6304);

	this.instance_1 = new lib.Bones1Sphenoidcolor();
	this.instance_1.setTransform(0,0,0.6304,0.6304);

	this.instance_2 = new lib.Bones1Sphenoidcolor();
	this.instance_2.setTransform(0,0,0.6304,0.6304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{y:0}},{t:this.instance,p:{x:0,y:-3}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-3}},{t:this.instance,p:{x:2,y:-6}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,1489.8,1039.9);


// stage content:
(lib.Bones = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.VomerButton.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.VomerText.visible = true;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.SpheniodButton.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.SphenoidText.visible = true;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.FrontalButton.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.FrontalText.visible = true;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.ZygomaticButton.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.ZygomaticText.visible = true;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.EthmoidButton.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.EthmoidText.visible = true;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.MaxillaButton.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.MaxillaText.visible = true;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.MandibleButton.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.MandibleText.visible = true;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.NasalButton.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.NasalText.visible = true;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.LacrimalButton.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.LacrimalText.visible = true;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.ParietalButton.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.ParietalText.visible = true;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.TemporalButton.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.TemporalText.visible = true;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// VomerButton
	this.VomerButton = new lib.VomerButton();
	this.VomerButton.name = "VomerButton";
	this.VomerButton.setTransform(937.5,643,1,1,0,0,0,110.5,98);
	new cjs.ButtonHelper(this.VomerButton, 0, 1, 2, false, new lib.VomerButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.VomerButton).wait(1));

	// Text_Boxes
	this.MandibleText = new lib.MandibleText();
	this.MandibleText.name = "MandibleText";
	this.MandibleText.setTransform(478.85,940.35,1,1,0,0,0,114.5,34.2);
	this.MandibleText.visible = false;

	this.MaxillaText = new lib.MaxillaText();
	this.MaxillaText.name = "MaxillaText";
	this.MaxillaText.setTransform(383.1,824.7,1,1,0,0,0,99.7,31.2);
	this.MaxillaText.visible = false;

	this.ZygomaticText = new lib.ZygomaticText();
	this.ZygomaticText.name = "ZygomaticText";
	this.ZygomaticText.setTransform(334.1,678.1,1,1,0,0,0,132.1,32.1);
	this.ZygomaticText.visible = false;

	this.TemporalText = new lib.TemporalText();
	this.TemporalText.name = "TemporalText";
	this.TemporalText.setTransform(358.85,414.25,1,1,0,0,0,113.5,34.2);
	this.TemporalText.visible = false;

	this.ParietalText = new lib.ParietalText();
	this.ParietalText.name = "ParietalText";
	this.ParietalText.setTransform(389.1,279.75,1,1,0,0,0,105.7,34.2);
	this.ParietalText.visible = false;

	this.FrontalText = new lib.FrontalText();
	this.FrontalText.name = "FrontalText";
	this.FrontalText.setTransform(508.35,164.45,1,1,0,0,0,108.5,34.6);
	this.FrontalText.visible = false;

	this.VomerText = new lib.VomerText();
	this.VomerText.name = "VomerText";
	this.VomerText.setTransform(1416.6,759.05,1,1,0,0,0,86.2,29.7);
	this.VomerText.visible = false;

	this.NasalText = new lib.NasalText();
	this.NasalText.name = "NasalText";
	this.NasalText.setTransform(1460.65,648.6,1,1,0,0,0,85.5,30.4);
	this.NasalText.visible = false;

	this.EthmoidText = new lib.EthmoidText();
	this.EthmoidText.name = "EthmoidText";
	this.EthmoidText.setTransform(1483.75,531.9,1,1,0,0,0,108.6,32.9);
	this.EthmoidText.visible = false;

	this.LacrimalText = new lib.LacrimalText();
	this.LacrimalText.name = "LacrimalText";
	this.LacrimalText.setTransform(1452.65,413.05,1,1,0,0,0,115.2,33);
	this.LacrimalText.visible = false;

	this.SphenoidText = new lib.Symbol3();
	this.SphenoidText.name = "SphenoidText";
	this.SphenoidText.setTransform(335.7,550.15,1,1,0,0,0,143.7,29.7);
	this.SphenoidText.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SphenoidText},{t:this.LacrimalText},{t:this.EthmoidText},{t:this.NasalText},{t:this.VomerText},{t:this.FrontalText},{t:this.ParietalText},{t:this.TemporalText},{t:this.ZygomaticText},{t:this.MaxillaText},{t:this.MandibleText}]}).wait(1));

	// ColoredSpheniod
	this.SpheniodButton = new lib.ColoredSpheniodButton();
	this.SpheniodButton.name = "SpheniodButton";
	this.SpheniodButton.setTransform(935.9,542,1,1,0,0,0,743.9,517);
	new cjs.ButtonHelper(this.SpheniodButton, 0, 1, 2, false, new lib.ColoredSpheniodButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.SpheniodButton).wait(1));

	// FrontalButton
	this.FrontalButton = new lib.FrontalButton();
	this.FrontalButton.name = "FrontalButton";
	this.FrontalButton.setTransform(925.7,294.6,1,1,0,0,0,311.7,239.6);
	new cjs.ButtonHelper(this.FrontalButton, 0, 1, 2, false, new lib.FrontalButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.FrontalButton).wait(1));

	// ZygomaticButton
	this.ZygomaticButton = new lib.ZygomaticButton();
	this.ZygomaticButton.name = "ZygomaticButton";
	this.ZygomaticButton.setTransform(938.7,540.9,1,1,0,0,0,746.7,518.9);
	new cjs.ButtonHelper(this.ZygomaticButton, 0, 1, 2, false, new lib.ZygomaticButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ZygomaticButton).wait(1));

	// EthmoidButton
	this.EthmoidButton = new lib.EthmoidButton();
	this.EthmoidButton.name = "EthmoidButton";
	this.EthmoidButton.setTransform(952.2,523.6,1,1,0,0,0,149.2,109.6);
	new cjs.ButtonHelper(this.EthmoidButton, 0, 1, 2, false, new lib.EthmoidButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.EthmoidButton).wait(1));

	// MaxillaButton
	this.MaxillaButton = new lib.MaxillaButton();
	this.MaxillaButton.name = "MaxillaButton";
	this.MaxillaButton.setTransform(940.5,541.2,1,1,0,0,0,738.5,513.2);
	new cjs.ButtonHelper(this.MaxillaButton, 0, 1, 2, false, new lib.MaxillaButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.MaxillaButton).wait(1));

	// MandibleButton
	this.MandibleButton = new lib.MandibleButton();
	this.MandibleButton.name = "MandibleButton";
	this.MandibleButton.setTransform(938.6,537.9,1,1,0,0,0,749.6,520.9);
	new cjs.ButtonHelper(this.MandibleButton, 0, 1, 2, false, new lib.MandibleButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.MandibleButton).wait(1));

	// NasalButton
	this.NasalButton = new lib.NasalButton();
	this.NasalButton.name = "NasalButton";
	this.NasalButton.setTransform(927.8,528.3,1,1,0,0,0,83.8,82.3);
	new cjs.ButtonHelper(this.NasalButton, 0, 1, 2, false, new lib.NasalButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.NasalButton).wait(1));

	// LacrimalButton
	this.LacrimalButton = new lib.LacrimalButton();
	this.LacrimalButton.name = "LacrimalButton";
	this.LacrimalButton.setTransform(939.3,538.1,1,1,0,0,0,715.3,497.1);
	new cjs.ButtonHelper(this.LacrimalButton, 0, 1, 2, false, new lib.LacrimalButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.LacrimalButton).wait(1));

	// ParietalButton
	this.ParietalButton = new lib.ParietalButton();
	this.ParietalButton.name = "ParietalButton";
	this.ParietalButton.setTransform(938.6,542.2,1,1,0,0,0,748.6,520.2);
	new cjs.ButtonHelper(this.ParietalButton, 0, 1, 2, false, new lib.ParietalButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ParietalButton).wait(1));

	// TemporalButton
	this.TemporalButton = new lib.TemporalButton();
	this.TemporalButton.name = "TemporalButton";
	this.TemporalButton.setTransform(941.9,546.1,1,1,0,0,0,739.9,514.1);
	new cjs.ButtonHelper(this.TemporalButton, 0, 1, 2, false, new lib.TemporalButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.TemporalButton).wait(1));

	// Bone_Outline
	this.instance = new lib.Bonesoutline();
	this.instance.setTransform(190,20,0.6342,0.6342);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1147,557,541.2,505.4000000000001);
// library properties:
lib.properties = {
	id: 'CED30E7DF24B499B915A909239D388B0',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bones1Lacrimalcolor.png", id:"Bones1Lacrimalcolor"},
		{src:"images/Bonesoutline.jpg", id:"Bonesoutline"},
		{src:"images/Bones1Mandiblecolor.png", id:"Bones1Mandiblecolor"},
		{src:"images/Bones1Maxillacolor.png", id:"Bones1Maxillacolor"},
		{src:"images/Bones1Parietalcolor.png", id:"Bones1Parietalcolor"},
		{src:"images/Bones1Sphenoidcolor.png", id:"Bones1Sphenoidcolor"},
		{src:"images/Bones1temporalcolortransparent.png", id:"Bones1temporalcolortransparent"},
		{src:"images/Bones1zygomaticcolor.png", id:"Bones1zygomaticcolor"},
		{src:"images/Bones_atlas_1.png", id:"Bones_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CED30E7DF24B499B915A909239D388B0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;