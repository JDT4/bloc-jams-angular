(function () {
	function Metric($filter) {
		var localSongData = JSON.parse(localStorage.getItem('songData'));
		var songPlays = localSongData ? localSongData : [];
		return {
			getSongs: function () {
				return songPlays;
			},
			//Play data
			trackSongs: function (data) {
				if (songPlays[data.currentIndex]) {
					data.plays = songPlays[data.currentIndex].plays;
					data.plays++;
					data.datePlayed = new Date().getTime();
				} else {
					data.plays = 1;
					data.datePlayed = new Date().getTime();
				};
				console.log(data.plays);
				songPlays[data.currentIndex] = data;
				localStorage.setItem('songData', JSON.stringify(songPlays));
			},
			//Skip data
			skipSongs: function (data) {
				if (songPlays[data.currentIndex].skips) {
					data.skips = songPlays[data.currentIndex].skips;
					data.skips++;
				} else {
					data.skips = 1;
				};
				songPlays[data.currentIndex] = data;
				localStorage.setItem('songData', JSON.stringify(songPlays));
			}
		};
	}
	angular
		.module('blocJams')
		.service('Metric', ['$filter', Metric]);
})();