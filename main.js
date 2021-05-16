mostah_x=0;
mostah_y=0;



function preload()
{
img=loadImage("m.png")
}

function setup()
{
    canvas=createCanvas(300,300);
canvas.center()

video=createCapture(VIDEO);
video.size( 300, 300);
video.hide();

poseNet=ml5.poseNet(video, modelLoded);
poseNet.on("pose",gotPoses)
}

function gotPoses(result)
{
    if(result.length  > 0)
    {
        console.log(result);
        console.log(result[0].pose. nose.x);
        console.log(result[0].pose. nose.y);
        mostah_x=result[0].pose.nose.x;
        mostah_y=result[0].pose.nose.y;
    }
}

function modelLoded()
{
 console.log(" PosNet is loded ")
}

function draw()
{ 
image(video,0 , 0, 300, 300); 
image(img,mostah_x-10,mostah_y-10, 30, 30 );
}

function take_snapshort()
{
    save("old man.png")
}