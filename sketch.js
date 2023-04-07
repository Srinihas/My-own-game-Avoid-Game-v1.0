var player, enemy, gameState, lives;

function preload() {
    player = createSprite(windowWidth/2, windowHeight/2, 10, 10);
    player.shapeColor = "Red";

    enemy = new Enemy(windowWidth/2 + 100, windowHeight/2 + 100, 20);

    gameState = 1, lives = 3;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("Black");

    if (gameState !== 2) {
        enemy.play();
    } else if (gameState == 2) {
        swal({
            title: 'You lost!',
            text: 'You lost all your lives!',
            button: 'Aww...'
        });

        player.destroy();
        enemy.sprite.destroy();
    }

    drawSprites();
}

function windowResize() {
    resizeCanvas(windowWidth, windowHeight);
}