let ball;
function setup(){
    createCanvas(600,400);
    background('white');
    ball=new Sprite();
    ball.collider='dynamic';  
    ball.mass=2;
    ball.gravity=192.6;
    ball.diameter=50; 
}
function draw(){

}

function mousePressed(){
        ball.x=mouse.x;
        ball.y=mouse.y;
}