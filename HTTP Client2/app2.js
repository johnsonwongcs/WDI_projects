var request = require("request"),
	cheerio = require("cheerio"),
	fs = require("fs"),
	url = "http://www.boxofficemojo.com/movies/alphabetical.htm?letter=A&p=.htm",
	links = [];


request(url, function (error, response, body) {
	if (error) {
		console.log('Could not get page because of error: ' + error);
		return;
	}
	
	// find links on main page
	var $ = cheerio.load(body),
		bodyText = $('.alpha-nav-holder').children().children().children();
		fs.writeFile("body.txt",bodyText);

	// store links into array
	bodyText.each(function (i, bodyText) {
		// get the href attribute of each link
		var title = $(bodyText).attr("href");
		links.push(title);
		console.log(title);
		// console.log(links);
		
		// strip out unnecessary junk
		// url = url.replace("/url?q=", "").split("&")[0];
	});
});