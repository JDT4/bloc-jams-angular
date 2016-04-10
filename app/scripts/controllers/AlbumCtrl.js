(function () {
	function AlbumCtrl(fixtures) {
		var albumData = fixtures.getAlbum()
			//this.albumData = fixtures.getAlbum();
		this.name = albumData.name;
		this.artist = albumData.artist;
		this.label = albumData.label;
		this.year = albumData.year;
		this.albumArtUrl = albumData.albumArtUrl;
		this.songs = albumData.songs;
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', ['fixtures', AlbumCtrl]);
})();