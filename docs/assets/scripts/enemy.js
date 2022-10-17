class Obstacle {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 1000;
        this.y = 350;
        this.w = 200
        this.h = 200
        this.img = new Image();
        this.img.src = 'docs/assets/images/spr_reddisplay_0-removebg-preview.png'
    }

    draw(){
 
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

    class Truck extends Obstacle {
        constructor(ctx) {
          super(ctx)
            this.ctx = ctx;
            this.x = 1000;
            this.y = 300;
            this.w = 250
            this.h = 250
            this.img = new Image();
            this.img.src = 'docs/assets/images/monster-truck-removebg-preview.png'
        };


      }

        class Airplane extends Obstacle {
          constructor(ctx) {
            super (ctx)
            this.ctx = ctx;
            this.x = 1000;
            this.y = 150;
            this.w = 200;
            this.h = 100;
            this.img = new Image();
            this.img.src = 'docs/assets/images/airplane-removebg-preview.png'
          };
        }
