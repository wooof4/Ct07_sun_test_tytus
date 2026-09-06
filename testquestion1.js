let ball;
function setup(){
    createCanvas(600,400);
    background('white');


}
function draw(){
    
}

function mousePressed(){
        ball=new Sprite();
        ball.x=mouse.x;
        ball.y=mouse.y;
    ball.collider='dynamic';  
    ball.mass=2;
    ball.gravity=192.6;
    ball.diameter=50; 
}