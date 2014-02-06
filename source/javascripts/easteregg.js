
function EasterEgg () {}

EasterEgg.prototype.start = function () {

	$.getRSS("http://devopsreactions.tumblr.com/rss", function(data) {
		var xml = $.parseXML(data.responseText);
		xml = $(xml);
		var items = xml.find("item");
		var random = Math.floor(Math.random() * items.length);
		var item = items.eq(random);
		var title = item.find("title").text();
		var description = item.find("description").text();
		var url = regex.exec(description);
		console.image(url[1]);
		console.log(title);
	});

};