//**************ENEMY***********************************

// Enemies our player must avoid
var Enemy = function (x, y) {
    this.x = x;
    this.y = y;
    //this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.speed = randomBugs();
};

function randomBugs() {
    return Math.floor(Math.random() * (420 - 150)) + 150;
}


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
 this.x += this.speed * dt;
   if (this.x >= 500) {
        this.x = 0;
    }

};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//**************PLAYER***********************************

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};


Player.prototype.update = function(dt) {
for (var i = 0; len = allEnemies.length, i < len; i++) {
    if (player.y + 131 >= allEnemies[i].y + 90 &&
        player.x + 25 <= allEnemies[i].x + 88 &&
        player.y + 73 <= allEnemies[i].y + 135 &&
        player.x + 76 >= allEnemies[i].x + 11) {
        var reset = prompt('BOOM!!!!!!! OUCH!!!! You lost :( Want to play again?');
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
    if (m === 'left') {
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
    if (player.x > 405.5) {
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
        var reset = prompt("YOU MADE IT!!!!! Want to play again?");
            if (reset === "yes") {
                player.x = 202.5;
                player.y = 400;
            }
    }


};

//*************************************************


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var bug1 = new Enemy (10, 230);
var bug2 = new Enemy (10, 143);
var bug3 = new Enemy (10, 60);

var allEnemies = [bug1, bug2, bug3];

var player = new Player(202.5, 400, 50);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
