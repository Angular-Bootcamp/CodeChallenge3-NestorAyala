angular.module('myApp', ['ngResource'])

.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
        when('/test1', {
            templateUrl: 'templates/pages/mainMenu/index.html',
 
            title: 'Test1'
        }).
        when('/test2', {
            templateUrl: 'templates/pages/mainPokeDescription/index.html',

            title: 'Test2'
        }).
      otherwise({
          redirectTo: '/test1'
      });
} ])

.controller('AppCtrl', ['$scope', function ($scope) { 
        $scope.$on('$routeChangeSuccess', function (event, data) {
            $scope.pageTitle = data.title;
        });
    } ]);

