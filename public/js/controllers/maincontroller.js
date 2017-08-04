var app = angular.module('myApp', []);

app.controller("MainController", ['$scope','$http', function($scope, $http){

	var refresh = function(){
	$http.get('/mythings').then(function(success){
		console.log("refresh successful");
		$scope.mythings = success.data;
		$scope.mything = {};
	}, function(error){
		console.log("Refresh failed: "+error);	
	});

	}

	refresh();

	$scope.addItem = function(){
		console.log($scope.mythings);
		$http.post('/mythings', $scope.mything).then(function(success){
		console.log(success.data);
		console.log("successful deletion");
		refresh();
		},function(error){
			console.log("Add failed: "+error);
		});
	}

	$scope.removeItem = function(id){
  	$http.delete('/mythings/'+id).then(function (success){
  		console.log("successful deletion");
	    refresh();
	    },function (error){
	    	console.log("Remove failed: "+error);
	 	 });
 	}

 	$scope.editItem = function(id){
   	 $http.get('/mythings/'+id).then(function (success){
     $scope.mything = success.data;
     console.log("successful edit");

       },function (error){
      	 console.log("Edit failed: "+error);

    	});
 	}

  	$scope.updateItem = function(){
  		console.log($scope.mything._id);
   	  $http.put('/mythings/'+ $scope.mything._id, $scope.mything).then(function (success){
      	console.log(success.data);
      	console.log("successful update");
      	refresh();
       },function (error){
       		console.log("Update failed: "+error);
      });
  	}

  	$scope.clear = function(){
    $scope.mything = {};
  	}


//After you click a button, the view scrolls up
  	$scope.topScroll = function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
	}


}]);
