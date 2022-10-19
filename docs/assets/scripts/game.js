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
        this.points= 0;
        this.bgimg = new Image()
        this.bgimg.src = "./docs/assets/images/citygamebg.jpeg";
        this.imgGameOver = new Image();
        this.imgGameOver.src = "./docs/assets/images/game-over.jpeg"
        this.imgGameWin = new Image();
        this.imgGameWin.src = "./docs/assets/images/Screenshot 2022-10-18 at 17.00.21.png"
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
        this.timer();
        this.checkGameOver();
        this.checkWin();
        
    }

       score() {
        this.points = Math.floor(this.frames / 15);
        this.ctx.font = '18px monospace';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Score: ${this.points}`, 1020, 50);
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

    timer(){
      this.ctx.font = "18px silkscreen";
      this.ctx.fillStyle = "white";
      let seconds = Math.floor(45 - (this.frames / 60))
      this.ctx.fillText(`00:${seconds}`, 1020, 80)
      this.count = 45 - (this.frames / 60);

      };

    checkGameOver() {
        const crashed = this.obstacles.some((obstacle) => {
          return this.moto.crashWith(obstacle);
        });
    
        if (crashed || this.moto.top() < 0) {
          this.ctx.drawImage(this.imgGameOver, 0, 0, this.width, this.height);
          this.stop();
        }
      }

      checkWin() {
        if(this.count <= 0) {
        this.ctx.drawImage(this.imgGameWin, 0, 0, this.width, this.height);
        this.stop();
        }

      }
    
      stop() {
        /* this.ctx.clearRect(0,0,this.width, this.height) */
        clearInterval(this.intervalId);
        /* this.ctx.drawImage(this.imgGameOver, 0, 0, this.width, this.height); */
        this.ctx.font = "20px silkscreen"
        this.ctx.fillStyle = "white"
        this.ctx.fillText(`FINAL SCORE: ${this.points}`, 520, 410 )
        document.getElementById('restart-button').style.display = "block"
      
      }

      

}