class Player2 {
    constructor(x, y, w, h, ctx) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.ctx = ctx;
      this.img = new Image();
      this.speedX = 0;
      this.speedY = 0;
  
      this.img.src = "docs/assets/images/medo-removebg-preview.png";
  }
    
  update() {
    this.ctx = myGameArea.context;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {

      this.x += this.speedX;
      this.y += this.speedY
      if(this.y > 375) this.y = 375
  }
  
    draw() {
      this.ctx.drawImage(this.img, this.x, this.y, 95, 80);
    }

    top() {
      return (this.y +50);
    }
    bottom() {
      return (this.y - 75) + this.h;
    }
    left() {
      return (this.x + 50);
    }
    right() {
      return (this.x -65) + this.w;
    }

    crashWith(obstacle) {
      return !(
        this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right()
      );
    }
}