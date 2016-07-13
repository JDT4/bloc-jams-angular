(function () {
	function AnalyticsCtrl(Metric) {
		this.analytic = Metric.getSongs();
		this.setLabels = function (a) {
			var labelArray = [];
			var playsArray = [];
			var skipsArray = [];
			for (var i = 0; i < this.analytic.length; i++) {
				labelArray.push(this.analytic[i].name);
				playsArray.push(this.analytic[i].plays);
				skipsArray.push(this.analytic[i].skips);
			}
			if (a == 2) {
				return labelArray;
			} else if (a == 3) {
				return playsArray;
			} else {
				return skipsArray;
			}
		}
		this.setPoints = function () {
			var newArray = [];
			for (var i = 0; i < this.analytic.length; i++) {
				var newObj = {}
				newObj.y = this.analytic[i].plays;
				newObj.x = this.analytic[i].skips;
				newObj.name = this.analytic[i].name;
				newArray.push(newObj);
			}
			return newArray;
		}
		this.lineData = {
			labels: this.setLabels(1),
			datasets: [{
				borderColor: "#FF6384",
				data: this.setPoints()
        }]
		};
		this.lineOptions = {
				fontColor: "#FF6384",
				scales: {
					xAxes: [{
						beginAtZero: true,
						type: 'linear',
						position: 'bottom',
						showLines: false
            }]
				}
			},

			this.pieData = {
				labels: this.setLabels(2),
				datasets: [
					{
						data: this.setLabels(3),
						backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
								"#FF6384",
                "#36A2EB"
            ],
        }]
			}
	}

	angular
		.module('blocJams')
		.controller('AnalyticsCtrl', ['Metric', AnalyticsCtrl]);
})();