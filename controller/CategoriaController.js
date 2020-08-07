sglanchoneteApp.controller('CategoriaController', CategoriaController);

CategoriaController.$inject = ['CategoriaService'];

function CategoriaController(CategoriaService) {
    var vm = this;
    vm.nome = 'Categoria';
    CategoriaService.findAll()
    .then(resultado => {
        vm.list = resultado.data
    })
    activate();
    function activate() { }
}
