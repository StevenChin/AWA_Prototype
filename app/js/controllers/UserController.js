'use strict';

awa.controller('UserController',
	function UserController($scope){
	
		$scope.user = {
			firstName: 'Brian',
			lastName: 'McLaughlin',
			role : 'Supervisor',
			location: 'Warehouse 1523'
		}
	}
);