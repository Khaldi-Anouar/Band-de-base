/*     créé par khaldi anouar
       https://www.facebook.com/khaldi.anouar      
*/  

var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
var top_o=true;
var top_z=true;
var tmd = true;
var trz = true;
function whit_cvs(){
  ctx.beginPath();
  ctx.fillStyle="#FFF";
  ctx.fillRect(0,0, canvas.width, canvas.height);
  ctx.stroke();
}
function drawCavans(){
 ctx.clearRect(0, 0, canvas.width, canvas.height);
  whit_cvs();
  tsp_=0;
  top_o = true;
  top_z = true;
  tmd = true;
  trz = true;
  ctx.lineWidth=1;
  ctx.strokeStyle="#000";
  ctx.beginPath();
  ctx.moveTo(30,50);
  ctx.lineTo(30,250);
  ctx.stroke();

ctx.lineWidth=0.5;
  ctx.beginPath();
  ctx.setLineDash([3]);
  ctx.moveTo(30,150); //vx1
  ctx.lineTo(580,150);
   ctx.moveTo(30,50); //vx1
  ctx.lineTo(580,50);
  ctx.moveTo(30,100); //vx1
  ctx.lineTo(580,100);
  ctx.moveTo(30,200); //vx1
  ctx.lineTo(580,200);
   ctx.moveTo(30,250); //vx1
  ctx.lineTo(580,250);
  ctx.moveTo(80,50); //vx2
  ctx.lineTo(80,250);
  ctx.moveTo(130,50); //vx1
  ctx.lineTo(130,250);
  ctx.moveTo(180,50); //vx3
  ctx.lineTo(180,250);
  ctx.moveTo(230,50); //vx4
  ctx.lineTo(230,250);
  ctx.moveTo(280,50); //vx5
  ctx.lineTo(280,250);
  ctx.moveTo(330,50); //vx6
  ctx.lineTo(330,250);
  ctx.moveTo(380,50); //vx7
  ctx.lineTo(380,250);
  ctx.moveTo(430,50); //vx8
  ctx.lineTo(430,250);
  ctx.moveTo(480,50); //vx9
  ctx.lineTo(480,250);
  ctx.moveTo(530,50); //vx10
  ctx.lineTo(530,250);
  ctx.stroke();
  ctx.font = "15px consolas";
  ctx.fillStyle="green";
  ctx.fillText("+V",5,70);
  ctx.fillText("-V",5,240);
  ctx.setLineDash([0]);
  ctx.lineWidth=2;
}
$(document).ready(function() {
    $("#sb").keydown(function (e) {
       if ((e.keyCode >= 96 && e.keyCode <= 97) || (e.keyCode >= 48 && e.keyCode <= 49) ||
          ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1) || (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
      e.preventDefault();
    });
});
drawCavans();
function dessiner(){
  drawCavans();
  if($("#sb").val().length<10){
    $("#sb").val($("#sb").val()+"0000000000");
   $("#sb").val($("#sb").val().substring(0,10));
  }
  var suite_bianire = $("#sb").val();
  top = true;
  
  for(i=0;i<10;i++){
    ctx.beginPath();
    ctx.font = "15px consolas";
    ctx.fillText(suite_bianire[i],55+50*i,30);
  }
  if($('#bnr').is(':checked')){
    //Code Binaire
    ctx.beginPath();
    ctx.font = "23px Josefin Sans";
    ctx.fillStyle = "#0e5c70";
    ctx.fillText("Code Binaire",247,285);
    for(i=0;i<10;i++){
      if(i==10){
        draw_binary(suite_bianire[i],i);
        break;
      }
      draw_binary(suite_bianire[i]+
                  suite_bianire[i+1],i)
    }
  }
  else if($('#nrz').is(':checked')){
    //Code NRZ
    ctx.beginPath();
    ctx.font = "23px Josefin Sans";
    ctx.fillStyle = "#0e5c70";
    ctx.fillText("Code NRZ",255,285);
    for(i=0;i<10;i++){
      if(i==9){
        draw_nrz(suite_bianire[i],i);
        break;
      }
      draw_nrz(suite_bianire[i]+
                  suite_bianire[i+1],i)
    }
  }
  else if($('#sbp').is(':checked')){
    //Code Simple Bipolaire
     ctx.beginPath();
    ctx.font = "23px Josefin Sans";
    ctx.fillStyle = "#0e5c70";
    ctx.fillText("Code Bipolaire SIMPLE",195,285);
    for(i=0;i<10;i++){
      if(i==9){
        draw_sbp(suite_bianire[i],i,tsp_);
        break;
      }
      draw_sbp(suite_bianire[i]+
                  suite_bianire[i+1],i,tsp_)
    }
  }
    else if($('#dm').is(':checked')){
    //code DELAY MODE
      ctx.beginPath();
    ctx.font = "23px Josefin Sans";
    ctx.fillStyle = "#0e5c70";
    ctx.fillText("code DELAY MODE",210,285);
    for(i=0;i<10;i++){
      if(i==0){
        draw_dm(suite_bianire[i]+
                suite_bianire[i+1],i,tsp_);
      }
      else if(i==9){
        draw_dm(suite_bianire[i-1]+
                suite_bianire[i],i,tsp_);
      }
      else{
      draw_dm(suite_bianire[i-1]+
               suite_bianire[i],i,tsp_)
        }
    }
  }
  else if($('#man').is(':checked')){
    //Code Manchester
    ctx.beginPath();
    ctx.font = "23px Josefin Sans";
    ctx.fillStyle = "#0e5c70";
    ctx.fillText("Le code Manchester (Biphase-L)",150,285);
    for(i=0;i<10;i++){
      draw_manchester(suite_bianire[i]+
                  suite_bianire[i+1],i)
    }
  }
  else if($('#man_dif').is(':checked')){
    //Code Manchester differentiel
    ctx.beginPath();
    ctx.font = "23px Josefin Sans";
    ctx.fillStyle = "#0e5c70";
    ctx.fillText("Le code Manchester différentiel",150,285);
    for(i=0;i<10;i++){
      draw_man_dif(suite_bianire[i]+
                  suite_bianire[i+1],i)
    }
  }
  else if($('#rz').is(':checked')){
    //code RZ
    ctx.beginPath();
    ctx.font = "23px Josefin Sans";
    ctx.fillStyle = "#0e5c70";
    ctx.fillText("Le code RZ",250,285);
    for(i=0;i<10;i++){
      draw_rz(suite_bianire[i]+
                  suite_bianire[i+1],i)
    }
  }
  else if($('#brz').is(':checked')){
    //code bipolaire RZ

    ctx.beginPath();
    ctx.font = "23px Josefin Sans";
    ctx.fillStyle = "#0e5c70";
    ctx.fillText("Le code bipolaire RZ",200,285);
    for(i=0;i<10;i++){
      draw_brz(suite_bianire[i]+
                  suite_bianire[i+1],i)
    }
  }
}
var tsp_=0;

function draw_binary(x,level){
  if(x[0]=='1')
    if(x[1]=='1'){
      drawHorizontal(level,0)
    }
    else{
      drawHorizontal(level,0);
      drawVertical(level+1,0,1);
    }
  else {
    if(x[1]=='1'){
      drawHorizontal(level,1);
      drawVertical(level+1,0,1);
    }
    else{
      drawHorizontal(level,1);
    }
  }
}
function draw_nrz(x,level){
  
  if(x.length==1)
    if(x[0]=='1')
    {
      drawHorizontal(level,0);
      drawVertical(level+1,0,1);
      return;
    }
  else {
      drawHorizontal(level,2);
      drawVertical(level+1,1,2);
      return;
  }
  if(x[0]=='1')
    if(x[1]=='1'){
      drawHorizontal(level,0)
    }
    else{
      drawHorizontal(level,0);
      drawVertical(level+1,0,2);
    }
  else {
    if(x[1]=='1'){
      drawHorizontal(level,2);
      drawVertical(level+1,0,2);
    }
    else{
      drawHorizontal(level,2);
    }
  }
}
function draw_sbp(x,level,tsp){
  
  if(x.length==1)
    if(x[0]=='1')
    {
     if((tsp%2)==0){
       drawHorizontal(level,0);
       drawVertical(level+1,0,1);
     }
      else{
        drawHorizontal(level,2);
        drawVertical(level+1,1,2);
      }
    }
  else {
      drawHorizontal(level,1);
      return;
  }
  if(x[0]=='1'){
    if((tsp%2)==0)
        drawHorizontal(level,0);
      else
        drawHorizontal(level,2);
    if(x[1]=='1'){
      drawVertical(level+1,0,2);
    }
    else{
      if((tsp%2)==0)
        drawVertical(level+1,0,1);
      else
        drawVertical(level+1,1,2);
    }
    tsp_+=1;
    }
  else {
    drawHorizontal(level,1);
    if(x[1]=='1'){
      if((tsp%2)==0)
        drawVertical(level+1,0,1);
      else
        drawVertical(level+1,1,2);
    }
  }
}
function draw_dm(x,level,tsp){
 // first bit
  if(level == 0)
    if(x[0]=='1'){
      drawMiniHorizontal(0,0);
      drawMiniVertical(1,0,2);
      drawMiniHorizontal(.5,2);
      top_o = true;
    }
    else{
      drawHorizontal(level,2);
      top_z=false;
    }
 //              next bits : 
    //            case one
  else{
    if(x[1]=='1'){
      if(x[0]=='0')
        if(!top_z){
          drawMiniHorizontal(level,2);
          drawMiniVertical(level*2+1,0,2);
          drawMiniHorizontal(level+.5,0);
            top_o = false;
        }
        else{
          drawMiniHorizontal(level,0);
          drawMiniVertical(level*2+1,0,2);
          drawMiniHorizontal(level+.5,2);
          top_o = true;
        }
      else{
        if(top_o){
          drawMiniHorizontal(level,2);
          drawMiniVertical(level*2+1,0,2);
          drawMiniHorizontal(level+.5,0);
          top_o = false;
        }
        else{
          drawMiniHorizontal(level,0);
          drawMiniVertical(level*2+1,0,2);
          drawMiniHorizontal(level+.5,2);
          top_o = true;
        }
      }
    }
    //            case zero
    else if (x[1]=='0'){
        if(x[0]=='0'){
          if(!top_z){
          drawHorizontal(level,0);
          drawVertical(level,0,2);
          top_z=true;
        }
        else{
          drawHorizontal(level,2);
          drawVertical(level,0,2);
          top_z=false;
        }
    }
      else{
        if(top_o){
          drawHorizontal(level,2);
          top_z=false;
        }
        else{
          drawHorizontal(level,0);
          top_z=true;
        }
      }
  }
    /*
    if(level==9){
      if(x[1]=='1'){
        if(!top_o)
          drawVertical(level+1,0,1);
        else
          drawVertical(level+1,1,2);
      }
      if(x[1]=='0'){
        if(top_z)
          drawVertical(level+1,0,1);
        else
          drawVertical(level+1,1,2);
      }
    }*/
}
}
function draw_manchester(x,level){
  if(x[0]==1){
    drawMiniHorizontal(level,2);
    drawMiniVertical(level*2+1,0,2);
    drawMiniHorizontal(level+.5,0);
  }else{
    drawMiniHorizontal(level,0);
    drawMiniVertical(level*2+1,0,2);
    drawMiniHorizontal(level+.5,2);
  }
  if(x[0]==x[1])
    drawVertical(level+1,0,2);
}
function draw_man_dif(x,level){
  if(level==0){
    if(x[0]=='0'){
    drawMiniHorizontal(level,0);
    drawMiniVertical(level*2+1,0,2);
    drawMiniHorizontal(level+.5,2);
      if(x[1]=='0')
        drawVertical(level+1,0,2);
    }
    else{
      drawMiniHorizontal(level,2);
    drawMiniVertical(level*2+1,0,2);
    drawMiniHorizontal(level+.5,0);
      if(x[1]=='0'){
        drawVertical(level+1,0,2);
      }
      tmd = !tmd;
    }
    
  }
  else{
    if(x[0]=='1'){
      if(tmd){
        drawMiniHorizontal(level,2);
        drawMiniVertical(level*2+1,0,2);
        drawMiniHorizontal(level+.5,0);
      }
      else{
        drawMiniHorizontal(level,0);
        drawMiniVertical(level*2+1,0,2);
        drawMiniHorizontal(level+.5,2);
      }
      if(x[1]=='0')
        drawVertical(level+1,0,2);
      tmd = !tmd;
    }
    else{
      if(tmd){
        drawMiniHorizontal(level,0);
        drawMiniVertical(level*2+1,0,2);
        drawMiniHorizontal(level+.5,2);
      }
      else{
        drawMiniHorizontal(level,2);
        drawMiniVertical(level*2+1,0,2);
        drawMiniHorizontal(level+.5,0);
      }
      if(x[1]=='0')
        drawVertical(level+1,0,2);
    }
  }
}
function draw_rz(x,level){
  if(level==0){
  if(x[0]=='1'){
    drawMiniHorizontal(level,0);
    drawMiniVertical(level*2+1,0,1);
    drawMiniHorizontal(level+.5,1);
  }
    else{
    drawMiniHorizontal(level,2);
    drawMiniVertical(level*2+1,1,2);
    drawMiniHorizontal(level+.5,1);
  }
  }
  else{
      if(x[0]=='1'){
    drawMiniVertical(level*2,0,1);
    drawMiniHorizontal(level,0);
    drawMiniVertical(level*2+1,0,1);
    drawMiniHorizontal(level+.5,1);
  }
    else{
    drawMiniVertical(level*2,1,2);
    drawMiniHorizontal(level,2);
    drawMiniVertical(level*2+1,1,2);
    drawMiniHorizontal(level+.5,1);
  }
  }
  
}
function draw_brz(x,level){
  if(level==0){
    if(x[0]=='1'){
    drawMiniHorizontal(level,0);
    drawMiniVertical(level*2+1,0,1);
    drawMiniHorizontal(level+.5,1);
    trz = !trz;
    }
    else{
      drawHorizontal(0,1);
    }
  }
  else{
    if(x[0]=='1'){
      if(trz){
        drawMiniVertical(level*2,0,1);
        drawMiniHorizontal(level,0);
        drawMiniVertical(level*2+1,0,1);
        drawMiniHorizontal(level+.5,1);
      }
      else{
        drawMiniVertical(level*2,1,2);
        drawMiniHorizontal(level,2);
        drawMiniVertical(level*2+1,1,2);
        drawMiniHorizontal(level+.5,1);
      }
      trz = !trz;
    }
    else{
      drawHorizontal(level,1);
    }
  }
}
function drawHorizontal(x,y){
  ctx.strokeStyle="#FF0000";
  ctx.beginPath();
  ctx.moveTo(30+(x*50),50+(y*100));
  ctx.lineTo(80+(x*50),50+(y*100));
  ctx.stroke();
}
function drawVertical(x,y1,y2){
  ctx.strokeStyle="#FF0000";
  ctx.beginPath();
  ctx.moveTo(30+(x*50),50+(y1*100));
  ctx.lineTo(30+(x*50),50+(y2*100));
  ctx.stroke();
}
function drawMiniHorizontal(x,y){
  ctx.strokeStyle="#FF0000";
  ctx.beginPath();
  ctx.moveTo(30+(x*50),50+(y*100));
  ctx.lineTo(55+(x*50),50+(y*100));
  ctx.stroke();
}
function drawMiniVertical(x,y1,y2){
  ctx.strokeStyle="#FF0000";
  ctx.beginPath();
  ctx.moveTo(30+(x*25),50+(y1*100));
  ctx.lineTo(30+(x*25),50+(y2*100));
  ctx.stroke();
}
function downloadCanvas(T) {
  var canvas = document.getElementById("myCanvas");
  var image = canvas.toDataURL("image/jpg");
  T.href = image;
}