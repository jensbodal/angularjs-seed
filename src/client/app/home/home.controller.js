(function() {
  'use strict';

  angular
    .module('doneYet.home')
    .controller('HomeController', HomeController);
  
  HomeController.$inject = [
  ];

  function HomeController() {
    var vm = this;
    vm.pageTitle = 'Dynamic Page Title';
    vm.checkbox1 = true;
  }

})();
