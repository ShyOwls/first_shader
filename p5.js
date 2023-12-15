function draw() {
	const canvas = document.getElementById("canvas");
	//check for support
	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");
		// drawing goes here
		  ctx.fillStyle = "rgb(805, 0, 0)";
          ctx.fillRect(10, 10, 50, 50);

          ctx.fillStyle = "rgba(0, 150, 200, 0.5)";
          ctx.fillRect(30, 30, 50, 50);
	}
		}	
draw();