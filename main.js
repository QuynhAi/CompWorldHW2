// Quynh Ai Nguyen
// Homework 2
// Game of Life

var AM = new AssetManager();


// no inheritance
function Background(game) {
	this.x = 0;
	this.y = 0;
	this.game = game;
  this.ctx = game.ctx;
};

Background.prototype.draw = function () {
	this.ctx.fillStyle = 'black';
	this.ctx.fillRect(this.x, this.y, 800, 600);
};

Background.prototype.update = function () {
};

// GameOfLife class
function GameOfLife(game,width, height) {
	this.width = width;
	this.height = height;
	this.resolution = 10;
	this.cols = this.width / this.resolution;
	this.rows = this.height/ this.resolution;
	
  this.grid = make2DArray(this.cols, this.rows);
  this.grid = patterns(this.grid, this.cols, this.rows);
  console.table(this.grid);
	this.game = game;
  this.ctx = game.ctx;
  this.time = 0;
	
}

function random(grid, cols, rows){
  for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j] = Math.floor(Math.random() * 2);
		}
  }
  return grid;
}
function patterns (grid, cols, rows){
for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // glider gun
        if ((i === 1 && j === 5) ||  (i === 2 && j === 5) ||  (i === 1 && j === 6)
            ||  (i === 2 && j === 6)

            ||  (i === 11 && j === 5) ||  (i === 11 && j === 6)||  (i === 11 && j === 7)
            ||  (i === 12 && j === 4) ||  (i === 12 && j === 8)
            ||  (i === 13 && j === 3) ||  (i === 13 && j === 9)
            ||  (i === 14 && j === 3) ||  (i === 14 && j === 9)
            ||  (i === 15 && j === 6)
            ||  (i === 16 && j === 4) ||  (i === 16 && j === 8)
            ||  (i === 17 && j === 5) ||  (i === 17 && j === 6) ||  (i === 17 && j === 7)
            ||  (i === 18 && j === 6)

            ||  (i === 21 && j === 5) ||  (i === 21 && j === 4) ||  (i === 21 && j === 3)
            ||  (i === 22 && j === 5) ||  (i === 22 && j === 4) ||  (i === 22 && j === 3)
            ||  (i === 23 && j === 2) ||  (i === 23 && j === 6)
            ||  (i === 25 && j === 1) ||  (i === 25 && j === 2)||  (i === 25 && j === 6) ||  (i === 25 && j === 7)

            ||  (i === 35 && j === 3) ||  (i === 35 && j === 4)
            ||  (i === 36 && j === 3) ||  (i === 36 && j === 4) 


            ||(i === 54 && j === 44) || (i === 54 && j === 45) || (i === 54 && j === 46) || (i === 53 && j === 45)

            || (i === 60 && j === 44) || (i === 60 && j === 45) || (i === 60 && j === 46) || (i === 60 && j === 45)

            // unbound
            || (i === 4 && j === 44) || (i === 4 && j === 45) || (i === 4 && j === 46) || (i === 4 && j === 48)
            || (i === 5 && j === 44) 
            || (i === 6 && j === 47) || (i === 6 && j === 48)
            || (i === 7 && j === 45) || (i === 7 && j === 46) || (i === 7 && j === 48)
            || (i === 8 && j === 44) || (i === 8 && j === 46) || (i === 8 && j === 48)

            // block_switch_engine
            ||  (i === 64 && j === 10)
            ||  (i === 65 && j === 8) || (i === 65 && j === 10) || (i === 65 && j === 11) 
            ||  (i === 66 && j === 8) || (i === 66 && j === 10) 
            ||  (i === 67 && j === 8)
            ||  (i === 68 && j === 6)
            ||  (i === 69 && j === 4) ||  (i === 69 && j === 6)

            // spaceship
            || (i === 4 && j === 16) || (i === 4 && j === 17) 
            || (i === 5 && j === 14) || (i === 5 && j === 15) || (i === 5 && j === 17) || (i === 5 && j === 18) 
            || (i === 6 && j === 14) || (i === 6 && j === 15) || (i === 6 && j === 16) || (i === 6 && j === 17)
            || (i === 7 && j === 15) || (i === 7 && j === 16)

            // diehard
            || (i === 34 && j === 40) 
            || (i === 35 && j === 34) || (i === 35 && j === 35) 
            || (i === 36 && j === 35) || (i === 36 && j === 39) || (i === 36 && j === 40) || (i === 36 && j === 41)


            // spaceship
            || (i === 44 && j === 56) || (i === 44 && j === 57) 
            || (i === 45 && j === 54) || (i === 45 && j === 55) || (i === 45 && j === 57) || (i === 45 && j === 58) 
            || (i === 46 && j === 54) || (i === 46 && j === 55) || (i === 46 && j === 56) || (i === 46 && j === 57)
            || (i === 47 && j === 55) || (i === 47 && j === 56)
            //      unbound       
            || (i === 54 && j === 44) || (i === 54 && j === 45) || (i === 54 && j === 46) || (i === 54 && j === 48)
            || (i === 55 && j === 44) 
            || (i === 56 && j === 47) || (i === 56 && j === 48)
            || (i === 57 && j === 45) || (i === 57 && j === 46) || (i === 57 && j === 48)
            || (i === 58 && j === 44) || (i === 58 && j === 46) || (i === 58 && j === 48)

            ) {
          grid[i][j] = 1;

        } else {
            grid[i][j] = 0;
        }
      }
    }

  return grid;
}

GameOfLife.prototype.draw = function () {
	for (let i = 0; i < this.cols; i++) {
		for (let j = 0; j < this.rows; j++) {
			let x = i * this.resolution;
			let y = j * this.resolution;
			if (this.grid[i][j] === 1) {
				this.ctx.fillStyle = 'white';
				this.ctx.fillRect(x,y,this.resolution-1, this.resolution-1);
			}
		}
	}
}



GameOfLife.prototype.update = function () {
  this.time++;
  if (this.time % 10 === 0){
    let next = make2DArray(this.cols, this.rows);
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let state = this.grid[i][j];
        let neighbors = countNeighbors(this.grid, i, j,this.cols, this.rows);
        if (state === 0 && neighbors  === 3) {
          next[i][j] = 1;
          
        } else if ( state === 1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
      }
    }
    this.grid = next;
  }

}

function make2DArray(cols, rows) {
	let arr = new Array(cols);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
		for (let j = 0; j < rows; j++) {
		}
	}
	return arr;
}

function countNeighbors(grid, x, y,cols, rows) {
	let sum = 0;
	for (let i = -1; i <2; i++) {
		for (let j = -1; j < 2; j++) {
			let col = (x + i + cols) % cols;
			let row = (y + j + rows) % rows;
			sum += grid[col][row];		
		}
	}
	sum -= grid[x][y];
	return sum;
}

AM.downloadAll(function () {
	var canvas = document.getElementById("gameWorld");
	var ctx = canvas.getContext("2d");
	
	var gameEngine = new GameEngine();
	gameEngine.init(ctx);
	gameEngine.start();
	
	gameEngine.addEntity(new Background(gameEngine));
	gameEngine.addEntity(new GameOfLife(gameEngine,canvas.width, canvas.height));
	
	console.log("All Done!");
});













