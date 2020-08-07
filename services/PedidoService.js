sglanchoneteApp.service('PedidoService', PedidoService);

PedidoService.$inject = ['$http'];

function PedidoService($http) {
    this.findAll = getFindAll;

    function getFindAll() { 
        var CONFIG = {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
           }
        return $http.get(list('pedido'));
    }
}


