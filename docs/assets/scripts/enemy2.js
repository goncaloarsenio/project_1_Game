class Obstacle2 {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 1000;
        this.y = Math.floor(Math.random() * 380 )
        this.w = 90
        this.h = 80
        this.img = new Image();
        this.img.src = 'docs/assets/images/html-removebg-preview.png'
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

    class Truck2 extends Obstacle2 {
        constructor(ctx) {
          super(ctx)
            this.ctx = ctx;
            this.x = 1000;
            this.y = Math.floor(Math.random() * 420 )
            this.w = 140
            this.h = 100
            this.img = new Image();
            this.img.src = 'docs/assets/images/JavaScript-Logo-removebg-preview.png'
        };


      }

        class Airplane2 extends Obstacle2 {
          constructor(ctx) {
            super (ctx)
            this.ctx = ctx;
            this.x = 1000;
            this.y = Math.floor(Math.random() * 370 )
            this.w = 100;
            this.h = 80;
            this.img = new Image();
            this.img.src = 'docs/assets/images/css-removebg-preview.png'
          };
        }
