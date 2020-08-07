sglanchoneteApp.controller('ProdutoController', ProdutoController);

ProdutoController.$inject = ['ProdutoService'];

function ProdutoController(ProdutoService) {
    var vm = this;
    vm.nome = 'Produto';
    ProdutoService.findAll()
    .then(resultado => {
        vm.list = resultado.data
    })
    activate();
    function activate() { }
}
