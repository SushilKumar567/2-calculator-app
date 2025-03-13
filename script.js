let input = document.querySelector("#display");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.textContent;

    try {
      if (value == "=") {
        string = eval(string);
        input.value = string;
      } else if (value == "AC") {
        string = "";
        input.value = string;
      } else if (value == "Del") {
        string = string.slice(0, -1);
        input.value = string;
      } else {
        string += value;
        input.value = string;
      }
    } catch (error) {
      input.value = "Error";
      string = "";
    }
  });
});
