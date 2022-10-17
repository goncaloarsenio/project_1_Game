class Player {
    constructor(x, y, w, h, ctx) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.ctx = ctx;
      this.img = new Image();
      const img = new Image();
      this.speedX = 0;
      this.speedY = 0;
      this.gravity = 0.05;
      this.gravitySpeed = 0;
       img.addEventListener("load", () => {
        this.img = img;
        this.draw();
      });
      img.src = 'docs/assets/scripts/image2-removebg-preview (2).png';
  }
    
  update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color; qw
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos = function() {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
  }
  
    draw() {
      /* this.img.src = 'docs/assets/images/moto1.png'; */
      console.log('moto makes brrrr')
      ctx.drawImage(this.img, this.x, this.y, 110, 140);
    }



}