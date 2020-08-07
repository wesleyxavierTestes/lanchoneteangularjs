sglanchoneteApp.controller('ComboController', ComboController);

ComboController.$inject = ['ComboService'];

function ComboController(ComboService) {
    var vm = this;
    vm.nome = 'Combo';
    ComboService.findAll()
    .then(resultado => {
        vm.list = resultado.data
    })
    activate();
    function activate() { }
}
