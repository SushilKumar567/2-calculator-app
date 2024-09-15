let display = document.querySelector("#display");

const toDisplay = (value) => {
  display.value = display.value + value;
};

const clearDisplay = () => {
  display.value = "";
};

const deleteLast = () => {
  display.value = display.value.slice(0, -1);
};

const calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
