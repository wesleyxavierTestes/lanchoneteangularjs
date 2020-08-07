sglanchoneteApp.controller('EstoqueController', EstoqueController);

EstoqueController.$inject = ['EstoqueService'];

function EstoqueController(EstoqueService) {
    var vm = this;
    vm.nome = 'Estoque';
    EstoqueService.findAll()
    .then(resultado => {
        vm.list = resultado.data
    })
    activate();
    function activate() { }
}
