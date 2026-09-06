let ball;
function setup(){
    createCanvas(600,400);
    background('white');
    world.gravity.y=5;
}
function draw(){
    background('white')
    if (mouse.presses()){
    ball=new Sprite();
    ball.diameter=50;
    ball.x=mouse.x;
    ball.y=mouse.y;
    ball.collider='dynamic';  
    ball.mass=1;
    }
    floor=new Sprite();
    floor.width=width;
    floor.height=20;
    floor.x=width/2;
    floor.y=height-20
    floor.collider='static'
    }
