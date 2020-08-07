sglanchoneteApp.controller('ClienteController', ClienteController);

ClienteController.$inject = ['ClienteService'];

function ClienteController(ClienteService) {
    var vm = this;
    vm.nome = 'Cliente';
    ClienteService.findAll()
    .then(resultado => {
        vm.list = resultado.data
    })
    activate();
    function activate() { }
}
