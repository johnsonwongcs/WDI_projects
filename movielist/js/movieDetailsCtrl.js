app.controller('MovieDetailsCtrl', MovieDetailsCtrl);

function MovieDetailsCtrl($routeParams,movieService) {
  /*TODO #4: Load the movie from the movieService using the id form the route params*/
  this.imdbID = $routeParams.movieId;
  this.movie = movieService.getMovie(this.imdbID);
}

