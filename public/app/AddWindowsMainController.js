/**
 * Created by Wesam on 8/29/2016.
 */

var addMainWindows = angular.module('AddwindowsMain', []);

addMainWindows.controller('addMain', function ($scope, $http, myCache, globalDataService ,calculatorService) {


    (function init() {
        $scope.companyNames = ["בחר חברה", "קליל", "טקסתיל", "אלובין", "אחר"];
        $scope.companySelect = $scope.companyNames[0];//go to select 1 without space
        $scope.companySerials = ["בחר סדרה"];
        $scope.serialSelect = $scope.companySerials[0];//go to select 1 without space
        $scope.serialWindows = [{"name": "בחר חלון / דלת", "value": "non"}];
        $scope.windowSelect = $scope.serialWindows[0];//go to select 1 without space
        $scope.windowInfoModel = {
            height: [],
            width: [],
            costByMeter: '',
            cost: '',
            description: '',
            windowDescription: '',
            glassDescription: '',
            company: '',
            serial: '',
            funCode: ''
        };
        $scope.inputHideShow = 'hide';
        $scope.tableHideShow = (globalDataService.getArrayOfAllWindows().length > 0) ? 'show' : 'hide';
        $scope.arrayOfAllWindows = globalDataService.getArrayOfAllWindows();
    })();


    $scope.getCompanySerials = function (company) {

        $scope.windowInfoModel.company = company;
        $scope.companySerials = ["בחר סדרה"];// to zero the serial select
        $scope.serialSelect = $scope.companySerials[0];//go to select 1 without space
        $scope.serialWindows = [{"name": "בחר חלון / דלת", "value": "non"}];// to zero the windows select
        $scope.windowSelect = $scope.serialWindows[0];//go to select 1 without space
        $http.get("getserialsforcompans/" + company)
            .then(function (response) {
                $scope.content = response.data;
                if (angular.isArray($scope.content)) {
                    var i;
                    for (i = 0; i < $scope.content.length; i = i + 1) {
                        $scope.companySerials.push($scope.content[i].serial + " " + $scope.content[i].serial_num);
                    }
                }
            }, function (response) {
                alert(response.data)
            });

    };


    $scope.getSerialWindows = function (serial) {

        $scope.windowInfoModel.serial = serial;
        $scope.serialWindows = [{"name": "בחר חלון / דלת", "value": "non"}];// to zero the windows select
        $scope.windowSelect = $scope.serialWindows[0];//go to select 1 without space
        var getSerial = serial.split(" ")[1];
        $http.get("getwindowsbyserial/" + getSerial)
            .then(function (response) {
                $scope.content = response.data;
                if (angular.isArray($scope.content)) {
                    var i;
                    for (i = 0; i < $scope.content.length; i = i + 1) {
                        $scope.serialWindows.push({name: $scope.content[i].des, value: $scope.content[i].funcode});
                    }
                }
            }, function (response) {

            });
    };


    $scope.getWindowInfo = function (windoFunCode) {
        $scope.windowInfoModel.windowDescription = windoFunCode.name;
        $scope.windowInfoModel.funCode = windoFunCode.value;
        if (myCache.get(windoFunCode.value) == null) {
            $http({
                method: 'GET',
                cache: myCache,
                url: "getwindowinformation/" + windoFunCode.value
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.toCalc = response.data;
                myCache.put(windoFunCode.value, $scope.toCalc);
                myCache.put('curentFunCode', windoFunCode.value);
                globalDataService.setArrayOfWindowsObjects(windoFunCode.value, $scope.toCalc[0]);
                $scope.heightInput = $scope.toCalc[0].height_input;
                $scope.widhtInput = $scope.toCalc[0].widht_input;
                $scope.inputHideShow = 'show';
                console.log($scope.heightInput);
                show();
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        } else {
            $scope.toCalc = myCache.get(windoFunCode.value);
            globalDataService.setArrayOfWindowsObjects(windoFunCode.value, $scope.toCalc);
            $scope.inputHideShow = 'show';
            show();
        }
    };

    function show() {
        var x = $scope.toCalc[0].medot.replace(/l/g, 50).replace(/h/g, 60).split('*');
        for (var z = 0; z < x.length; z++) {
            x[z] = eval(x[z]);
        }
        console.log(x);

    }


    $scope.getNumber = function (num) {
        // to get number of inputs for height and width
        return (angular.isDefined(num)) ? new Array(num) : new Array(1);
    };

    $scope.clickAddWindow = function () {
        var newWindowToList = {};
        $scope.windowInfoModel.cost = $scope.windowInfoModel.height[0] / 100 * $scope.windowInfoModel.width[0] / 100 * $scope.windowInfoModel.costByMeter;
        angular.copy($scope.windowInfoModel, newWindowToList);
        calculatorService.calculatAndAddWindows(newWindowToList , myCache.get(newWindowToList.funCode));
        globalDataService.setArrayOfAllWindows(newWindowToList);
        $scope.arrayOfAllWindows = globalDataService.getArrayOfAllWindows();//to update $scope.arrayOfAllWindows with the new added window
        $scope.tableHideShow = 'show';
    };


});

