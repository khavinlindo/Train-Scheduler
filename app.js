
var firebaseConfig = {
    apiKey: "AIzaSyAiKMsO57ISy_e8uQUxB9O8Ecfo-jYbH-g",
    authDomain: "test-project-f1f51.firebaseapp.com",
    databaseURL: "https://test-project-f1f51.firebaseio.com",
    projectId: "test-project-f1f51",
    storageBucket: "test-project-f1f51.appspot.com",
    messagingSenderId: "698186908610",
    appId: "1:698186908610:web:b0481e8ba6ab3a5e"
};

firebase.initializeApp(firebaseConfig);




$(document).ready(function () {

$(".btn").on("click", function(e) {

e.preventDefault();

var trainName = $("#train-name").val().trim();
var destination = $("#dest").val().trim();
var firstTrain = $("#train-time").val().trim();
var frequency = $("#freq").val().trim();



})






})