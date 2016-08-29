/**
 * Created by Wesam on 8/22/2016.
 */

var calculator = angular.module('Calculator',[]);

calculator.controller('calc' , ['$scope' , function ($scope) {

    $scope.calc = function (toCalc) {
        console.log(toCalc)
    };

}]);