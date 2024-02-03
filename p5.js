//creation and sizing of the canvas, select the inner window of the canvas
var canvas = document.querySelector('canvas');
canvas.width= window.innerWidth;
canvas.height=window.innerHeight;
/*console.log(canvas)*/
//end


var c = canvas.getContext('2d');




for(var i = 0; i < 10; i++){
	/* rectangle (x, y, width, height), color values in rgba*/
	
	
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	//using hsl to mix up colors was easir than rgba
	c.fillStyle = 'hsl('+ 360 * Math.random() + ' , 75%, 50%)';
	c.fillRect(x, y, 100, 100);
}

/*line*/
c.beginPath();
c.moveTo(50, 300);//x & y cord
c.lineTo(300, 100);
c.lineTo(400, 100);
c.lineTo(100, 300);
c.strokeStyle = "#fa34a3";
c.stroke();

//Arc & Circle 
//X Y R(radius):int startAngle:float, EndAngle:float
c.beginPath();
c.arc(350, 350, 30, 0, Math.PI * 2, false);
c.stroke();

c.beginPath();
c.arc(350, 350, 10, 0, Math.PI * 2, false);
c.stroke();

c.beginPath();
c.arc(350, 350, 20, 0, Math.PI * 2, false);
c.stroke();

//create multiple shapes by using a for loop

for(var i = 0; i < 30; i++) {
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	c.beginPath();
	c.arc(x, y, 40, 0, Math.PI * 2, false);
	c.stroke();
}
	