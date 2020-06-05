let spiroParent;
let backgroundImage;
let shouldDraw = true;

function setup(){
    createCanvas(windowWidth, windowHeight);
    backgroundImage = createGraphics(width, height);
    backgroundImage.stroke(255);
    backgroundImage.strokeWeight(2);
    const Epsilon = TWO_PI/60/10;
    const Alpha = Math.sqrt(2);
    spiroParent = new Compass(width/2, height/2, height/2, 0, Epsilon);
    let temp = spiroParent;
    for(i = 1; i < 32; i++)
        temp = (temp.child = new Compass(0, 0, temp.r/2,0, Epsilon*i*Alpha));
    background(0);
}

function draw(){
    for(let i = 0; i < 20; i++){
        update();
    }
}

function update(){
    background(0);
    image(backgroundImage, 0, 0);
    spiroParent.move();
    spiroParent.draw();
    spiroParent.rotate();
}
