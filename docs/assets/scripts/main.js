const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const game1 = document.getElementById('first-game');
const game2 = document.getElementById('second-game');

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
     document.getElementById('start-button').style.display = "none"
     game1.classList.remove('hidden');
     game2.classList.remove('hidden');
    };

    game1.onclick = () => {
      startGame();
    game1.classList.add('hidden');
    game2.classList.add('hidden');
    }

    game2.onclick = () => {
      startGame2();
    game1.classList.add('hidden');
    game2.classList.add('hidden');
    }
    
  
    function startGame() {
      let game = new Game(ctx);
      game.start();
    }

    function startGame2() {
      let secondGame = new SecondGame(ctx);
      secondGame.start();
    }
  };
  