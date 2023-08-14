nose_x=0;
nose_y=0;
function take_snapshot(){    
    save('myFilterImage.png');
  }
  function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
  }
  function draw(){
    image(video,0,0,300,300);

image(mustache,nose_x-25, nose_y,50,50);

  }
  function modelLoaded(){
    console.log("modelLoaded");

  }
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("nose x"+nose_x);
    console.log("nose y"+ nose_y);
  
    }
    
    
}
function preload(){
  mustache=loadImage("https://i.postimg.cc/BQ6jkxg4/images-mustache-removebg-preview.png");
}

