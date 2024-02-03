//creation and sizing of the canvas, select the inner window of the canvas
var canvas = document.querySelector('canvas');
canvas.width= window.innerWidth;
canvas.height=window.innerHeight;
/*console.log(canvas)*/
//end
var c = canvas.getContext('2d');



/* 
for(var i = 0; i < 10; i++){
	//rectangle (x, y, width, height), color values in rgba
	
	
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	//using hsl to mix up colors was easir than rgba
	c.fillStyle = 'hsl('+ 360 * Math.random() + ' , 75%, 50%)';
	c.fillRect(x, y, 100, 100);*/

//line*
/* 
for(var i = 0; i < 10; i++){

	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;

	c.beginPath();
	c.moveTo(500, 500);//x & y cord
	c.lineTo(x, y);
	c.lineTo(x, y);
	c.lineTo(300, 400);
	c.strokeStyle = "#4d5d53";
	c.stroke();
} */

//Arc & Circle 
//X Y R(radius):int startAngle:float, EndAngle:float
/* c.beginPath();
c.arc(350, 350, 30, 0, Math.PI * 2, false);
c.stroke();

c.beginPath();
c.arc(350, 350, 10, 0, Math.PI * 2, false);
c.stroke();

c.beginPath();
c.arc(350, 350, 20, 0, Math.PI * 2, false);
c.stroke(); */

//create multiple shapes by using a for loop

/* for(var i = 0; i < 30; i++) {
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	c.beginPath();
	c.arc(x, y, 40, 0, Math.PI * 2, false);
	c.strokeStyle = "#fa34a3";
	c.stroke();
} */
/* var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
// the velocity of the circle
var dx = (Math.random()) - 0.5 * 10;
var dy = (Math.random()) - 0.5 * 10;
var radius = 30;  */

//this object creates multiple circles 



function Circle(x, y, dx, dy, radius)
{
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;


	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = 'blue';
		c.stroke();
	}
	this.update =  function(){
		if(this.x + this.radius > innerWidth || this.x - this.radius < 0)
		{
			this.dx = -this.dx;
		}
		if(this.y + radius > innerHeight || this.y - radius < 0)
		{
			this.dy = -this.dy;
		}
	
		//adds velocity
		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	}
}

var circle = new Circle(200,200, 3, 3, 30)




// animation of shapes 
function animate(){
	requestAnimationFrame(animate);	
	c.clearRect(0, 0, innerWidth, innerHeight);// clears page on each iteration

	circle.update();
	//keeps the circle on page and adds bouncing appearance 23:07, vid 3


}
animate();