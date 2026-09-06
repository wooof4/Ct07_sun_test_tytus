let ball;
function setup(){
    createCanvas(600,400);
    background('white');
    world.y.gravity=192.6;
}
function draw(){
    
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