difference = 0;
rightWristX = 0;
leftWristX = 0;



function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;

        console.log('left wrist X = ' + leftWristX + " right writst X = " + rightWristX + " difference = " + difference);
    }
}

function modelLoaded()
{
    console.net('poseNet is initiallized!');
}



function draw()
{
    background('#969A97');
    textSize(difference);
    fill('FFE787');
    text('Set Yourself Free' , 50 , 400);
}