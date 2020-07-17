let inputRangeRed = null;
let inputRangeGreen = null;
let inputRangeBlue = null;
let inputValueRed = null;
let inputValueGreen = null;
let inputValueBlue = null;

let redValue = 0, greenValue = 0, blueValue = 0;

window.addEventListener('load', () => {
  inputRangeRed = document.querySelector("#red");
  inputRangeGreen = document.querySelector("#green");
  inputRangeBlue = document.querySelector("#blue");
  inputValueRed = document.querySelector("#inputRed");
  inputValueGreen = document.querySelector("#inputGreen");
  inputValueBlue = document.querySelector("#inputBlue");
  
  intializationValue()
  render();
  configurationEventInput();
})

function configurationEventInput() {
  inputRangeRed.addEventListener('input', (e) => {
    redValue = e.target.value;
    inputValueRed.value = redValue;
    render();
  })

  inputRangeGreen.addEventListener('input', (e) => {
    greenValue = e.target.value;
    inputValueGreen.value = greenValue;
    render();
  })

  inputRangeBlue.addEventListener('input', (e) => {
    blueValue = e.target.value;
    inputValueBlue.value = blueValue;
    render();
  })
}

function intializationValue(){
  inputRangeRed.value = 0;
  inputRangeGreen.value = 0;
  inputRangeBlue.value = 0;
}

function render() {
  let divSquareColor = document.querySelector('.square-color');
  divSquareColor.style.background = `rgb(${ redValue }, ${ greenValue}, ${ blueValue})`;
}