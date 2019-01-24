// var hour_xs = [], hour_ys = [];
// var minute_xs = [], minute_ys = [];
var second_xs = [], second_ys = [];
let img;
function preload() {
    sun = loadImage('sun.png');
    cloud = loadImage('cloud.png');

}
function setup() {
    createCanvas(800, 600);
    frameRate(1);
    angleMode(DEGREES)


    // for (var i = 0; i < 12; i++){
	   //  append(hour_xs, random());
	   //  append(hour_ys, random());
    // }

    // for (var i = 0; i < 12; i++){
	   //  append(minute_xs, random());
	   //  append(minute_ys, random());
    // }

    for (var i = 0; i < 12; i++){
	    append(second_xs, random());
	    append(second_ys, random());
    }
}

function draw() {
    var h = hour();
	var m = minute();
	var s = second();
	let a = color('#4ABDAC');
	let b = color('#FC4A1A');
	let c = color('#F7B733');
	let d = color('#DFDCE3');
	let f = color('#ffff00');
	noStroke();

    //real_width = width - 250
	r1 = random();
	r2 = random();
	
	if ( h > 5 && h < 17){
		background('#4f9bd9');
		image(sun, 130, 135, 100, 100);
		for (var i = 0; i < s / 5 ; i++){
			image(cloud, width * second_xs[i] + random(10) , height * second_ys[i] , 80, 50);
		}
		
		
	}
	else{
		background('#131862');

	    moon();

		for (var i = 0; i < s / 5 ; i++){
			push();
		    translate( width * second_xs[i] , height * second_ys[i]);
		    frameRate(60);
		    rotate(frameCount / 4);
		    fill('#ffff00');
		    star( 0, 0, 5, 10, 5); 
		    pop();
		}


	}



	fill(d);
	circle(400, 300, 200);
	fill(a);
	arc(400, 300, 400, 400, -90 , 6 * s - 90 , PIE);
	fill(d);
	circle(400, 300, 150);
	fill(b);
	arc(400, 300, 300, 300, -90, 6 * m - 90 , PIE);
	fill(d);
	circle(400, 300, 100);
	if (h > 12){
		fill(c);
		arc(400, 300, 200, 200, -90, 30 * ( h - 12 ) - 90 , PIE);
	}
	else{
		fill(c);
		arc(400, 300, 200, 200, -90, 30 *  h  / 12 - 90 , PIE);
	}
	fill(d);
	stroke('#000000');
	strokeWeight(2);
	circle(400, 300, 50);
	if (h > 12){
		textSize(32);
		fill('#000000');
		text('PM', 375, 310);
	}
	else{
		textSize(32);
		fill('#000000');
		text('AM', 375, 310);
	}

	// noStroke();

	// fill(d);
	// button1 = rect(850, 100, 150, 30 , 20);
	// textSize(16);
	// fill('#000000');
	// text('New York Time', 875, 120);

	// fill(d);
	// button2 = rect(850, 200, 150, 30 , 20);
	// textSize(16);
	// fill('#000000');
	// text('Los Angeles Time', 865, 220);
	// mousePressed(button2);

	// fill(d);
	// button3 = rect(850, 300, 150, 30 , 20);
	// textSize(16);
	// fill('#000000');
	// text('London Time', 875, 320);

	// fill(d);
	// button4 = rect(850, 400, 150, 30 , 20);
	// textSize(16);
	// fill('#000000');
	// text('New Delhi Time', 865, 420);

	// fill(d);
	// button5 = rect(850, 500, 150, 30 , 20);
	// textSize(16);
	// fill('#000000');
	// text('Beijing Time', 880, 520);
}

function star(x, y, radius1, radius2, npoints) {
  var angle = 360 / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < 360; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function moon(){
  fill('#ffff00');
  ellipse(150,150, 70, 70);
  fill('#131862');
  ellipse(135,140, 80, 80);
}