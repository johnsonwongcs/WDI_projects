var app = angular.module('life', []);

var LifeCtrl = function() {
  var ctrl = this;

  //TODO #9: Create a variable to store the desirect width/height of the grid
  //(e.g. ctrl.size = 30;). Then dynamically create an NxN grid where each cell
  //starts out with a 40% of being alive. Assign this dynamically created grid
  //to ctrl.cells instead hard coding it as SAMPLE_CELLS_FIGURE_EIGHT
  ctrl.cells = SAMPLE_CELLS_FIGURE_EIGHT;

  //TODO #8: every 100 miliseconds call getNextGeneration() and replace the
  //current generation of cells with the next generation of cells.
  //Hint: you'll need to use the $interval service to accomplish this.
  //Pro Tip: you can dramatically improve the performance of your ng-repeats by
  //adding "track by $index" to them. Try setting the interval down to 0 ms and
  //notice how much fast it runs when you add "track by $index"
  //http://www.codelord.net/2014/04/15/improving-ng-repeat-performance-with-track-by/
}

//TODO #3: register LifeCtrl with angular as a controller named 'LifeCtrl'

/*
  TODO #8: this function should iterate over all the cells for the current
  generation and build up an array of all the cells for the next generation.
*/
LifeCtrl.prototype.getNextGeneration = function() {

}

//Given a cell's row index and column index and the array of all cells, returns
//the number of neighbouring cells that are alive.
LifeCtrl.prototype.getLivingNeighbourCount = function(row, col, cells) {
  var ctrl = this;

  neighborPositions = [
    {row: row-1, col: col-1},  {row: row-1, col: col}, {row: row-1, col: col+1},
    {row: row, col: col-1},                            {row: row, col: col+1},
    {row: row+1, col: col-1},  {row: row+1, col: col}, {row: row+1, col: col+1}
  ];

  var numLivingNeighbors = 0;

  neighborPositions.forEach(function(pos) {
    if(cells[pos.row] &&
       cells[pos.row][pos.col] &&
       cells[pos.row][pos.col].alive)
      {
        numLivingNeighbors++;
      }
  });

  return numLivingNeighbors;
}

//Given a cell and then number of living neighbors it has returns whether the
//cell is alive in the next generation.
LifeCtrl.prototype.nextGenIsAlive = function(cell, numNeighbors) {
  var isAlive;

  //Living cells
  if (cell.alive) {

    if (numNeighbors < 2) {
      isAlive = false;
    } else if (numNeighbors === 2 || numNeighbors === 3) {
      isAlive = true;
    } else {
      isAlive = false;
    }

  //Dead cells
  }else {
    if (numNeighbors === 3) {
      isAlive = true;
    } else {
      isAlive = false;
    }
  }

  return isAlive;
};

//http://www.conwaylife.com/wiki/Blinker
var SAMPLE_CELLS_BLINKER = [
  [{alive: false},{alive: false},{alive: false}],
  [{alive: true },{alive: true },{alive: true }],
  [{alive: false},{alive: false},{alive: false}]
]

//http://www.conwaylife.com/wiki/Figure_eight
var SAMPLE_CELLS_FIGURE_EIGHT = [
  [{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false}],
  [{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false}],
  [{alive: false},{alive: false},{alive: true },{alive: true },{alive: true },{alive: false},{alive: false},{alive: false},{alive: false},{alive: false}],
  [{alive: false},{alive: false},{alive: true },{alive: true },{alive: true },{alive: false},{alive: false},{alive: false},{alive: false},{alive: false}],
  [{alive: false},{alive: false},{alive: true },{alive: true },{alive: true },{alive: false},{alive: false},{alive: false},{alive: false},{alive: false}],
  [{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: true },{alive: true },{alive: true },{alive: false},{alive: false}],
  [{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: true },{alive: true },{alive: true },{alive: false},{alive: false}],
  [{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: true },{alive: true },{alive: true },{alive: false},{alive: false}],
  [{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false}],
  [{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false},{alive: false}]
]