/**
 * Created by Wesam on 8/14/2016.
 */

var alomApp = angular.module("alom", ['GlobalDataService' , 'CalculatorService' ,'AddwindowsMain', 'CutByWindowsController', 'ngRoute']);

//##################### $cacheFactory.Cache ################

alomApp.factory('myCache', function ($cacheFactory) {
    return $cacheFactory('myCache');

});

//##################### ROUTE ################

alomApp.config(function ($routeProvider) {
    $routeProvider
        .when('/' + navigationButtons[0], {
            templateUrl: 'views/main.html'
        })
        .when('/' + navigationButtons[1], {
            templateUrl: 'views/cutbywindow.html'
        })
        .otherwise({
            redirectTo: '/' + navigationButtons[0]
        });
});

//##################### Controller for navigation buttons ################
var navigationButtons = ["הוספת חלון", "חיתוך לפי חלון", "חיתוך לפי פרופיל", "הזמנת חומר", "הזמנת זכוכית", "הצעות מחיר עם סרטוטים"];

alomApp.controller("navigationButton", ['$scope', function ($scope) {
    $scope.navigationButtons = navigationButtons;
}]);

//##################### Controller for to defign GLOBAL VERBALS by service###########

