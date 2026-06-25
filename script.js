function writeInjs(values) {
  let last = "";
  let inputdispay = document.querySelector("#input-calculator");
  if (values == "=") {
    call(inputdispay.value);
  } else if (values == "clear") {
    inputdispay.value = "";
  } else {
    last = inputdispay.value;
    if (
      (last.at(-1) === "+" ||
        last.at(-1) === "-" ||
        last.at(-1) === "*" ||
        last.at(-1) === "/") &&
      (values === "+" || values === "-" || values === "*" || values === "/")
    ) {
      inputdispay.value = last.slice(0, -1) + values;
      return;
    } else {
      inputdispay.value += values;
    }
  }
}
function call(inputdisplay) {
  let callculate = eval(inputdisplay);
  if (callculate == Infinity || callculate == -Infinity) {
    callculate = "Error: Division by zero is not allowed.";
    document.querySelector("#input-calculator").style.border = "1px solid red";
  }
  document.querySelector("#input-calculator").value = callculate;
}
