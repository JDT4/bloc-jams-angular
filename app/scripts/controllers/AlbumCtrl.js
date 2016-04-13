(function () {
	function AlbumCtrl(fixtures, SongPlayer) {
		var albumData = fixtures.getAlbum();
		this.name = albumData.name;
		this.artist = albumData.artist;
		this.label = albumData.label;
		this.year = albumData.year;
		this.albumArtUrl = albumData.albumArtUrl;
		this.songs = albumData.songs;
		this.songPlayer = SongPlayer;
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', ['fixtures', 'SongPlayer', AlbumCtrl]);
})();