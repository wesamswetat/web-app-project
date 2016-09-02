/**
 * Created by Wesam on 8/31/2016.
 */

var globalData = angular.module('GlobalDataService', []);

globalData.service('globalDataService', function () {

    var
        i, z,
        arrayOfAllWindows = [],
        arrayOfWindowsObjects = [],
        arrayOfProfelsAndCuts = {},
        motoToOrderByMakat = {},
        tableWindowsAfterCalculator = {},
        windowObject = {
            funCode: '',
            object: '',
            returnInfo: function () {
                return {
                    funCode: this.funCode,
                    object: this.object
                }
            }
        };

    this.getArrayOfAllWindows = function () {
        // return new array not a reference
        var newWindowToList = [];
        angular.copy(arrayOfAllWindows, newWindowToList);
        return newWindowToList;
    };

    this.getArrayOfWindowsObjects = function () {
        // return new array not a reference
        var newWindowObjects = [];
        angular.copy(arrayOfWindowsObjects, newWindowObjects);
        return newWindowObjects;
    };

    this.getTableWindowsAfterCalculator = function () {
        // return new array not a reference
        var newWindowObjects = {};
        angular.copy(tableWindowsAfterCalculator, newWindowObjects);
        return newWindowObjects;
    };

    this.getArrayOfProfelsAndCuts = function () {
        // return new array not a reference
        var newWindowObjects = {};
        angular.copy(arrayOfProfelsAndCuts, newWindowObjects);
        return newWindowObjects;
    };

    this.getMotoToOrderByMakat = function () {
        // return new array not a reference
        var newWindowObjects = {};
        angular.copy(motoToOrderByMakat, newWindowObjects);
        return newWindowObjects;
    };

    this.setArrayOfAllWindows = function (newWindowObject) {
        arrayOfAllWindows.push(newWindowObject);
    };

    this.setArrayOfWindowsObjects = function (funCode, window) {

        for (i = 0; i < arrayOfWindowsObjects.length; i = i + 1) {
            if (arrayOfWindowsObjects[i].returnInfo().funCode === funCode) {
                return;
            }
        }
        var newWindowObject = {};
        windowObject.funCode = funCode;
        windowObject.object = window;

        angular.copy(windowObject, newWindowObject);
        arrayOfWindowsObjects.push(newWindowObject);
    };

    this.setTableWindowsAfterCalculator = function (funCode, medot, profels, profelsDes, kamoyot) {
        if (angular.isDefined(profels)) {
            // if profel || profelsDes || kamoyot
            // one of them define that men first
            // add with the funCode and add all parameters
            tableWindowsAfterCalculator[funCode] = [profels, profelsDes, kamoyot, medot];
        } else {
            tableWindowsAfterCalculator[funCode].push(medot);
        }
    };

    this.setArrayOfProfelsAndCuts = function (serialsOfProfels, medaToCuts, numberOfCuts) {

        for (i = 0; i < numberOfCuts.length; i = i + 1) {
            for (z = 0; z < numberOfCuts[i]; z = z + 1) {
                if (serialsOfProfels[i] in arrayOfProfelsAndCuts) {
                    arrayOfProfelsAndCuts[serialsOfProfels[i]].push(medaToCuts[i]);
                } else {
                    arrayOfProfelsAndCuts[serialsOfProfels[i]] = [medaToCuts[i]];
                }
            }
        }
    };

    this.setMotoToOrderByMakat = function (makt, order) {
        motoToOrderByMakat[makt] = order;
    }

});


