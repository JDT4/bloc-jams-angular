(function () {
	function AlbumCtrl() {
		var albumData = angular.copy(albumPicasso);
		this.name = albumData.name;
		this.artist = albumData.artist;
		this.label = albumData.label;
		this.year = albumData.year;
		this.albumArtUrl = albumData.albumArtUrl;
		this.songs = albumData.songs;

	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', AlbumCtrl);
})();