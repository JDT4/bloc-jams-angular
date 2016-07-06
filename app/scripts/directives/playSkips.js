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
 				var myChart = new Chart(element, {
 					type: attributes.type,
 					data: scope.data,
 					options: attributes.options,
 				});
 			}
 		};
 	}
 	angular
 		.module('blocJams')
 		.directive('playSkips', [playSkips]);
 })();
