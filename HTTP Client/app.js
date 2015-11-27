var request = require("request"),
	cheerio = require("cheerio"),
	url = "https://www.reddit.com/";

request(url, function (error, response, body) {
	if (error) {
		console.log('Could not get page because of error: ' + error);
		return;
	}
	
	// load the body of the page into Cheerio so we can traverse the DOM
	var $ = cheerio.load(body),
		bodyText = $(".sitetable .title a.title");
		console.log(bodyText);

	bodyText.each(function (i, bodyText) {
		// get the href attribute of each link
		var title = $(bodyText).text();
		console.log(i + ": " + title);
		
		// strip out unnecessary junk
		// url = url.replace("/url?q=", "").split("&")[0];
	});
});