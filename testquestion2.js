let ball;
let floor;
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
    floor=new Sprite(0, 400, 600, 20);
    floor.width=600;
    floor.height=20;
    floor.x=300;
    floor.y=400;
    floor.collider='static';
    }
