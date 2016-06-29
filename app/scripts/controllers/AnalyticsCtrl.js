(function () {
	function AnalyticsCtrl(Metric) {
		this.analytic = Metric.getSongs(); // returns an array

		console.log(this.analytic);
		console.log("Hi Analytics loaded the page");
	}

	angular
		.module('blocJams')
		.controller('AnalyticsCtrl', ['Metric', AnalyticsCtrl]);
})();