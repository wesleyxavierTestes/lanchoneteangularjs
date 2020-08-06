sglanchoneteApp.controller('LanchoneteController', LanchoneteController);

LanchoneteController.$inject = ['LanchoneteService'];

function LanchoneteController(LanchoneteService) {
    var vm = this;
    LanchoneteService.findAll()
    .then(resultado => {
        vm.nome = resultado.data
    })
    activate();
    function activate() { }
}
