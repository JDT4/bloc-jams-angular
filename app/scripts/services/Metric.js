(function () {
	function Metric($filter) {
		var songPlays = [];

		return {
			getSongs: function () {
				return songPlays;
			},

			//Play data
			trackSongs: function (data) {
				//Date of last play
				data.datePlayed = new Date().getTime();
				//Number of plays
				data.plays = [];
				data.plays.push(1);
				//Push all data
				songPlays.push(data);
			},
			//Skip data
			skipSongs: function (data, time) {
				//Date of skip
				data.dateSkipped = 1; //new Date().getTime();
				//Time of skip
				data.timeSkipped = time;
				console.log(data.timeSkipped);
				//Number of skips
				data.skips = [];
				data.skips.push(1);
				//Push all data
				songPlays.push(data);
				console.log(data.timeSkipped);
			}
		};
	}
	angular
		.module('blocJams')
		.service('Metric', ['$filter', Metric]);
})();