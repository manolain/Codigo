var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

function Box(x, y, w, h, fill) {
	this.x = x || 80;
	this.y = y || 80;
	this.w = w || 80;
	this.h = h || 80;
	this.fill = fill || "red";
}

Box.prototype.draw = function(context) {
	context.fillStyle = this.fill;
	context.fillRect(this.x, this.y, this.w-2, this.h-2);
};

var jander = new Box();

jander.draw(context);

var miA = [];

for (var i = 0; i <= 4; i++) {
	miA.push(new Box(i*80));	
}

for (var i = miA.length - 1; i >= 0; i--) {
	miA[i].draw(context);
}