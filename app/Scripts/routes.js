'use strict';
var App = angular.module('Pokedex', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/Pokemon', {
                templateUrl: 'views/Pokemon.html',
                title: 'All Pokémon',
                controller: 'PokemonController'
            })
            .when('/CaughtPokemon', {
                templateUrl: 'views/Pokemon.html',
                title: 'Caught Pokémon',
                controller: 'PokemonController'
            })
            .when('/BattleBox', {
                templateUrl: 'views/Pokemon.html',
                title: 'BattleBox',
                controller: 'PokemonController'
            })
            .when('/Description', {
                templateUrl: 'views/Description.html',
                title: 'Description',
                controller: 'PokemonController'
            })
            /* DEFAULTS*/
            .when('/', {
                title: 'Main Menu'
            })
            .otherwise({
                redirectTo: '/'
            });
    });