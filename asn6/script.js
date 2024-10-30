function myFunction() {
    var x = document.getElementById("myForm");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      if (x.elements[i].value) {
        text += x.elements[i].value + "<br>";
      }
    }
    if (text) {document.getElementById("dataHeader").style.display = "block";
      document.getElementById("output").innerHTML = text;} 
    else {
      document.getElementById("dataHeader").style.display = "none";
      document.getElementById("output").innerHTML = "";}
    }