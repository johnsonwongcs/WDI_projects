var app = angular.module('carousel', []);

function CarouselCtrl() {
  this.images = [
    'http://imgur.com/9itd49u.png',
    'http://imgur.com/n19BXfZ.png',
    'http://imgur.com/VBwQmzA.png',
    'http://imgur.com/nawDxVv.png'
  ];
  this.activeImageIndex = 0;
}

app.controller("CarouselCtrl", CarouselCtrl);

/*TODO #1: register CarouselCtrl as a controller*/


/*TODO #4: clicking next should show the next image*/
CarouselCtrl.prototype.next = function() {
  this.activeImageIndex = (this.activeImageIndex + 1) % 4;
}

/*TODO #4: clicking previous should show the previous image*/
CarouselCtrl.prototype.previous = function() {
  this.activeImageIndex = (this.activeImageIndex + 3) %  4;
}
