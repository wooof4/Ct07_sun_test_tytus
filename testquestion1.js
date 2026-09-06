let ball;
function setup(){
    createCanvas(600,400);
    background('white');
    ball=new Sprite();
}
function draw(){
          ball.collider='dynamic';  
}
function mousePressed(){
        ball.x=mouse.x;
        ball.y=mouse.y;
        ball.diameter=50;

    }