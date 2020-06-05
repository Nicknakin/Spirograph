class Compass{
    constructor(x, y, r, angle, freq, child){
        this.r = r;
        this.angle = angle;
        this.freq = freq;
        this.pos = createVector(x, y);
        this.child = child? child: null;
        this.c = color(255);
        this.weight = 2;
    }

    draw(){
        if(shouldDraw){
            push();
            (() => {
                fill(this.c);
                stroke(this.c);
                strokeWeight(this.weight);
                point(this.pos.x, this.pos.y);
                noFill();
                circle(this.pos.x, this.pos.y, this.r);
                if(this.child)
                    line(this.pos.x, this.pos.y, this.child.pos.x, this.child.pos.y);
            })();
            pop();
        }
        if(this.child)
            this.child.draw();
        else
            backgroundImage.point(this.pos.x, this.pos.y);
    }

    rotate(){
        this.angle += this.freq;
        this.angle %= TWO_PI;
        if(this.child)
            this.child.rotate();
    }

    move(moveVec){
        if(moveVec)
            this.pos = moveVec;
        const nextPos = this.pos.copy().add(p5.Vector.fromAngle(this.angle).mult(this.r/2))
        if(this.child)
            this.child.move(nextPos);
    }
}