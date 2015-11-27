app.controller('MovieListCtrl', MovieListCtrl);

function MovieListCtrl(movieService,$location) {
  /*TODO #3: Load all of the movies from the movieService*/
  this.location = $location;
  console.log(this.location);
  this.movieService = movieService
  this.movies = this.movieService.getMovies();
  this.sortOptions = [
    {label: 'Title', sortField: 'Title', reverse: false},
    {label: 'Rating', sortField: "imdbRating", reverse: true}
  ]
  
  this.curPage = 0;
  this.moviesPerPage = 4;
}

MovieListCtrl.prototype.goToMovie = function(movie){
	this.location.path('details/'+movie.imdbID);
}

MovieListCtrl.prototype.getNumPages = function(){
	return Math.ceil(this.movies.length/this.moviesPerPage);
}