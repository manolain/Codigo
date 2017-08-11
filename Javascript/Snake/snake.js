var FPS = 15;
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var px = 200;
var py = 200;
var vx = 1;
var vy = 0;
var ss = 20;
var gs = 20;
var tail = 5;
var snake = [];
var apple = {px: 40, py: 40};
var crash = false;
var contador = 0;

window.addEventListener( "keydown", checkKeyDown, true);

setInterval(function() {
	update();
	draw();
}, 1000/FPS);

function update() {
	if (px == (gs*ss)) {
		px = 0
	} else {
		if (px < 0) {
			px = (gs * ss) - ss
		} else {
			px = px + (gs * vx);
		}
	}

	if (py == (gs*ss)) {
		py = 0
	} else {
		if (py < 0) {
			py = (gs * ss) - ss
		} else {
			py = py + (gs * vy);
		}
	}

	var contacto = false;
	if ((px == apple.px) && (py == apple.py)) {
		contacto = true;
		apple.px = Math.floor(Math.random()*11)*20;
		apple.py = Math.floor(Math.random()*11)*20;
		
	}

	var colision = snake.filter(function ( colision ) {
    	return colision.px == px && colision.py == py;
	})[0];

	if (colision != null) {
		snake = [];
	}

	snake.push({px: px, py, py});
	
	if ((snake.length > tail) && !contacto) {
	 	snake.shift();	
	}

	contador = contador + 1
}

function draw() {
	context.fillStyle="black";
	context.fillRect(0,0,canvas.width,canvas.height); 

	context.fillStyle="red";
	context.fillRect(apple.px,apple.py,ss-2,ss-2);

	context.fillStyle="lime";
	for (var i = snake.length - 1; i >= 0; i--) {
		context.fillRect(snake[i].px,snake[i].py,ss-2,ss-2);
	}
}

function checkKeyDown(e) {
	switch (e.keyCode) {
		case 38:
			//Arriba
			if (vx != 0) {
				vy = -1;
				vx = 0;
			}
			break;
		case 40:
			//Abajo
			if (vx != 0) {
				vy = 1;
				vx = 0;
			}
			break;
		case 37:
			//Izquierda
			if (vy != 0) {
				vy = 0;
				vx = -1;
			}
			break;
		case 39:
			//Derecha
			if (vy != 0) {
				vy = 0;
				vx = 1;
			}
			break;
		default:
	}
}