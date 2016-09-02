function cageify(root = document.getElementsByTagName('body')[0], mode = 'calm') {
	function _buildUrl(mode, width, height) {
		var url = 'http://www.placecage.com/';
		switch(mode) {
			case 'gray': url += 'g/'; break;
			case 'crazy': url += 'c/'; break;
			case 'gif': url += 'gif/'; break;
		}
		return url + width + '/' + height;
	}
	
	imgs = document.getElementsByTagName('img');

	for(var i = 0, len = imgs.length; i < len; ++i) {
		imgs[i].setAttribute('src', _buildUrl(mode, imgs[i].width, imgs[i].height));
	}
};
