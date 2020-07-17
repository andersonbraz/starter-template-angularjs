var myAppModule = angular.module('app', []);

myAppModule.filter('title', () => {
 return function(name) {
    return name;
  };
});