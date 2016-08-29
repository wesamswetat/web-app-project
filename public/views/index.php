<!DOCTYPE html>
<html ng-app="alom">
<head>
    <title> אלום </title>

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">

    <script src="js/angular.min.js"></script>
    <script src="js/angular-route.min.js"></script>


    <script src="app/MainNavigationController.js"></script>
    <script src="app/models.js"></script>
    <script src="app/TestDirective.js"></script>

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

<section class="selection container" ng-controller="mainSelects">
    <div class="title">
        <h3> הוספת או הסרת חלון לרשימה </h3>
    </div>
    <div>
        <label>
            <select id="company" ng-model="companySelect"
                    ng-options="company as company for company in companyNames" ng-change="www()"></select>
        </label>
        <label>
            <select id="company" ng-model="serialSelect"
                    ng-options="serial as serial for serial in companySerials"></select>
        </label>

        <select id="options">
            <option id="בחר"> בחר חלון / דלת</option>
        </select>

    </div>
</section>

</body>
</html>