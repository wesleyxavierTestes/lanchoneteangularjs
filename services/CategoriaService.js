sglanchoneteApp.service('CategoriaService', CategoriaService);

CategoriaService.$inject = ['$http'];

function CategoriaService($http) {
    this.findAll = getFindAll;

    function getFindAll() { 
        var CONFIG = {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
           }
        return $http.get(list('categoria'));
    }
}


