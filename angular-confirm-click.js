angular.module('angularConfirmClick', ['ui.bootstrap'])

.directive('confirmClick', ['$modal',
  function ($modal) {
  	return {
  		restrict: 'A',
  		link: function (linkScope, element, attrs) {
  			var confirmMessage = attrs.confirmMessage || "Are you sure?";

  			element.bind('click', function () {
  				var modalInstance = $modal.open({
  					templateUrl: 'confirmClick.html',
  					controller: function ($scope, $modalInstance, confirmMessage) {
  						$scope.confirmMessage = confirmMessage;
  					},
  					resolve: {
  						confirmMessage: function () { return confirmMessage; }
  					}
  				});

				//if user pressed OK, perform action in attribute
  				modalInstance.result.then(function () {
  					linkScope.$eval(attrs.confirmClick);
  				});

  			});
  		}
  	}
  }
])