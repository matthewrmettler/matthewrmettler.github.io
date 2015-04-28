function draw_circle(context, x, y, radius, fill) {
	context.beginPath();
	context.rect(x, y, radius, radius);
	//context.arc(x, y, radius, 0, 2 * Math.PI, false);
	context.fillStyle = '#E2E3E7';
	if (fill) { context.fill(); }
	context.lineWidth = 1;
	context.strokeStyle = "#484A5C";
	context.stroke();
	context.closePath();
}

function draw_clock(canvas, array) {
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	var x = canvas.width;
	var y = canvas.height / 2;
	var spacing = x / (array.length);
	var radius = 10;
	var offset_x = (spacing / 2)-(radius/2);
	var offset_y = -(radius/2);
	var isOne = false;
	for (var i = 0; i < array.length; i++) {
		if (array[i] == "1") { isOne = true; }
		draw_circle(context, spacing*i + offset_x, y+offset_y, radius, isOne);
		isOne = false;
	}
}

function time_array() {
	var unix_seconds = Math.floor(new Date().getTime()/1000);
	console.log("unix seconds is " + unix_seconds);
	var binary_str = unix_seconds.toString(2);
	return binary_str.split("");
} 

function draw() {
	//console.log("init");
	var canvas = document.getElementById("binary-clock");
	var array = time_array();
	draw_clock(canvas, array);
}


console.log("binary-clock.js opened!");
draw();

window.setInterval(function(){
  draw();
}, 1000);

