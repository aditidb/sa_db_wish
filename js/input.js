function myFunc() {
  var input = document.getElementById("input_a");
  check_a = input.value;
  check_a = check_a.toLowerCase();
  console.log(check_a);
  if (check_a == "shraddha" || check_a == "pigu") {
    window.location = "../files/wish.html";
  } else if (check_a == "craker") {
    window.location = "../files/wish1.html";
  } else {
    window.location = "../files/index.html";
  }
}
