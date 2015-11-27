app.controller('MovieDetailsCtrl', MovieDetailsCtrl);

function MovieDetailsCtrl(movieService, $routeParams) {
	this.movieId = $routeParams.movieId;
	this.movie = movieService.getMovie(this.movieId);
  /*TODO #4: Load the movie from the movieService using the id form the route params*/
	
}

