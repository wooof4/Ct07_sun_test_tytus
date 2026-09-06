let ball;
function setup(){
    createCanvas(600,400);
    background('white');
    ball=new Sprite();
}
function draw(){
    
}
function mousePressed(){
        ball.x=mouse.x
        ball.y=mouse.y
    }