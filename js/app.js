
var Enemy = function (x, y) {   // Enemy class
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    this.speed = randomBugs();
};

function randomBugs() {
    return Math.floor(Math.random() * (420 - 150)) + 150;
}

Enemy.prototype.update = function(dt) {   // Multiply any movement by the dt parameter
    this.x += this.speed * dt;
    if (this.x >= 500) {  // Enemies reappear
        this.x = 0;
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x, y, speed) {    // Player class
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
    for (var i = 0; len = allEnemies.length, i < len; i++) {    // Collision
        if (player.y + 131 >= allEnemies[i].y + 90 &&
            player.x + 25 <= allEnemies[i].x + 88 &&
            player.y + 73 <= allEnemies[i].y + 135 &&
            player.x + 76 >= allEnemies[i].x + 11) {
            var reset = prompt('BOOM!!!!!!! OUCH!!!! You lost :( Want to play again?');   //Reset after collision
            if (reset === "yes") {
                player.x = 202.5;
                player.y = 383;
            }
        }
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(m) {
    if (m === 'left') {         //Player movement
      this.x = this.x - 100;
    }
    if (m === 'right') {
      this.x = this.x + 100;
    }
    if (m === 'up') {
      this.y = this.y - 52;
    }
    if (m === 'down') {
      this.y = this.y + 52;
    }
    if (player.x > 405.5) {   // Player stay on canvas
        player.x = 405.5;
    }
    if (player.x < 1.5) {
        player.x = 1.5;
    }
    if (player.y > 383) {
        player.y = 383;
    }
    if (player.y < 1.5) {
        player.y = 1.5
    }
    if (player.y <= 1.5) {
        var reset = prompt("YOU MADE IT!!!!! Want to play again?");     // Reset after reaching the goal
            if (reset === "yes") {
                player.x = 202.5;
                player.y = 400;
            }
    }


};

var bug1 = new Enemy (10, 230);
var bug2 = new Enemy (10, 143);
var bug3 = new Enemy (10, 60);

var allEnemies = [bug1, bug2, bug3];

var player = new Player(202.5, 400, 50);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
