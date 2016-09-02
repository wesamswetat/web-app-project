<!DOCTYPE html>
<html ng-app="alom">
<head>
    <title> אלום </title>

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">

    <script src="js/angular.min.js"></script>
    <script src="js/angular-route.min.js"></script>

    <script src="app/GlobalDataService.js"></script>
    <script src="app/CalculatorService.js"></script>
    <script src="app/MainNavigationController.js"></script>
    <script src="app/models.js"></script>
    <script src="app/TestDirective.js"></script>
    <script src="app/AddWindowsMainController.js"></script>
    <script src="app/CutByWindowsController.js"></script>

</head>
<body>


<!-- #################### HEADER START ################## -->
<header>
    <p class="container2"> אלום <span> אתר למפעלי אלומיניום – לביצוע הצעות מחיר, הזמנות חומר והוראות ייצור  </span></p>
</header>

<!-- #################### NAVIGATION BUTTONS START ################## -->
<section>
    <nav class="navigationButtons container" ng-controller="navigationButton">
        <ul class="ulNavButtons">
            <li ng-repeat=" button in navigationButtons"><a href="#/{{button}}">{{button}}</a></li>
        </ul>
    </nav>
</section>

<!-- #################### SELECTION OF COMPANY .. WINDOW ..  START ################## -->
<section  ng-view >

</section>
</body>
</html>