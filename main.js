function setup(){
    video = createCapture(VIDEO);
    video.size(560,500);

    canvas = createCanvas(600,570);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video , modelLoaded);

    poseNet.on('pose',gotPoses)

}

function modelLoaded(){
    console.log("model is initialized!");
}

function gotPoses(result){
    if(result.length > 0 ){
        console.log(result);
    }
}

