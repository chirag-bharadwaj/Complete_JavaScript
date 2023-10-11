function startGame() {
    this.lives = 3;
    var that = this;
    this.addLives = () => {
        this.oneUp = setTimeout(() => {
            console.log(++that.lives);
        }, 1000);
    }
}
var mario = new startGame();
mario.addLives();