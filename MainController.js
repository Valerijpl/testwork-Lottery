app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Lottery';
  $scope.promo = 'Check your fate!';
  $scope.new_player = [];
  $scope.players = [];
  $scope.winners = [];
$scope.create_new_player = function(new_player){
  var player = {
    name: new_player.name,
    surname: new_player.surname,
    email: new_player.email,
    phone: new_player.phone,
    status: 'none'
  };
  $scope.players.push(player);
  $scope.new_player = [];
};
$scope.edit = function(player){
  player.status = 'edit';
};
$scope.select_winner = function(){
  var players = $scope.players;
  var winner = players[Math.floor(Math.random() * players.length)];
  $scope.winners.push(winner);
};
$scope.save_changes = function(player){
  player.status = 'none';
};
}]);
