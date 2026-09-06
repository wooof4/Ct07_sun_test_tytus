let ball;
function setup(){
    createCanvas(600,400);
    background('white');
    world.gravity.y=25;
}
function draw(){
    background('white')
}

function mousePressed(){
    ball=new Sprite();
    ball.diameter=50; 
    ball.x=mouse.x;
    ball.y=mouse.y;
    ball.collider='dynamic';  
    ball.mass=1;
}