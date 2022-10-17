class Obstacle {
    contructor(ctx){
        this.ctx = ctx;
        this.x = 1000;
        this.y = 450;
        this.w = 100
        this.h = 80
        this.img = new Image();
    }

    draw(){
       this.img.src = '/docs/assets/images/spr_reddisplay_0.png' 
       this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  
    top() {
        return this.y;
      }
      bottom() {
        return this.y + this.h;
      }
      left() {
        return this.x;
      }
      right() {
        return this.x + this.w;
      }
    }