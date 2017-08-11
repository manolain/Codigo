var FPS = 15;
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

window.addEventListener("mousedown", checkMouseDown, true);
window.addEventListener("mousemove", checkMouseDown, true);

var myBox = new Box();

setInterval(function() {
	update();
	draw();
}, 1000/FPS);

function update() {
	//console.log("Updating..." + Math.random())
}

function draw() {
	myBox.draw(context);
}

function checkMouseDown(e) {
	console.log(e);l
}

function Box(x, y, w, h, fill) {
	this.x = x || 50;
	this.y = y || 50;
	this.w = w || 50;
	this.h = h || 50;
	this.fill = fill || "red";
}

Box.prototype.draw = function(context) {
	context.fillStyle = this.fill;
	context.fillRect(this.x, this.y, this.w, this.h);
};