var canvasWidth = '600';
var canvasHeight = '400';

// p5 lifecycle function
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background('white');
    fill('black');
    noStroke();
}

function mouseDragged() {
        ellipse(mouseX,mouseY,20);
}