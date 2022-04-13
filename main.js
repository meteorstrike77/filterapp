mustx = 0;
musty = 0;
function preload() {
    must = loadImage('https://i.postimg.cc/9MsFBSfs/download-16-removebg-preview.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is Loaded!');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        mustx = results[0].pose.nose.x -20;
        musty = results[0].pose.nose.y -20;
        console.log("Nose X - " + mustx);
        console.log("Nose Y - " + musty);
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(must, mustx, musty, 50, 50);
}
function savefilter() {
    save('filteredimage.png');
}