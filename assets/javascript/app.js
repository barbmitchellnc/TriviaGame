 //  Variable for the interval for the timer
 var intervalId;

 var counter;


 //create var for correct answers count and incorrect answers count
 var correct = 0;
 var incorrect = 0;
 // timer object
 var stopwatch = {

     time: 122,


     reset: function() {

         stopwatch.time = 122;


         // DONE: Change the "display" div to "2:00."
         $("#display").html("2:00");

     },
     start: function() {

         // DONE: Use setInterval to start the count here.
         counter = setInterval(stopwatch.count, 1000);
     },
     stop: function() {
         // DONE: Use clearInterval to stop the count here.
         //When time is equal to zero, number correct/incorrect appears
         clearInterval(counter);
         $('#quiz1').hide();


         if (stopwatch.count <= 0) {
             $("#quizResults").html("<h3> Time is up. Did You Earn Your Mickey Ears?>br>Number Correct:" + correct + "<br>Number Incorrect" + incorrect + "<br><img src=assets/images/thumbsup.jpg></h3>");
         } else {
             $("#quizResults").html("<h3> Did You Earn Your Mickey Ears?<br>Number Correct:" + correct + "<br>Number Incorrect" + incorrect + "<br><img src=assets/images/thumbsup.jpg></h3>");
         }

         $('#buttons').hide();
     },
     count: function() {

         // Decrease time by 1
         stopwatch.time--;
         if (stopwatch.count <= 0) {
             checkAnswers();
             stopwatch.stop();
         }

         // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
         //       and save the result in a variable.
         var converted = stopwatch.timeConverter(stopwatch.time);
         console.log(converted);

         // DONE: Use the variable we just created to show the converted time in the "display" div.
         $("#display").html(converted);
     },
     timeConverter: function(t) {

         var minutes = Math.floor(t / 60);
         var seconds = t - (minutes * 60);

         if (seconds < 10) {
             seconds = "0" + seconds;
         }

         if (minutes === 0) {
             minutes = "00";
         } else if (minutes < 10) {
             minutes = "0" + minutes;
         }

         return minutes + ":" + seconds;
     }
 };

 $(document).ready(function() {

     $("#start").click(function() {
         // $('#start').css("display")
         $('#quiz1').show();

     });

     $("#start").on("click", stopwatch.start());


     $("#results").click(function() {

         checkAnswers();

         stopwatch.stop();
     });
 });

 function checkAnswers() {
     //Check to see if all questions are answered
     if (!$("input[name='q1']:checked").val() ||
         !$("input[name='q2']:checked").val() ||
         !$("input[name='q3']:checked").val() ||
         !$("input[name='q4']:checked").val() ||
         !$("input[name='q5']:checked").val() ||
         !$("input[name='q6']:checked").val() ||
         !$("input[name='q7']:checked").val() ||
         !$("input[name='q8']:checked").val() ||
         !$("input[name='q9']:checked").val() ||
         !$("input[name='q10']:checked").val()) {
         alert("You're not done yet!");
     }
     console.log("input[name='q1']:checked");



     //compare input to answer and update counter

     if ($("input[name='q1']:checked").val() == "b") {
         correct++;
     } else {
         incorrect++;
     }
     console.log(correct);
     console.log(incorrect);
     if ($("input[name='q2']:checked").val() == "b") {
         correct++;
     } else {
         incorrect++;
     }
     console.log(correct);
     console.log(incorrect);
     if ($("input[name='q3']:checked").val() == "d") {
         correct++;
     } else {
         incorrect++;
     }
     console.log(correct);
     console.log(incorrect);
     if ($("input[name='q4']:checked").val() == "d") {
         correct++;
     } else {
         incorrect++;
     }
     console.log(correct);
     console.log(incorrect);
     if ($("input[name='q5']:checked").val() == "c") {
         correct++;
     } else {
         incorrect++;
     }

     console.log(correct);
     console.log(incorrect);
     if ($("input[name='q6']:checked").val() == "b") {
         correct++;
     } else {
         incorrect++;
     }

     console.log(correct);
     console.log(incorrect);
     if ($("input[name='q7']:checked").val() == "c") {
         correct++;
     } else {
         incorrect++;
     }
     console.log(correct);
     console.log(incorrect);
     if ($("input[name='q8']:checked").val() == "d") {
         correct++;
     } else {
         incorrect++;
     }
     console.log(correct);
     console.log(incorrect);
     if ($("input[name='q9']:checked").val() == "c") {
         correct++;
     } else {
         incorrect++;
     }
     console.log(correct);
     console.log(incorrect);
     if ($("input[name='q10']:checked").val() == "d") {
         correct++;
     } else {
         incorrect++;
     }
     console.log(correct);
     console.log(incorrect);
 }
