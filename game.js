var pjs = new PointJS(640, 480, {
  backgroundColor: '#ffffff'
});

pjs.system.initFullPage(); // развернули игру на полный экран
var game = pjs.game;
var tiles = pjs.tiles;
var key = pjs.keyControl.initControl();





let level = [
  [{ b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 0, player: true }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 2 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 2 }, { b: 1 }, { b: 1 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 0 }, { b: 2 }, { b: 0 }, { b: 0, enemy: true }, { b: 0 }, { b: 1 }],
  [{ b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }],
  [{ b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }, { b: 1 }],
]

let levelGraph = new Array(level.length).fill(0).map(el => new Array(level[0].length).fill(0));
  
  


for (var i = 0; i < level.length; i++) {
  for (var j = 0; j < level[i].length; j++) {
    if (level[i][j].b == 1) {
      levelGraph[i][j] = 0;
    } else if (level[i+1][j].b == 1 || level[i+1][j].b == 2){
      levelGraph[i][j] = 1;
    }
    else {
      levelGraph[i][j] = 0;
    }
  }
}

let masLevelGraph = new Graph(levelGraph);

console.log(masLevelGraph);

let sizeOneBlock = 32;
let playerSpeed = 1;

let player = game.newRectObject({
  x: 0,
  y: 0,
  w: sizeOneBlock,
  h: sizeOneBlock,
  fillColor: "green",
});



player.moving = false;
player.arrow = 'left';
player.falling = false;
player.canTop = false;
player.runTop = false;
player.runDown = false;

deleteBlockMas = [];

let gameStarted = true;


for (var i = 0; i < level.length; i++) {
  for (var j = 0; j < level[i].length; j++) {
    if (level[i][j].player) {
      player.x = j * sizeOneBlock;
      player.y = i * sizeOneBlock;
    }
  }
}

let enemies = [];

for (var i = 0; i < level.length; i++) {
  for (var j = 0; j < level[i].length; j++) {
    if (level[i][j].enemy) {
      enemies.push(
        {
        enemy: game.newRectObject({
          x: j * sizeOneBlock,
          y: i * sizeOneBlock,
          w: sizeOneBlock,
          h: sizeOneBlock,
          fillColor: "red",
        }), nowX: j, nowY: i, canGo: true
      }
      )
    }
  }
}


game.newLoop('myGame', function () {

  //pjs.camera.follow(player, 10);

  for (var i = 0; i < level.length; i++) {
    for (var j = 0; j < level[i].length; j++) {

      if (level[i][j].b == 0) {

        game.newRectObject({
          x: sizeOneBlock * j,
          y: sizeOneBlock * i,
          w: sizeOneBlock,
          h: sizeOneBlock,
          fillColor: "grey",
        }).draw();

      }
      else if (level[i][j].b == 1) {

        game.newRectObject({
          x: sizeOneBlock * j,
          y: sizeOneBlock * i,
          w: sizeOneBlock,
          h: sizeOneBlock,
          fillColor: "black",
        }).draw();

      }

      if (level[i][j].player) {
        // player.x = 100 * j;
        // player.y = 100 * j;
        player.nowX = j;
        player.nowY = i;
      }

      // if (levelGraph[i][j] == 0) { ///////////////////////////////////////////////////
      //   game.newRectObject({
      //     x: sizeOneBlock * j,
      //     y: sizeOneBlock * i,
      //     w: sizeOneBlock,
      //     h: sizeOneBlock,
      //     fillColor: "blue",
      //   }).draw();
      // }

    }
  }

  player.draw();
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].enemy.draw();

    if (enemies[i].canGo) {
      enemies[i].start = masLevelGraph.grid[enemies[i].nowY][enemies[i].nowX];
      enemies[i].end = masLevelGraph.grid[player.nowY][player.nowX];
      enemies[i].result = astar.search(masLevelGraph, enemies[i].start, enemies[i].end);

      enemies[i].enemy.moveTo(pjs.vector.point(enemies[i].result[1].y * sizeOneBlock + enemies[i].enemy.w, enemies[i].result[1].x * sizeOneBlock), 2);
      
      if (Math.abs(enemies[i].enemy.x-(enemies[i].result[1].y * sizeOneBlock+sizeOneBlock)) == 0) {
        enemies[i].result.shift();
      }
      //enemies[i].canGo = false;
    }

    console.log(enemies[i].result[1]);
     
    
    

  }

  //player.moveTime(pjs.vector.point(100, 100), 10);










  if (player.moving && !player.falling) {
    if (player.arrow == 'right' && level[player.nowY][player.nowX + 1].b != 1) {
      player.moveTo(pjs.vector.point(player.nowX * sizeOneBlock + player.w, player.nowY * sizeOneBlock), playerSpeed);
      if (player.x >= player.nowX * sizeOneBlock + player.w) {

        delete level[player.nowY][player.nowX].player;
        level[player.nowY][player.nowX + 1].player = true;
        player.x = player.nowX * sizeOneBlock + player.w;
        player.moving = false;
        player.arrow = 'false';
      }
    }
    else if (player.arrow == 'left' && level[player.nowY][player.nowX - 1].b != 1) {
      player.moveTo(pjs.vector.point(player.nowX * sizeOneBlock - player.w, player.nowY * sizeOneBlock), playerSpeed);
      if (player.x <= player.nowX * sizeOneBlock - player.w) {

        delete level[player.nowY][player.nowX].player;
        level[player.nowY][player.nowX - 1].player = true;
        player.x = player.nowX * sizeOneBlock - player.w;
        player.moving = false;
        player.arrow = 'false';
      }
    }
  }

  if (level[player.nowY + 1][player.nowX].b != 1 && level[player.nowY + 1][player.nowX].b != 2 && !player.canTop) {
    player.falling = true;
    player.arrow = 'false';
    player.moveTo(pjs.vector.point(player.nowX * sizeOneBlock, player.nowY * sizeOneBlock + player.w), playerSpeed);
    if (player.y >= player.nowY * sizeOneBlock + player.w) {
      delete level[player.nowY][player.nowX].player;
      level[player.nowY + 1][player.nowX].player = true;
    }
  }
  else {
    player.falling = false;
  }


  if (level[player.nowY][player.nowX].b == 2 || level[player.nowY + 1][player.nowX].b == 2) {
    player.canTop = true;
    if (player.runTop && level[player.nowY][player.nowX].b == 2) {
      player.runDown = false;
      player.moveTo(pjs.vector.point(player.nowX * sizeOneBlock, player.nowY * sizeOneBlock - player.w), playerSpeed);
      if (player.y <= player.nowY * sizeOneBlock - player.w) {
        delete level[player.nowY][player.nowX].player;
        level[player.nowY - 1][player.nowX].player = true;
        player.runTop = false;
        player.canTop = false;
      }
    }
    else if (player.runDown && level[player.nowY + 1][player.nowX].b != 1) {
      player.runTop = false;
      player.moveTo(pjs.vector.point(player.nowX * sizeOneBlock, player.nowY * sizeOneBlock + player.w), playerSpeed);
      if (player.y >= player.nowY * sizeOneBlock + player.w) {
        delete level[player.nowY][player.nowX].player;
        level[player.nowY + 1][player.nowX].player = true;
        player.runDown = false;
        player.canTop = false;
      }
    }
  }
  else {
    player.canTop = false;
  }




  if (key.isDown("D") && !player.falling) {

    player.moving = true;
    player.arrow = 'right';
    player.runTop = false;
    player.runDown = false;

  } else if (key.isDown("A") && !player.falling) {
    player.moving = true;
    player.arrow = 'left';
    player.runTop = false;
    player.runDown = false;
  }



  if (key.isDown("W") && player.canTop) {
    player.runTop = true;

  } else if (key.isDown("S") && player.canTop) {
    player.runDown = true;
  }

  if (key.isPress("Z")) {
    if (level[player.nowY][player.nowX - 1].b == 0 && level[player.nowY + 1][player.nowX - 1].b == 1) {
      level[player.nowY + 1][player.nowX - 1].b = 0;


      deleteBlockMas.push([player.nowY + 1, player.nowX - 1]);

      let timer = pjs.OOP.newTimer(2000, function () {
        level[deleteBlockMas[0][0]][deleteBlockMas[0][1]].b = 1;
        deleteBlockMas.shift();
      })
      timer.start();

    }
  }
  if (key.isPress("C")) {
    if (level[player.nowY][player.nowX + 1].b == 0 && level[player.nowY + 1][player.nowX + 1].b == 1) {
      level[player.nowY + 1][player.nowX + 1].b = 0;
    }

    deleteBlockMas.push([player.nowY + 1, player.nowX + 1]);

    let timer = pjs.OOP.newTimer(2000, function () {
      level[deleteBlockMas[0][0]][deleteBlockMas[0][1]].b = 1;
      deleteBlockMas.shift();
    })
    timer.start();

  }



  // pjs.brush.drawText({
  //   text: "Управление: клавиши D, A, W, S", 
  //   x: 40,
  //   y: 0,
  //   size: 26,
  //   color: "black",
  //   alpha: 1
  // })

});

game.setLoop('myGame');
if (gameStarted) {
  game.start();
}