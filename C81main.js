Canvas=document.getElementById("my_canvas");
ctx=Canvas.getContext("2d");
Canvas.addEventListener("click", my_mouseclick);
function my_mouseclick(e){
color=document.getElementById("color").value;
console.log(color);

mouse_X = e.clientX - Canvas.offsetLeft;
mouse_Y = e.clientY - Canvas.offsettop;
circle(mouse_X,mouse_Y);

}

function circle(mouse_X,mouse_Y){
    ctx.beginPath();
     ctx.strokeStyle = color;
   ctx.arc(mouse_X,mouse_Y,40,0,2*Math.PI);
ctx.stroke();
console.log("hide");
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);


}



