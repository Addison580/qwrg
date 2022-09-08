song = " ";
song1 = " ";

function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    
    video=createCapture(VIDEO);
        video.hide();
    
    }

    function draw(){
    image(video, 0, 0, 600, 500);
    }

function preload(){
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
}

function play(){
    song.play();
}
