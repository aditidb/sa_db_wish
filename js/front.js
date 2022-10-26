let string = "";
let buttons = document.querySelectorAll(".button");
arr1 = Array.from(buttons);
arr1.forEach((b1) => {
  b1.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      //   string = eval(string);
      //   document.querySelector("input").value = string;
      console.log(string);
      if (string == "1") {
        window.location = "../files/diwali.html";
      } else if (string == "2") {
        window.location = "../files/crackers.html";
      } else if (string == "3") {
        window.location = "../files/wish.html";
      } else if (string == "4") {
        window.location = "../files/wish1.html";
      } else if (string == "5") {
        window.location = "../files/emoji_suprise.html";
      } else if (string == "6") {
        window.location = "../files/wish1.html";
      } else if (string == "7") {
        window.location = "../files/wish.html";
      } else if (string == "8") {
        window.location = "../files/crackers.html";
      } else if (string == "9") {
        window.location = "../files/diwali.html";
      }
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "B") {
      let str = string;
      let arr = str.split("");
      arr.pop();
      console.log(arr);
      join_a = "";
      final = arr.join("");
      console.log(final);
      document.querySelector("input").value = final;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
