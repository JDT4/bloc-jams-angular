(function () {
	function AnalyticsCtrl(Metric) {
		this.analytic = Metric.getSongs();
		this.lineData = {
			labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
			datasets: [
				{
					data: [300, 50, 100],
					backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
					hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]

		};

		var ctx = document.getElementById("popular");
		var popular = new Chart(ctx, {
			type: 'doughnut',
			data: {

				labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
				datasets: [
					{
						data: [300, 50, 100],
						backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
						hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]

			}
		});

	}

	angular
		.module('blocJams')
		.controller('AnalyticsCtrl', ['Metric', AnalyticsCtrl]);
})();