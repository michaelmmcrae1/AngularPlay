var app = angular.module("behaviorApp", []);


app.directive("enter", function() {
  return function($scope, element) {
      element.bind("mouseenter", function() {
        alert("I'm inside this");
      })
  }
});


app.directive("leave", function() {
  return function($scope, element) {
      element.bind("mouseleave", function() {
        alert("I'm leaving on a dolphin");
      })
  }
});