'use strict';

var MyLocalStorage = {
    getArray: function (key) {
        var str = localStorage.getItem(key) !== null ? localStorage.getItem(key) : "[]",
            JSon = JSON.parse(str),
            array = [];

        for (var x in JSon) {
            array.push(JSon[x]);
        }
        return array;
    },

    setArray: function (key, array) {
        localStorage.setItem(key, JSON.stringify(array));
    },

    getObject: function (key) {
        var json = localStorage.getItem(key);
        return JSON.parse(json);
    },

    setObject: function (key, object) {
        var string = JSON.stringify(object);
        localStorage.setItem(key, string);
    }
};

function IsStored(key, number) {
    var array = MyLocalStorage.getArray(key),
        found = jQuery.inArray(number, array);
    if (found >= 0) {
        return true;
    } else {
        return false;
    }
}