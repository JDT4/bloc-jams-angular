(function () {
	function SongPlayer($rootScope, fixtures, Metric) {
		var SongPlayer = {};
		var currentAlbum = fixtures.getAlbum();
		var getSongIndex = function (song) {
			return currentAlbum.songs.indexOf(song);
		}
		SongPlayer.currentTime = null;
		SongPlayer.currentVolume = 80;
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
			currentBuzzObject.bind('timeupdate', function () {
				$rootScope.$apply(function () {
					SongPlayer.currentTime = currentBuzzObject.getTime();
				});
			});
			song.currentIndex = getSongIndex(song);
			SongPlayer.currentSong = song;
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
				Metric.trackSongs(song);
			}
		};
		SongPlayer.pause = function (song) {
			song = song || SongPlayer.currentSong;
			song.playing = false;
			currentBuzzObject.pause();
		};
		SongPlayer.stop = function () {
			currentBuzzObject.stop();
			SongPlayer.currentSong.playing = null;
		};
		SongPlayer.previous = function () {
			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			Metric.skipSongs(currentAlbum.songs[currentSongIndex]);
			currentSongIndex--;
			if (currentSongIndex < 0) {
				var indexSong = currentAlbum.songs.length - 1;
				var song = currentAlbum.songs[indexSong];
			} else {
				var song = currentAlbum.songs[currentSongIndex];
			}
			setSong(song);
			SongPlayer.play(song);
			Metric.trackSongs(song);
		};
		SongPlayer.next = function () {
			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			Metric.skipSongs(currentAlbum.songs[currentSongIndex]);
			currentSongIndex++;
			if (currentSongIndex > currentAlbum.songs.length - 1) {
				var song = currentAlbum.songs[0];
			} else {
				var song = currentAlbum.songs[currentSongIndex];
			}
			setSong(song);
			SongPlayer.play(song);
			Metric.trackSongs(song);
		};


		SongPlayer.setVolume = function (volume) {
			if (currentBuzzObject) {
				currentBuzzObject.setVolume(volume);
			}
		}
		SongPlayer.setCurrentTime = function (time) {
			if (currentBuzzObject) {
				currentBuzzObject.setTime(time);
			}
			if (currentBuzzObject.isEnded()) {
				SongPlayer.next();
			}
		};
		return SongPlayer;
	}

	angular
		.module('blocJams')
		.factory('SongPlayer', ['$rootScope', 'fixtures', 'Metric', SongPlayer]);
})();