
difference=0;
rightwristX=0;
leftwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modeloaded);
    posenet.on("pose",gotposes);
}

function modeloaded(){
    console.log("posenet is intialised");
}

function gotposes(results){
    if(results.length>0){
    rightwristX=results[0].pose.rightWrist.x;
    leftwristX=results[0].pose.leftWrist.y;
    difference=floor(leftwristX-rightwristX);
}}

function draw(){
    background("gray");
    document.getElementById("square_side").innerHTML="font size of the text will be: "+difference+"px";
    textSize(difference);
    fill("cyan");
    text("Kushaan",50,400)
}