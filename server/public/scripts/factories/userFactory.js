//MARK:-- User Factory for Sign In / Sign Out

myApp.factory('UserFactory', [function() {

    //establish provider .GoogleAuthProvider()

    //signIn()

    //signOut()

    //export functions


}]);


























// var provider = new firebase.auth.GoogleAuthProvider();
//
// function signIn() {
//     firebase.auth().signInWithPopup(provider)
// }
//
// function signOut() {
//     firebase.auth().signOut()
// };
//
// return {
//     signIn: function() { return signIn; },
//     signOut: function(){ return signOut; }
// };









// function signIn() {
//     firebase.auth()
//         .signInWithPopup(provider)
//         .then(function(result) {
//             var token = result.credential.accessToken;
//             var user = result.user;
//         })
//         .catch(function(error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             var email = error.email;
//             var credential = error.credential;
//         });
// }
//
// function signOut() {
//     firebase.auth()
//         .signOut()
//         .then(function() {
//             console.log('Sign-out successful.');
//         }, function(error) {
//             console.log('error signing out');
//         });
// };
//
//
// return {
//     signIn: function() {
//         return signIn;
//     },
//     signOut: function() {
//         return signOut;
//     }
//
// };
