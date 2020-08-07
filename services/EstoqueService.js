sglanchoneteApp.service('EstoqueService', EstoqueService);

EstoqueService.$inject = ['$http'];

function EstoqueService($http) {
    this.findAll = getFindAll;

    function getFindAll() { 
        var CONFIG = {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
           }
        return $http.get(list('estoque'));
    }
}


