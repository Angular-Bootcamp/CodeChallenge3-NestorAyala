App.factory("AppData", function ($resource) {
    'use strict';
    return {
        getAll: function () {
            var data = MyLocalStorage.getObject("AllPokemon"),
                query = $resource('Data/Pokemons.json').query();
            if (data !== null) {
                return data;
            } else {
                query.
                    $promise.then(
                        function (event) {
                            MyLocalStorage.setObject("AllPokemon", event);
                        },
                        function (response) {
                            console.log(response);
                        });
                return query;
            }
        }
    };
});

App.factory("PokeCaught", function ($resource) {
    'use strict';
    return {
        AddOrRemove: function (number) {
            var array = MyLocalStorage.getArray("Caught"),
                found = jQuery.inArray(number, array);
            if (found >= 0) {
                if (IsStored("BattleBox", number)) {
                    alert("You cannot un-catch Pokémon that are in your battle box");
                    return;
                }
                array.splice(found, 1);
            } else {
                array.push(number);
            }
            MyLocalStorage.setArray("Caught", array);
        },

        getImage: function (number) {
            if (IsStored("Caught", number)) {
                return "Images/Buttons/empty-plate-red.png";
            } else {
                return "Images/Buttons/empty-plate.png";
            }
        }
    };
});

App.factory("BattleBox", function ($resource) {
    'use strict';
    return {
        AddOrRemove: function (number) {
            var array = MyLocalStorage.getArray("BattleBox"),
                found = jQuery.inArray(number, array);
            if (found >= 0) {
                array.splice(found, 1);
            } else {
                if (array.length >= 6) {
                    alert("You can't carry more than 6 pokemon with you");
                    return;
                }
                if (!IsStored("Caught", number)) {
                    alert("You haven’t captured this Pokémon yet");
                    return;
                }
                array.push(number);
            }
            MyLocalStorage.setArray("BattleBox", array)
        },

        getImage: function (number) {

            if (IsStored("BattleBox", number)) {
                return "Images/Buttons/star-yellow.png";
            } else {
                return "Images/Buttons/star.png";
            }
        }

    }
});