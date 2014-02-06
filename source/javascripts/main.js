
var $window = $(window);
var duration = 200;
var regex = new RegExp('src\\s*=\\s*"(.+?)"');

$.getRSS = function (url, success) {
	$.ajax({
		url: url,
		type: "GET",
		dataType: "xml",
		success: success
	});
};

$(function() {

	function indexRoute () {
		var desktop = new Desktop();
		var mobile = new Mobile();
		enquire
			.register("(max-width: 991px)", {
				match: function() {
					mobile.start();
					desktop.stop();
				}
			})
			.register("(min-width: 992px)", {
				match: function() {
					if (navigator.userAgent.match(/iPad/i)) {
						mobile.start();
						desktop.stop();
					} else {
						mobile.stop();
						desktop.start();					
					}
				}
			});
	}

	function blogRoute () {
		var blog = new Blog();
		blog.start();
	}

	function slidesRoute () {
		var slides = new Slides();
		slides.start();
	}

	var urlRegex = new RegExp(domain + '(\/[a-z]{2})?\/');
	var path = window.location.href.replace(urlRegex, "");

	switch (path) {

		case "":
			indexRoute();
			break;

		case "blog/":
			blogRoute();
			break;

		case "slides/":
			slidesRoute();
			break;

	}

	if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {	
		var easteregg = new EasterEgg();
		easteregg.start();
	}

});