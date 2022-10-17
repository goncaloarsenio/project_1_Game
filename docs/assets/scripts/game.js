class Game {
    constructor(ctx) {
        /* this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d'); */
        this.ctx = ctx
        this.moto = null;
        this.obstacles = [];
        this.intervalId = null;
        this.frames = 0;
        this.width = 1200;
        this.height = 550;
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
        this.checkGameOver();
    }

    score() {
        const points = Math.floor(this.frames / 15);
        this.ctx.font = '18px monospace';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Score: ${points}`, 1020, 50);
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

      if(this.frames % 400 === 0) {
        this.obstacles.push(new Airplane(this.ctx))
      }

    }

    checkGameOver() {
        const crashed = this.obstacles.some((obstacle) => {
          return this.moto.crashWith(obstacle);
        });
    
        if (crashed || moto.top() > 0) {
          this.stop();
        }
      }
    
      stop() {
        clearInterval(this.intervalId);
      }

}