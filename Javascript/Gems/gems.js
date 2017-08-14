var FPS = 15;
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

window.addEventListener("mousedown", checkMouseDown, true);
window.addEventListener("mousemove", checkMouseDown, true);

var es = 80;
var myGrid = new Grid(5, 5);

setInterval(function() {
	update();
	draw();
}, 1000/FPS);

function update() {
	//console.log("Updating..." + Math.random())

}

function draw() {
	console.log(myGrid)
	for (var i = myGrid.length - 1; i >= 0; i--) {
		myGrid[i].Box.draw(context);
	}
}

function checkMouseDown(e) {
	//console.log(e);l
}

function Grid(w, h) {
	this.w = w || 5;
	this.h = h || 5;
	this.elements=[];

	for (var i = 0; i <= w; i++) {
		for (var j = 0; j <= h; j++) {
			this.elements[i, j] = new Box(i*80,j*80,80,80);
		}
	}
}

Grid.prototype.fill = function(w, h) {
	// body...
};

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