sglanchoneteApp.controller('PedidoController', PedidoController);

PedidoController.$inject = ['PedidoService'];

function PedidoController(PedidoService) {
    var vm = this;
    vm.nome = 'Pedido';
    PedidoService.findAll()
    .then(resultado => {
        vm.list = resultado.data
    })
    activate();
    function activate() { }
}
