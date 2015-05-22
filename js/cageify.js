(function () {
	$.fn.cageify = function(options) {
		var _this = this;
		var settings = $.extend({
			mode: 'calm',
		}, options );

		_init();

		function _init() {
			var imgs = _this.find('img');

			imgs.each(function (i, el) {
				var $el = $(el),
					height = $el.height(),
					width = $el.width(),
					url = _buildUrl(width, height);


				$el.attr('src', url);
			});
		}

		function _buildUrl(width, height) {
			var baseUrl = 'http://www.placecage.com/',
				url = baseUrl;

			switch(settings.mode) {
				case 'gray':
					url += 'g/';
					break;
				case 'crazy':
					url += 'c/';
					break;
				case 'gif':
					url += 'gif/';
					break;
			}

			return url + width + '/' + height;
		}
	}
})();
