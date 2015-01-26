<body>
    <div ng-controller="MyController" ng-cloak>
        <h1>My Things</h1>
        <input ng-model="newThing.name"/>
        <button ng-click="add();">Add</button>
        <div ng-repeat="mything in mythings">
            <span ng-bind="mything.name"></span>
            <button ng-click="remove($index);">Remove</button>
        </div>
    </div>
    <div ng-controller="MyCounter" ng-cloak>
        <h1>Counter</h1>
        <h1><button ng-click="decrease();">&lt;</button><span ng-bind="counter"></span><button ng-click="increase();">&gt;</button></h1>
    </div>

    <script src="${pageContext.request.contextPath}/ngapp/scripts/vendor/requirejs/require.js"></script>
    <script type="text/javascript">
    require(['ngapp/scripts/main'], function() {
        require(['modules/demo/bootstrap']);
    });
    </script>
</body>
