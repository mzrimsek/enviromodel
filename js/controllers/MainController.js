app.controller('MainController', ['$scope', function($scope) {
  $scope.categories = [new Category('designer', 'designer.png'),
    new Category('bridge', 'bridge.png'),
    new Category('better', 'better.png'),
    new Category('contemporary', 'contemporary.png'),
    new Category('moderate', 'moderate.png'),
    new Category('budget', 'budget.png')
  ];
}]);

function Category(name, img) {
  this.name = name;
  this.img = img;
}
