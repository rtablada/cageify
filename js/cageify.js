(function () {
	$.fn.cageify = function() {
		var imgs = this.find('img');

		imgs.each(function (i, el) {
			debugger;
			var $el = $(el),
				height = $el.height(),
				width = $el.width(),
				url = 'http://www.placecage.com/' + width + '/' + height;


			$el.attr('src', url);
		});
	}
})();
