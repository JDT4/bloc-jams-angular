(function () {
	function CollectionCtrl(fixtures) {
		this.albums = fixtures.getCollection(12);
	}

	angular
		.module('blocJams')
		.controller('CollectionCtrl', ['fixtures', CollectionCtrl]);
})();