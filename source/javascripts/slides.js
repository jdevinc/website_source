
function Slides () {}

Slides.prototype.start = function () {

	$.getRSS("http://www.rssmix.com/u/3835380/rss.xml", function(data) {
		var xml = $.parseXML(data.responseText);
		xml = $(xml);
		var html = "";
		xml.find("item").each(function(index, item) {
			var $item = $(item);
			var description = $item.find("description").text();
			var match = regex.exec(description);
			var data = {
				date: $item.find("pubDate").text().substring(0, 16),
				url: $item.find("link").text(),
				title: $item.find("title").text(),
				img: match[1]
			};	
			html += tmpl("slide_tmpl", data);
		});
		$("#slides").html(html);
		$("body").addClass("slides");
	});

};