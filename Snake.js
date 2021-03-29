class Snake {
    constructor(_size, _x, _y, _speed) {
        this.size = _size;
        this.x = _x;
        this.y = _y;
        this.speed = _speed;
        this.direction = "right";
    }

    move() {
        switch (this.direction) {
            case "up":
                this.y -= this.speed;
                break;
            case "down":
                this.y += this.speed;
                break;
            case "left":
                this.x -= this.speed;
                break;
            case "right":
                this.x += this.speed;
                break;
        }
    }

    draw(canvas) {
        let pen = canvas.getContext("2d");
        pen.beginPath();
        pen.rect(this.x, this.y, this.size, this.size);
        pen.fillStyle = 'black';
        pen.fill();
        pen.closePath();
    }


    checkWall(canvas) {
        if (this.x > canvas.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y > canvas.height) {
            this.y = 0
        } else if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    eat(food) {
        if (this.checkCrash(food)) {
            score +=food.score;
            spawnFood();

        }
    }

    checkCrash(food) {
        if (food.y + food.size < this.y || food.x + food.size < this.x || food.y > this.y + this.size || food.x > this.x + this.size) {
            return false;
        } else {
            return true;
        }
    }

}