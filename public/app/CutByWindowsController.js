/**
 * Created by Wesam on 8/29/2016.
 */

var cutByWindows = angular.module('CutByWindowsController', []);

cutByWindows.controller('cutByWindows', function ($scope, globalDataService) {


    console.log(globalDataService.getArrayOfAllWindows());
    console.log(globalDataService.getArrayOfWindowsObjects());
    console.log(globalDataService.getArrayOfProfelsAndCuts());
    console.log(globalDataService.getMotoToOrderByMakat());
    console.log(globalDataService.getTableWindowsAfterCalculator());

});
