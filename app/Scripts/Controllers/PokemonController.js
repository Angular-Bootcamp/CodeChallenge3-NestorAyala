'use strict';

App.controller("PokemonController",
    function AppController($scope, $resource, $location, AppData) {

        $scope.SortOrder = 'number';
        $scope.version = '1.45';
        $scope.Reverse = false;

        $scope.SortBy = function () {
            $scope.Reverse = $scope.Reverse ? false : true;
            $scope.SortOrder = $scope.Reverse ? '-number' : 'number';
        };

        $scope.Caught = {
            IsEnabled: function () {
                //displays when in the menu is equals to 1 *menu*
                return $location.search().Caught === '0' ? true : false;
            }(),

            getAll: function () {
                return MyLocalStorage.getArray("Caught");
            },

        };

        $scope.BattleBox = {
            IsEnabled: function () {
                //displays when in the menu is equals to 1 *menu*
                return $location.search().BattleBox === '1' ? true : false;
            }(),

            getAll: function () {
                return MyLocalStorage.getArray("BattleBox");
            },

        };

        $scope.Pokemon = {

            getAll: AppData.getAll(),

            Current: function () {
                var val = $location.search().Pokemon;

                if (val === undefined) return;
                var number = parseInt($location.search().Pokemon),
                    pokemon2 = {},
                    arr = MyLocalStorage.getArray("AllPokemon");
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i]["number"] === number) {
                        pokemon2 = arr[i];
                        break;
                    }

                }
                pokemon2.EvolutionChain = function () {
                    var chain = pokemon2.evolutionchain,
                        pokemon = {},
                        pokemons = [];
                    if (chain === undefined || chain === null) return null;
                    for (var i = 0; i < chain.length; i++) {
                        for (var j = 0; j < arr.length; j++) {
                            if (arr[j]["number"] === chain[i]) {
                                pokemon = arr[j];
                                break;
                            }

                        }
                        pokemons.push(pokemon);
                    }

                    return pokemons;
                }();
                return pokemon2;
            }(),
        };

        $scope.init = function () {
            //loval storage settings
            var version = $scope.version,
                storedversion = localStorage.getItem("version");
            if (storedversion !== version) {
                localStorage.clear();
                localStorage.setItem("version", version);
            }
        }();

    });