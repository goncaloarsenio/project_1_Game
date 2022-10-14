class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.moto = null;
        this.obstacles = [];
        this.intervalId = null;
        this.frames = 0;
        this.width = 1000;
        this.height = 500;
        this.background = new Image();
        this.controls = null;
    }

     drawBackground() {
        this.background.src = 'docs/assets/images/road.jpeg';
        this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
    } 

    start() {
        this.moto = new Player(200, 200, 50, 75, this.ctx);
        this.controls = new Controls(this.moto);
        this.controls.keyboardEvents();
        this.intervalId = setInterval(this.update, 1000 / 60);
    }



    update = () => {
        this.frames++;
        this.drawBackground()
        this.moto.draw();
    }

    stop() {
        clearInterval(this.intervalId);
      }

}
