angular.module('userProfiles')
.controller('profileCtrl', function( $scope , friendService) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
	$scope.getFriends = function () {
		friendService.getFriends().then(function (response) {
			console.log(response.data);
			$scope.currentUser = response.data.currentUser;
			$scope.friends = response.data.friends;
		})
	}
	$scope.getFriends();
});