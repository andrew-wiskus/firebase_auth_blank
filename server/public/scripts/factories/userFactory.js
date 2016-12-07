//MARK:-- User Factory for Sign In / Sign Out

myApp.factory('UserFactory', [function() {

    var provider = new firebase.auth.GoogleAuthProvider()

    //signIn()

    //signOut()

    //export functions
    return {

    };


}]);






//
// //establish provider .GoogleAuthProvider()
// var provider = new firebase.auth.GoogleAuthProvider();
//
// //signIn()
// function signIn(){
//   firebase.auth().signInWithPopup(provider)
// }
// //signOut()
// function signOut(){
//   firebase.auth().signOut();
// }
// //export functions
// return {
//   signIn: function(){return signIn},
//   signOut: function(){return signOut}
// };


















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
// //         .signInWithPopup(provider)
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
