/// <reference path="angular.min.js" />

var app = angular.module("myApp", ['ngRoute'])
.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        
    .when('/mainMenu', {
        templateUrl: 'templates/pages/mainMenu/index.html',
        title: 'Main Menu'
    })
    
    .when('/allPokemons', {
        templateUrl: 'templates/pages/mainMenu/index.html',
        title: 'All Pokémon'
    })
    
    .when('/caughtPokemon', {
        templateUrl: 'templates/pages/allPokemons/index.html',
        title: 'Caught Pokémon'
        //,controller: "allPokemonsController"
    })
    
    .when('/battleBox', {
        templateUrl: 'templates/pages/allPokemons/index.html',
        title: 'Battle Box'
    })
    
    .when('/mainPokeDescription', {
        templateUrl: 'templates/pages/mainPokeDescription/index.html',
        title: 'RNDM Desc'
    })
    
    .when('/', {
        templateUrl: 'templates/pages/mainMenu/index.html',
        title: 'Main Menu'
    })
    
    .otherwise( { redirectTo: '/' } )
}])

.controller('AppCtrl', ['$scope', function ($scope) { 
        $scope.$on('$routeChangeSuccess', function (event, data) {
            $scope.pageTitle = data.title;
        });
    } ])











.controller('pokeController', ['$scope', '$http', function ($scope, $http) {
        angular.element(document).ready(function() {  
        
    })
    
    $scope.getPokeImg = function(thisPoke){
        return "http://pokeapi.co/media/img/"+thisPoke.national_id+".png"
    }

    $scope.getPoke = function(numBegin) {
        //var pokeId = Math.floor(Math.random() * 151) + 1;
        //var pokeId = 1;
        
        var pokeUrl = 'http://pokeapi.co/api/v1/pokemon/' + numBegin + '/?callback=JSON_CALLBACK'
        
        $http.jsonp(pokeUrl)
        .success(function(data) {
             $scope.currentPokemon = data;
             $scope.currentPokeImg = $scope.getPokeImg($scope.currentPokemon);
            console.log("$scope.numBegin1: ", numBegin);
            
        })
        
        
       }
    
        
      for(var numBegin = 1; numBegin <= 25; numBegin++){
      $scope.getPoke(numBegin); //remember, is not HOISTED!!! 
      console.log("$scope.numBegin2222: ", numBegin);
         }//end for loop
   
}])

.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});

       /* 
    .controller("allPokemonsController", function($scope){
        $scope.message = "allPokemonsController";
    })
    */