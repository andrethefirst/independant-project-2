$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const answerone = $("select#question-one").val();
    const answertwo = $("select#question-two").val();
    const answerthree = $("select#question-three").val();
    const answerfour = $("select#question-four").val();
    const answerfive = $("select#question-five").val();

    const resultone = "Ruby";
    const resulttwo = "JavaScript";
    const resultthree = "Python";
  
    if (answerone === "fire" && answertwo === "keyboard" && answerthree === "lefty" && answerfour === "ram" && answerfive === "month") {
      $("#finalresult").text(resultone)
    } else if (answerone === "water" && answertwo === "keyboard" && answerthree === "righty" && answerfour === "ram" && answerfive === "six-months") {
      $("#finalresult").text(resultone)
    } else if (answerone === "air" && answertwo === "mouse" && answerthree === "lefty" && answerfour === "gpu" && answerfive === "year") {
      $("#finalresult").text(resultone)
    } else if (answerone === "earth" && answertwo === "keyboard" && answerthree === "righty" && answerfour === "ram" && answerfive === "further") {
      $("#finalresult").text(resultone)
    } else if (answerone === "water" && answertwo === "keyboard" && answerthree === "righty" && answerfour === "ram" && answerfive === "six-months") {
      $("#finalresult").text(resulttwo)
    } else if (answerone === "air" && answertwo === "mouse" && answerthree === "lefty" && answerfour === "gpu" && answerfive === "year"){
      $("#finalresult").text(resulttwo)
    } else if (answerone === "earth" && answertwo === "keyboard" && answerthree === "righty" && answerfour === "ram" && answerfive === "further") {
      $("#finalresult").text(resulttwo)
    } else if (answerone === "air" && answertwo === "mouse" && answerthree === "lefty" && answerfour === "gpu" && answerfive === "year") {
      $("#finalresult").text(resultthree)
    } else if (answerone === "earth" && answertwo === "keyboard" && answerthree === "righty" && answerfour === "ram" && answerfive === "further") {
      $("#finalresult").text(resultthree)
    } else if (answerone === "water" && answertwo === "keyboard" && answerthree === "righty" && answerfour === "ram" && answerfive === "six-months") {
      $("#finalresult").text(resultthree)
    } else if (answerone === "fire" && answertwo === "mouse" && answerthree === "lefty" && answerfour === "gpu" && answerfive === "month") {
      $("#finalresult").text(resultthree)
    } else {$("#finalresult").text("test")}
    
    

    
    $("#result").show();
    
  event.preventDefault();
  });
});