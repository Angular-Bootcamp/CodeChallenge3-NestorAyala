var pokeController = function ($scope, $http) {
    
    angular.element(document).ready(function() {  
        $scope.getPoke();
    });
    
    $scope.getPokeImg = function(thisPoke){
        return "http://pokeapi.co/media/img/"+thisPoke.national_id+".png"
    };

    $scope.getPoke = function() {
        var pokeId = Math.floor(Math.random() * 151) + 1
        //var pokeId = 1;
        var pokeUrl = 'http://pokeapi.co/api/v1/pokemon/' + pokeId + '/?callback=JSON_CALLBACK'
        $http.jsonp(pokeUrl)
        .success(function(data) {
            $scope.currentPokemon = data;
            $scope.currentPokeImg = $scope.getPokeImg($scope.currentPokemon);
        });
       };
};