let ball;
function setup(){
    createCanvas(600,400);
    background('white');
    ball=new Sprite();
    ball.collider='dynamic';  
}
function draw(){
         
}
function mousePressed(){
        ball.x=mouse.x;
        ball.y=mouse.y;
        ball.diameter=50;

    }