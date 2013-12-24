var myApp = angular.module("superhero", []);


myApp.directive("superman", function() {
  return {
    restrict: "E",
    template: "<div>Superman, here to save the day!!</div>"
  }
});


