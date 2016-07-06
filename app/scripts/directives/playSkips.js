 (function () {
 	function playSkips() {
 		return {
 			template: "<canvas width='300px' height='100%'></canvas>",
 			restrict: 'E',
 			replace: true,
 			scope: {
 				data: "="
 			},
 			link: function (scope, element, attributes) {
 				//console.log(scope);
 				//console.log(element);
 				//console.log(attributes);
 				console.log(JSON.stringify(scope.data));

 				var myChart = new Chart(element, {
 					type: "doughnut",
 					data: scope.data,
 					options: {},
 				});
 			}
 		};
 	}
 	angular
 		.module('blocJams')
 		.directive('playSkips', [playSkips]);
 })();