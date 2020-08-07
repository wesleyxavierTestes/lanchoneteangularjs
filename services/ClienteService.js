sglanchoneteApp.service('ClienteService', ClienteService);

ClienteService.$inject = ['$http'];

function ClienteService($http) {
    this.findAll = getFindAll;

    function getFindAll() { 
        var CONFIG = {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
           }
        return $http.get(list('cliente'));
    }
}


