function preload(){
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(125, 300);
    video = createCapture(VIDEO);
    video.hide();

    tintcolour="";
}

function draw(){
    image(video, 10, 10, 640, 480);
    tint(tintcolour);
}
function take_snapshot(){
    save("halucinations.jpeg");
}
function poggers(){
    tintcolour=document.getElementById("colour").value;
}