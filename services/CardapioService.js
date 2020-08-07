sglanchoneteApp.service('CardapioService', CardapioService);

CardapioService.$inject = ['$http'];

function CardapioService($http) {
    this.findAll = getFindAll;

    function getFindAll() { 
        var CONFIG = {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
           }
        return $http.get(list('cardapio'));
    }
}


