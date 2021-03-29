class Food{
    constructor(_size, _x,_y){
        this.size = _size;
        this.x = _x;
        this.y = _y;
        this.score = 3;
    }
    draw(canvas){
        let pen = canvas.getContext("2d");
        pen.beginPath();
        pen.rect(this.x,this.y,this.size,this.size);
        pen.fillStyle = "red";
        pen.fill();
        pen.closePath();
    }
}