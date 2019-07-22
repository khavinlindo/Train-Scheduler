
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


var database = firebase.database();

$(document).ready(function () {

$(".btn").on("click", function(e) {

e.preventDefault();

var trainName = $("#train-name").val().trim();
var destination = $("#dest").val().trim();
var firstTrain = moment($("#train-time").val().trim(), "HH:mm").format("HH:mm"); 
var frequency = $("#freq").val().trim();

var train = {
    train: trainName,
    destination: destination,
    trainTime: firstTrain,
    frequency, frequency
};

database.ref().push(train);

$("#train-name").val("");
$("#dest").val("");
$("#train-time").val("");
$("#freq").val("");

});


database.ref().on("child_added", function(snapshot) {

      var trainName = snapshot.val().train;
      var destination = snapshot.val().destination;
      var firstTrain = snapshot.val().trainTime;
      var frequency = snapshot.val().frequency;

      var remainder = (moment().diff(moment(firstTrain, "HH:mm"), "minutes"))%frequency;
      var minutes = frequency - remainder;
      var nextArrival = moment().add(minutes, "m").format("HH:mm A");



      var newRow = $("<tr>").append(
          $("<td>").html(trainName),
          $("<td>").html(destination),
          $("<td>").html(frequency),
          $("<td>").html(nextArrival),
          $("<td>").html(minutes)   
      );

      $(".table > tbody").append(newRow);

  });

});