// variables


function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(0);

    var x = 0;
    var width = 600
    while(x < width){
        ellipse(x, 200,5,5);
        x = x + 5;
    }
   
}