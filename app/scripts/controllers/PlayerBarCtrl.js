 (function () {
 	function PlayerBarCtrl(fixtures, SongPlayer) {
 		this.albumData = fixtures.getAlbum();
 		this.songPlayer = SongPlayer;
 	}

 	angular
 		.module('blocJams')
 		.controller('PlayerBarCtrl', ['fixtures', 'SongPlayer', PlayerBarCtrl]);
 })();