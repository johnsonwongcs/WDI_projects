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
		bodyText = $('td[align="left"]').children().children().children();

	// store links into array
	bodyText.each(function (i, bodyText) {
		// get the href attribute of each link
		var title = $(bodyText).text();
		links.push(title);
		// console.log(title);
	});

	var data = $('td[align="right"]').children();
	fs.writeFile("body2.txt",data);

		// store links into array
	data.each(function (i, data) {
		// get the href attribute of each link
		var Num = $(data).text();
		// links.push(title);
		console.log(Num);
	});
});