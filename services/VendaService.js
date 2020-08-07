sglanchoneteApp.service('VendaService', VendaService);

VendaService.$inject = ['$http'];

function VendaService($http) {
    this.findAll = getFindAll;

    function getFindAll() { 
        var CONFIG = {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
           }
        return $http.get(list('venda'));
    }
}


