let ball;
function setup(){
    createCanvas(600,400);
    background('white');
    world.gravity.y=192.6;
}
function draw(){
    background
}

function mousePressed(){
    ball=new Sprite();
    ball.diameter=50; 
    ball.x=mouse.x;
    ball.y=mouse.y;
    ball.collider='dynamic';  
    ball.mass=2;
    // ball.bounciness=0.2;
}