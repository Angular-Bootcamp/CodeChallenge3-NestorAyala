'use strict';
App.controller('TitleCtrl', ['$scope', function ($scope) { 
        $scope.$on('$routeChangeSuccess', function (event, data) {
            $scope.pageTitle = data.title;
        });
    } ]);