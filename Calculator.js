let outputScreen = document.getElementById("output screen");

function Display(num) {
  outputScreen.value += num;
}
function Claculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid Entry");
  }
}
function Clear() {
  outputScreen.value = "";
}
function DEL() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
