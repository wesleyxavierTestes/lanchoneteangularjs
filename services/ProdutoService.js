sglanchoneteApp.service('ProdutoService', ProdutoService);

ProdutoService.$inject = ['$http'];

function ProdutoService($http) {
    this.findAll = getFindAll;

    function getFindAll() { 
        var CONFIG = {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
           }
        return $http.get(list('produto'));
    }
}


