sglanchoneteApp.service('LancheService', LancheService);

LancheService.$inject = ['$http'];

function LancheService($http) {
    this.findAll = getFindAll;

    function getFindAll() { 
        var CONFIG = {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
           }
        return $http.get(list('lanche'));
    }
}


