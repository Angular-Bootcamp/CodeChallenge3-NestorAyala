'use strict';
var App;
App.directive('pokemonContainer', function (BattleBox, PokeCaught) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../../views/Directive/pokemonBox.html',
        scope: {
            showem: '=',
            pokemon: '='
        },
        controller: function ($scope) {
            $scope.BattleBoxImage = function (pokemon) {
                return BattleBox.getImage(pokemon.number);
            };

            $scope.BattleBoxAddOrRemove = function (pokemon) {
                return BattleBox.AddOrRemove(pokemon.number);
            };

            $scope.CaughtImage = function (pokemon) {
                return PokeCaught.getImage(pokemon.number);
            };

            $scope.CaughAddOrRemove = function (pokemon) {
                return PokeCaught.AddOrRemove(pokemon.number);
            };
        }
    };
});