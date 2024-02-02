//creation and sizing of the canvas, select the inner window of the canvas
var canvas = document.querySelector('canvas');
canvas.width= window.innerWidth;
canvas.height=window.innerHeight;
/*console.log(canvas)*/
//end


var c = canvas.getContext('2d');


/* rectangle (x, y, width, height), color values in rgba*/
c.fillStyle= 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 500, 100, 100);

c.fillStyle= 'rgba(255, 255, 0, 0.5)';
c.fillRect(300, 300, 100, 100);

c.fillStyle= 'rgba(255, 0, 255, 0.5)';
c.fillRect(500, 100, 100, 100);

/*line*/
c.beginPath();


c.moveTo(50, 300);//x & y cord
c.lineTo(300, 100);
c.lineTo(400, 100);

c.stroke();