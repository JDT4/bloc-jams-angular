 (function () {
 	function SongPlayer(fixtures) {
 		var SongPlayer = {};
 		var currentAlbum = fixtures.getAlbum();
 		var getSongIndex = function (song) {
 			return currentAlbum.songs.indexOf(song);
 		}
 		SongPlayer.currentSong = null;
 		var currentBuzzObject = null;
 		var setSong = function (song) {
 			if (currentBuzzObject) {
 				currentBuzzObject.stop();
 				SongPlayer.currentSong.playing = false;
 			}
 			currentBuzzObject = new buzz.sound(song.audioUrl, {
 				formats: ['mp3'],
 				preload: true
 			});
 			SongPlayer.currentSong = song;
 			console.log(SongPlayer.currentSong);
 		};

 		SongPlayer.play = function (song) {
 			song = song || SongPlayer.currentSong;
 			if (SongPlayer.currentSong === song) {
 				if (currentBuzzObject.isPaused()) {
 					currentBuzzObject.play();
 					song.playing = true;
 				}
 			} else if (SongPlayer.currentSong !== song) {
 				setSong(song);
 				currentBuzzObject.play();
 				song.playing = true;
 			}
 		};
 		SongPlayer.pause = function (song) {
 			song = song || SongPlayer.currentSong;
 			song.playing = false;
 			currentBuzzObject.pause();
 		};
 		SongPlayer.previous = function () {
 			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
 			currentSongIndex--;
 			if (currentSongIndex < 0) {
 				currentBuzzObject.stop();
 				SongPlayer.currentSong.playing = null;
 			} else {
 				var song = currentAlbum.songs[currentSongIndex];
 				setSong(song);
 				SongPlayer.play(song);
 			}
 		};
 		return SongPlayer;
 	}

 	angular
 		.module('blocJams')
 		.factory('SongPlayer', SongPlayer);
 })();