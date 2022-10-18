const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
     document.getElementById('start-button').style.display = "none"
    };
  
    function startGame() {
      let game = new Game(ctx);
      game.start();
    }
  };
  