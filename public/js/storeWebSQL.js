function enterData() {
  var name = localStorage.getItem("name");
  var age = localStorage.getItem("age");
  var gender = localStorage.getItem("gender");
  var photo = localStorage.getItem("photo");
  var medics = localStorage.getItem("medics");
  var notes = localStorage.getItem("notes");
  let patient = {
    name,
    age,
    gender,
    photo,
    medics,
    notes
  };
  $.ajax({
    url: "/patients/add",
    type: "POST",
    data: patient,
    dataType: "JSON"
  }).done(function(response) {
    if (response.msg === "") {
      console.log(response);
    } else {
      alert("Error: ", response.msg);
    }
  });
}

function saveLocal1() {
  var name = document.getElementById("fname").value;
  var age = document.getElementById("age").value;
  var e = document.getElementById("gender");
  var gender = e.options[e.selectedIndex].text;
  console.log("name: " + name + ", age: " + age + ", gender: " + gender);
  localStorage.setItem("name", name);
  localStorage.setItem("age", age);
  localStorage.setItem("gender", gender);
}

function saveLocal2() {
  var medics = document.getElementById("medics").value;
  var notes = document.getElementById("notes").value;
  localStorage.setItem("medics", medics);
  localStorage.setItem("notes", notes);
  enterData();
}
