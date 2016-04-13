 (function () {
 	function SongPlayer() {
 		var SongPlayer = {};
 		var currentSong = null;
 		var currentBuzzObject = null;
 		var setSong = function (song) {
 			if (currentBuzzObject) {
 				currentBuzzObject.stop();
 				currentSong.playing = false;
 			}
 			currentBuzzObject = new buzz.sound(song.audioUrl, {
 				formats: ['mp3'],
 				preload: true
 			});
 			currentSong = song;
 			console.log(currentSong);
 		};

 		SongPlayer.play = function (song) {
 			if (currentSong === song) {
 				if (currentBuzzObject.isPaused()) {
 					currentBuzzObject.play();
 					song.playing = true;
 				}
 			} else if (currentSong !== song) {
 				setSong(song);
 				currentBuzzObject.play();
 				song.playing = true;
 			}
 		};
 		SongPlayer.pause = function (song) {
 			song.playing = false;
 			currentBuzzObject.pause();
 		}
 		return SongPlayer;
 	}

 	angular
 		.module('blocJams')
 		.factory('SongPlayer', SongPlayer);
 })();