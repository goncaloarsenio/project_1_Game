class Controls {
    constructor(moto) {
      this.moto = moto;
    }
    keyboardEvents() {
        window.addEventListener('keydown', (e) => {
          switch (e.code) {
            case 'ArrowUp':
              if (this.moto.y > 100) {
                this.moto.gravity = -0.25;
              }
              break;
            case 'space':
              if (this.moto.y + this.moto.w < 60) {
                this.moto.y += 30;
              }
              break;
          }
        });
        window.addEventListener('keyup', (e) => {
                this.moto.gravity = 0.05
        });
      } 
    }
