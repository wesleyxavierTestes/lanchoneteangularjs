const sglanchoneteApp = angular.module('sglanchoneteApp', ['ngRoute']);

sglanchoneteApp.directive('approot', function () {
    return {
        templateUrl: './views/app.html'
    }
})