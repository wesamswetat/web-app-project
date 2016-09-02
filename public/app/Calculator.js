/**
 * Created by Wesam on 8/22/2016.
 */

var calculatoree = angular.module('Calculator',[]);

calculatoree.controller('calc' , ['$scope' , function ($scope) {

    $scope.calc = function (toCalc) {
        console.log(toCalc)
    };

}]);