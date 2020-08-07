sglanchoneteApp.controller('LancheController', LancheController);

LancheController.$inject = ['LancheService'];

function LancheController(LancheService) {
    var vm = this;
    vm.nome = 'Lanche';
    LancheService.findAll()
    .then(resultado => {
        vm.list = resultado.data
    })
    activate();
    function activate() { }
}
