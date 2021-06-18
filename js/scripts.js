$(document).ready(function) {
  $("form#questions").submit(function(event) {
    const name = $("input#name").val();
    const answerone = $("select#question-one").val();
    const answertwo = $("select#question-two").val();
    const answerthree = $("select#question-three").val();
    const answerfour = $("select#question-four").val();
    const answerfive = $("select#question-five").val();

    const resultone = ("Ruby");
    const resulttwo = ("JavaScript");
    const resultthree = ("Python");

    if (answerone === fire && answertwo == mouse && answerthree == lefty && answerfour == gpu && answerfive == month) {
      Ruby;
    }
    if (answerone === water && answertwo == keyboard && answerthree == righty && answerfour == ram && answerfive == six-months) {
      JavaScript;
    }
    if (answerone === air && answertwo == mouse && answerthree == lefty && answerfour == gpu && answerfive == year) {
      Python;
    }
    if (answerone === earth && answertwo == keyboard && answerthree == righty && answerfour == ram && answerfive == further) {
      Ruby;
    }

    $("#result").text();
    $("finalresult").show();
    
    event.preventDefault();
  });
};