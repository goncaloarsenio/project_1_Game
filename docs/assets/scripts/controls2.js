class Controls2 {
    constructor(moto) {
      this.moto = moto;
    }
    keyboardEvents() {
        window.addEventListener('keydown', (e) => {
          switch (e.code) {
            case 'ArrowUp':
              if (this.moto.y > 30) {
                this.moto.y -= 15
              } 
              break;
            case 'ArrowDown':
                if (this.moto.y < 400) {
                    this.moto.y += 15
                  } 
                  break;

                  case 'ArrowRight':
                if (this.moto.x < 1000) {
                    this.moto.x += 15
                  } 
                  break;

                  case 'ArrowLeft':
                    if (this.moto.x > 0) {
                        this.moto.x -= 15
                      } 
                      break;

            
          }
        });
        window.addEventListener('keyup', (e) => {
                this.moto.speedY = 0
                this.moto.speedY = 0
        });
      } 
    }