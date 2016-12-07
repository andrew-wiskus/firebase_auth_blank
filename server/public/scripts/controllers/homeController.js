//MARK:-- User Home Page Controller

myApp.controller("HomeController", ["$scope", "$location", "$timeout", "$firebaseAuth", 'UserFactory',
    function($scope, $location, $timeout, $firebaseAuth, UserFactory) {

        //signout() 

        //auth()
        //-check if user -> relocate if null
        //-connect tasklist
        //-check if user is new


        //priorityUp/Down ()
        //delete task ()
        //add task ()
        //make snapshot object

    }
]);






// $scope.user;
// $scope.signOut = UserFactory.signOut();
//
// var auth = $firebaseAuth()
// auth.$onAuthStateChanged(function(user) {
//     if (user === null) {
//         $location.path('/welcome');
//     }
//     $scope.user = user;
// })
