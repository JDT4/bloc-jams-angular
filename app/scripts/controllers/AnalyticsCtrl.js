(function () {
	function AnalyticsCtrl(Metric) {
		this.analytic = Metric.getSongs();

		var ctx = document.getElementById("playskips");
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: [1, 2, 3, ],
				datasets: [{
					label: 'Plays vs Skips',
					data: [{
						x: -10,
						y: 0
            }, {
						x: 0,
						y: 10
            }, {
						x: 10,
						y: 5
            }],
					backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
					borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
					borderWidth: 1
						}]
			},
			options: {}
		});
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