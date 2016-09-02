/**
 * Created by Wesam on 8/29/2016.
 */

var windowCalculator = angular.module('CalculatorService', []);

windowCalculator.service('calculatorService', function (globalDataService) {

    var
        funCode, i, z, re, profels, profelsDes, medot, kamoyot,
        height = [], width = [];

    this.calculatAndAddWindows = function (inputsFromUser, windowInfoObject) {

        // inputsFromUser its an object that include all inputs from user
        // windowInfoObject its the object from server by request
        height = inputsFromUser.height;
        width = inputsFromUser.width;
        funCode = windowInfoObject[0].funcode;

        profels = windowInfoObject[0].profels;
        profels = profels.split('.');
        profelsDes = windowInfoObject[0].profels_des;
        profelsDes = profelsDes.split('.');
        kamoyot = windowInfoObject[0].kamoyot;
        kamoyot = kamoyot.split('*');
        medot = windowInfoObject[0].medot;
        for (z = 0; z < height.length; z = z + 1) {
            // to replace the height from user to the formula
            if (z === 0) {
                medot = medot.replace(/h/g, height[z]);
            } else {
                re = new RegExp("h" + z, "g");
                medot = medot.replace(re, height[z]);
            }
        }
        for (z = 0; z < width.length; z = z + 1) {
            // to replace the width from user to the formula
            if (z === 0) {
                medot = medot.replace(/l/g, width[z]);
            } else {
                re = new RegExp("l" + z, "g");
                medot = medot.replace(re, width[z]);
            }
        }

        medot = medot.split('*');
        for (z = 0; z < medot.length; z++) {
            medot[z] = eval(medot[z]);
            kamoyot[z] = eval(kamoyot[z]);
        }

        if (funCode in globalDataService.getTableWindowsAfterCalculator()) {
            globalDataService.setTableWindowsAfterCalculator(funCode, medot);
        } else {
            globalDataService.setTableWindowsAfterCalculator(funCode, medot, profels, profelsDes, kamoyot);
        }

        globalDataService.setArrayOfProfelsAndCuts(profels, medot ,kamoyot);

        order(profels );

    };// end of calculatAndAddWindows function


    var order = function (profelsCutsToAdd ) {


        var arrayOfProfelsAndCuts = globalDataService.getArrayOfProfelsAndCuts();
        var medot = [] , tempArray = [];
        var temp = 0, ifContinue = false, motot = 0;


        for (i = 0; i < profelsCutsToAdd.length; i = i + 1) {
            // remove multeples valuse from  profelsCutsToAdd array
            if (tempArray.indexOf(profelsCutsToAdd[i]) < 0){
                tempArray.push(profelsCutsToAdd[i]);
            }
        }

        for (i = 0; i < tempArray.length; i = i + 1) {
            var cutsArray = arrayOfProfelsAndCuts[tempArray[i]];
            cutsArray.sort(function (a, b) {
                return b - a
            });

            for (z = 0; z < cutsArray.length; z = z + 1) {

                if (z === (cutsArray.length - 1) && ifContinue) {
                    ifContinue = false;
                    motot = motot + 1;
                    temp = 0;
                    z = 0;
                }

                if (temp + cutsArray[z] > 600) {
                    ifContinue = true;
                    continue
                }

                if(cutsArray[z] > 0){
                    temp = temp + cutsArray[z] + 0.5;
                }
                cutsArray[z] = 0;

            }
            medot = [motot, temp];
            globalDataService.setMotoToOrderByMakat(tempArray[i], medot);
            motot = 0;
            temp = 0;
            ifContinue = false;

        }


        // for (profel in arrayOfProfelsAndCuts) {
        //     if (arrayOfProfelsAndCuts.hasOwnProperty(profel)) {
        //         medot = arrayOfProfelsAndCuts[profel];
        //         for (z = 0; z < medot.length; z = z + 1){
        //
        //         }
        //     }
        // }
    };
});