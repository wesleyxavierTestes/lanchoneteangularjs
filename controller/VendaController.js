sglanchoneteApp.controller('VendaController', VendaController);

VendaController.$inject = ['VendaService'];

function VendaController(VendaService) {
    var vm = this;
    vm.nome = 'Venda';
    VendaService.findAll()
    .then(resultado => {
        vm.list = resultado.data
    })
    activate();
    function activate() { }
}
