sglanchoneteApp.service('LanchoneteService', LanchoneteService);

LanchoneteService.$inject = ['$http'];

function LanchoneteService($http) {
    this.findAll = getFindAll;

    function getFindAll() { 
        var CONFIG = {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
           }
        return $http.get(newFunction('categoria'));
    }
}
function newFunction(rota) {
    return 'http://localhost:8080/api/'+rota+'/list?page=1';
}

