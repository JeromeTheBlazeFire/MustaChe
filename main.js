mustache_y=0;
mustache_x=0;


function preload()
{
    BE_Mustache = loadImage("https://i.postimg.cc/sx4TWV8t/MUSTACHE-real.png");
}
function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mustache_x=results[0].pose.nose.x-79;
        mustache_y=results[0].pose.nose.y;
        console.log("mustache x="+ mustache_x);
        console.log("mustache y="+ mustache_y);
    }
}
function modelLoaded()
{
    console.log('PoseNet is Initialized');
}
function draw()
{
    image(video,0 , 0, 500, 500);
    image(BE_Mustache, mustache_x, mustache_y, 160, 70);
}
function take_snapshot()
{
    save("MUSTACHED.png");
}




