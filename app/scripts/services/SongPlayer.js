function SongPlayer(fixtures) {
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
	};
	/**
	 * @function play
	 * @desc Checks if a song is playing and plays a new song using currentBuzzObject
	 * @param {Object} song
	 */
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
	(function () {
		function SongPlayer(fixtures) {
			var SongPlayer = {};
			var currentAlbum = fixtures.getAlbum();
			var getSongIndex = function (song) {
				return currentAlbum.songs.indexOf(song);
			}
			SongPlayer.currentSong = null;
			var currentBuzzObject = null;
			/**
			 * @function setSong
			 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
			 * @param {Object} song
			 * @returns function
			 */
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
			};
			/**
			 * @function play
			 * @desc Checks if a song is playing and plays a new song using currentBuzzObject
			 * @param {Object} song
			 */
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
			/**
			 * @function pause
			 * @desc Checks if a song is currently playing and pauses it
			 * @param {Object} song
			 */
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
				currentSongIndex--;
				if (currentSongIndex < 0) {
					SongPlayer.stop();
				} else {
					var song = currentAlbum.songs[currentSongIndex];
					setSong(song);
					SongPlayer.play(song);
				}
			};
			SongPlayer.next = function () {
				var currentSongIndex = getSongIndex(SongPlayer.currentSong);
				currentSongIndex++;
				if (currentSongIndex > currentAlbum.songs.length - 1) {
					SongPlayer.stop();
				} else {
					var song = currentAlbum.songs[currentSongIndex];
					setSong(song);
					SongPlayer.play(song);
				}
			};
			return SongPlayer;
		}

		<< << << < HEAD
		angular
			.module('blocJams')
			.factory('SongPlayer', SongPlayer);
	})();


	SongPlayer.pause = function (song) {
		song.playing = false;
		(function () {
			function SongPlayer(fixtures) {
				var SongPlayer = {};
				var currentAlbum = fixtures.getAlbum();
				var getSongIndex = function (song) {
					return currentAlbum.songs.indexOf(song);
				}
				SongPlayer.currentSong = null;
				var currentBuzzObject = null;
				/**
				 * @function setSong
				 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
				 * @param {Object} song
				 * @returns function
				 */
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
				};
				/**
				 * @function play
				 * @desc Checks if a song is playing and plays a new song using currentBuzzObject
				 * @param {Object} song
				 */
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
				/**
				 * @function pause
				 * @desc Checks if a song is currently playing and pauses it
				 * @param {Object} song
				 */
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
					currentSongIndex--;
					if (currentSongIndex < 0) {
						SongPlayer.stop();
					} else {
						var song = currentAlbum.songs[currentSongIndex];
						setSong(song);
						SongPlayer.play(song);
					}
				};
				SongPlayer.next = function () {
					var currentSongIndex = getSongIndex(SongPlayer.currentSong);
					currentSongIndex++;
					if (currentSongIndex > currentAlbum.songs.length - 1) {
						SongPlayer.stop();
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


		currentBuzzObject.pause();
	}
	return SongPlayer;
}
angular
	.module('blocJams')
	.factory('SongPlayer', SongPlayer);
})();