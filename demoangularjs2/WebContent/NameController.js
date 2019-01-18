/**
 * 
 */
app.controller('NameController',function($scope){
$scope.firstname="John"
$scope.lastname="Smith"
alert($scope.firstname + " " +$scope.lastname)
	$scope.UpdatedNames=function(){
	alert($scope.firstname + " " + $scope.lastname)
    $scope.firstname=""
    	$scope.lastname=""
}
})