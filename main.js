noseX=0;
noseY=0;
rightWrist=0;
leftWrist=0;
diff_rw_lw=0;
function preload(){
}
function setup(){
canvas=createCanvas(400,400);
canvas.position(800,300);
webcam=createCapture(VIDEO);
webcam.size(400,400);
webcam.position(200,300);
model1=ml5.poseNet(webcam, modelloaded);
model1.on('pose',gotResults);
}
function draw(){
background ("white");
stroke (31, 189, 181);
fill (31, 189, 181);
textSize(diff_rw_lw)
text('meena',noseX,noseY,diff_rw_lw);
}
function modelloaded(){
    console.log("posenet has been loaded!!!! :D");
}
function gotResults(results){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
rightWrist=results[0].pose.rightWrist.x;
leftWrist=results[0].pose.leftWrist.x;
diff_rw_lw=floor(leftWrist-rightWrist);
}