 (function () {
 	function playSkips($document) {
 		return {
 			templateUrl: '/templates/directives/seek_bar.html',
 			restrict: 'E',
 			$scope.graph = {
 				//Data goes here
 			}
 		};
 	}
 	angular
 		.module('blocJams')
 		.directive('playSkips', ['$document', playSkips]);
 })();