sglanchoneteApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: './../views/home.html'
        })
        .when("/cliente", {
            templateUrl: './../views/cliente.html'
        })
        .when("/categoria", {
            templateUrl: './../views/categoria.html'
        })
        .when("/produto", {
            templateUrl: './../views/produto.html'
        })
        .when("/cardapio", {
            templateUrl: './../views/cardapio.html'
        })
        .when("/combo", {
            templateUrl: './../views/combo.html'
        })
        .when("/estoque", {
            templateUrl: './../views/estoque.html'
        })
        .when("/lanche", {
            templateUrl: './../views/lanche.html'
        })
        .when("/pedido", {
            templateUrl: './../views/pedido.html'
        })
        .when("/venda", {
            templateUrl: './../views/venda.html'
        })
        .otherwise("/");
});