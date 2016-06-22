(function () {
	function AnalyticsCtrl(Metric) {
		console.log("Hi Analytics loaded the page");
	}

	angular
		.module('blocJams')
		.controller('AnalyticsCtrl', ['Metric', AnalyticsCtrl]);
})();