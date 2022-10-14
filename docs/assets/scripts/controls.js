class Controls {
    constructor(moto) {
      this.moto = moto;
    }

    keyboardEvents() {
        window.addEventListener('keydown', (e) => {
          switch (e.code) {
            case 'ArrowUp':
              if (this.moto.y > 30) {
                this.moto.y -= 10;
              }
              break;
            case 'space':
              if (this.moto.y + this.moto.w < 470) {
                this.moto.y += 10;
              }
              break;
          }
        });
      }
    }
