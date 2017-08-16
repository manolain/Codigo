var FPS = 15;
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

window.addEventListener("mousedown", checkMouseDown, true);
window.addEventListener("mousemove", checkMouseDown, true);

var myGrid = new Grid(5, 5);

setInterval(function() {
	update();
	draw();
}, 1000/FPS);

function update() {
}

function draw() {
	context.fillStyle = "white";
	context.fillRect(0, 0, canvas.width, canvas.height);
	myGrid.get(context);
}

function checkMouseDown(e) {
	//console.log(e);l
}

function randomColor() {
	this.colors = Array('red', 'green', 'blue', 'yellow');
	return this.colors[Math.floor(Math.random()*this.colors.length)]
}

function Grid(w, h) {
	this.w = w || 5;
	this.h = h || 5;
	this.elements=[];

	for(var y = 0; y < h; y++){
    	this.elements[y] = [];    
    	for(var x = 0; x < w; x++){ 
        	this.elements[y][x] = new Box(x*80, y*80, 80, 80, randomColor());
    	}    
	}
}

Grid.prototype.get = function(context) {
	for(var y = 0; y < this.h; y++){
    	for(var x = 0; x < this.w; x++){ 
        	this.elements[y][x].draw(context);
    	}    
	}
};

function Box(x, y, w, h, fill) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.fill = fill || randomColor();
}

Box.prototype.draw = function(context) {
	context.fillStyle = this.fill;
	context.fillRect(this.x+2, this.y+2, this.w-4, this.h-4);
};