sglanchoneteApp.service('ComboService', ComboService);

ComboService.$inject = ['$http'];

function ComboService($http) {
    this.findAll = getFindAll;

    function getFindAll() { 
        var CONFIG = {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
           }
        return $http.get(list('combo'));
    }
}


