sglanchoneteApp.controller('CardapioController', CardapioController);

CardapioController.$inject = ['CardapioService'];

function CardapioController(CardapioService) {
    var vm = this;
    vm.nome = 'Cardapio';
    CardapioService.findAll()
    .then(resultado => {
        vm.list = resultado.data
    })
    activate();
    function activate() { }
}
