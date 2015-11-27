
function MovieListCtrl(movieService) {
  /*TODO #3: Load all of the movies from the movieService*/
  this.movieService = movieService;
  this.movieData = this.movieService.getMovies();
  this.sortOptions = [
    {label: 'Title', sortField: 'Title', reverse: false},
    {label: 'Rating', sortField: "imdbRating", reverse: true}
  ]
  this.selectedOption = this.sortOptions[0];

  this.curPage = 0;
  this.moviesPerPage = 4;
}

MovieListCtrl.prototype.next = function() {
  this.curPage = (this.curPage + 1);
}

MovieListCtrl.prototype.previous = function() {
  this.curPage = this.curPage - 1;
}

app.controller('MovieListCtrl', MovieListCtrl);
