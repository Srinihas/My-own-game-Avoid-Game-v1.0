class Enemy {
    constructor(x, y, width) {
        this.sprite = createSprite(x, y, width, width);
        this.sprite.shapeColor = '#00FFFC';
        this.rad = width;
    }

    play() {
        this.handleKeys();
        if (player.x > windowWidth || player.y > windowHeight || player.y < 0 || player.x < 0) {
            this.handleBorderCollisions();
        }
        this.handleEnemyMovement();

        if (player.isTouching(this.sprite)) {
            lives -= 1;
            player.x = this.sprite.x + 10
        }

        if (lives === 0) {
            gameState = 2;
        }
    }

    handleKeys() {
        if (keyIsDown(UP_ARROW)) {
            player.y -= 10;
        }
        
        if (keyIsDown(DOWN_ARROW)) {
            player.y += 10;
        }
        
        if (keyIsDown(LEFT_ARROW)) {
            player.x -= 10;
        }
    
        if (keyIsDown(RIGHT_ARROW)) {
            player.x += 10;
        }
    }
    
    handleBorderCollisions() {        
        player.y = windowHeight/2;
        player.x = windowWidth/2;
        swal({
            title: 'NO!',
            text: "You can't exit the border!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        });
    }

    handleEnemyMovement() {
        if (frameCount % 900 === 0 || frameCount === 100) {
            this.sprite.x = random(0, windowWidth);
            this.sprite.y = random(0, windowHeight);

            this.ran = Math.round(random(1, 4));

            if (this.ran === 1) {
                this.sprite.velocityX = random(1, 10);
            } else if (this.ran === 2) {
                this.sprite.velocityX = random(-1, -10);
            } else if (this.ran === 3) {
                this.sprite.velocityY = random(1, 10);
            } else if (this.ran === 4) {
                this.sprite.velocityY = random(-1, -10);
            }

        }
        
        if (this.sprite.x > width - this.rad || this.sprite.x < this.rad) {
            this.sprite.velocityX *= -1;
        }

        if (this.sprite.y > height - this.rad || this.sprite.y < this.rad) {
            this.sprite.velocityY *= -1;
        }
    }
}