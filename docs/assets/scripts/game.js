class Game {
    constructor(ctx) {
        /* this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d'); */
        this.ctx = ctx
        this.moto = null;
        this.obstacles = [];
        this.intervalId = null;
        this.frames = 0;
        this.width = 1000;
        this.height = 500;
        this.controls = null;
        this.bgimg = new Image();
      this.bgimg.src = "docs/assets/images/city1.jpeg";
    }

     drawBackground() {
        this.ctx.drawImage(this.bgimg, 0, 0, this.width, this.height);
     }

    start() {
        this.moto = new Player(150, 375, 150, 100, this.ctx);
        this.controls = new Controls(this.moto);
        this.controls.keyboardEvents();
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    update = () => {
        this.frames++;
        this.drawBackground();
        this.moto.newPos()
        this.moto.draw();
        this.updateObstacles();
        this.score();
    }

    stop() {
        clearInterval(this.intervalId);
      }

    score() {
        const points = Math.floor(this.frames / 15);
        this.ctx.font = '18px monospace';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Score: ${points}`, 500, 100);
      } 

      updateObstacles() {
        for (let i= 0; i < this.obstacles.length; i++) {
            this.obstacles[i].x -= 4;
            this.obstacles[i].draw();
        }

        if(this.frames % 180 === 0) {
            this.obstacles.push(new Obstacle(this.ctx));
        }

        if(this.frames % 240 === 0) {
            this.obstacles.push(new Truck(this.ctx))

      }
    }
}