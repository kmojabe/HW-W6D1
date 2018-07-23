document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("mycanvas");
  canvasEl.width = 500;
  canvasEl.height = 500;
  
  const ctx = canvasEl.getContext('2d');
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 500, 500);
  
  ctx.beginPath();
  ctx.arc(150,50,15,0,2*Math.PI,true);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "orange";
  ctx.fill();

});
