    // $.backstretch([
    //       "http://dl.dropbox.com/u/515046/www/outside.jpg", 
    //       "http://dl.dropbox.com/u/515046/www/garfield-interior.jpg", 
    //       "http://dl.dropbox.com/u/515046/www/cheers.jpg"
    // ], {duration: 3000, fade: 750}); 

$( "#clickme" ).click(function() {
  $( "#book" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
});