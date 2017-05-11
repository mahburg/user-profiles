angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
      let userObj = {name: user.name, password: user.password};
      return $http({
        method: "POST",
        url: 'http://localhost:8000/api/login',
        data: userObj
      })
    };

    this.getFriends = function() {
    	
      return $http({
        method: "GET",
        url: 'http://localhost:8000/api/profiles'
      })
    };
  
});