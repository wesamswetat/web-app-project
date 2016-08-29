/**
 * Created by Wesam on 8/14/2016.
 */
var testDirective = angular.module("testDirective",[]);

testDirective.controller('testDirective',['$scope' , function ($scope) {
    $scope.windoww = {
        name: "1700",
        company: "klil"
    };
}]);

testDirective.directive('myTest',function () {
    return{
        templateUrl:'directiveHtml/test.html',
        controller:'mainSelcts'
    };
});