var request = require("request"),
	cheerio = require("cheerio"),
	fs = require("fs"),
	eol = require("os").EOL,
	url = "http://www.boxofficemojo.com/movies/alphabetical.htm?letter=NUM&p=.htm",
	links = [];
	sublinks = [];


request(url, function (error, response, body) {
	if (error) {
		console.log('Could not get page because of error: ' + error);
		return;
	}
	
	// find links on main page
	var $ = cheerio.load(body),
		href = $('td[width="21"]').children().children().children();

	// store links into array
	href.each(function (i, href) {
		// get the href attribute of each link
		var link = $(href).attr("href");
		link = link + eol;
		fs.appendFile('links.txt',link);
		links.push(link);
	});
	links = links.slice(0,27);
	console.log(links);
	for (i=1;i<28;i++){
		var url = "http://www.boxofficemojo.com/"+links[i];
		request(url, function (error, response, body) {
			if (error) {
				console.log('Could not get page because of error: ' + error);
				return;
			}
			
			var $ = cheerio.load(body),
				alphaHref = $('.alpha-nav-holder').children().children().children();

			// store links into array
			alphaHref.each(function (j, alphaHref) {
				// get the href attribute of each link
				var link = $(alphaHref).attr("href");
				fs.appendFile('links.txt',link);
				links.push(link);
				console.log(link);
			});
		});
	};
	

});

