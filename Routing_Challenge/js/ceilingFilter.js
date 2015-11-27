function ceilingFilter() {
    return function (num) {
	    return Math.ceil(num);
	};

}
angular.module('coderMdb').filter('ceilingFilter', ceilingFilter);
