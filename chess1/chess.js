const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

wQweenImage = new Image();
wQweenImage.src = 'img/wQween.png';

let boardSize = 8;
let tileSize = 50;

class Qween {
    constructor() {
        this.colour = 'white';
        this.position = {
            row: 0,
            column: 0
        }
    }
    canMove(x, y) {
        if (x === this.position.row && y === this.position.column) {
            return false;
        }
        else if (x === this.position.row || y === this.position.column) {
            return true;
        }
    }
    draw() {
        if (this.colour = 'white') {
            wQweenImage.onload = function(){
            ctx.drawImage(wQweenImage, this.row * tileSize, this.column*tileSize);
            }
            console.log('drawn')
        } else {
            bQweenImage.onload = function(){
                ctx.drawImage(bQweenImage, this.row * tileSize, this.column*tileSize);
            }
        }
        
    }
}

function move() {
    draw();
}

function draw() {
    for (let c = 0; c < boardSize; c++) {
        for (let r = 0; r < boardSize; r++) {
            
            if ((r + c) % 2 === 0) {
                ctx.fillStyle = 'green';
            }
            else {
                ctx.fillStyle = 'purple';
            }
            ctx.fillRect(r * tileSize, c * tileSize, tileSize, tileSize);
            
        }

    }
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < pieces.length; i++) {
        pieces[i].draw();
    }
}

let pieces = [];
q = new Qween();
q.position.row = 15;
q.position.column = 15;
pieces.push(q);
draw();

function findMousePos(event) {
    //needed to get mouse position relative to the canvas
    var rect = canvas.getBoundingClientRect();
    //adding mouse position to list of vertices
    console.log(event.clientX - rect.left, event.clientY - rect.top);
  }
  //checking for mouse click event
  canvas.addEventListener("click", findMousePos);