window.addEventListener('load', start);
// global variables
var redValue = 0;
var greenValue = 0;
var blueValue = 0;

// currentIndex = null;

function start() {
  /*function changeColor(event) {

    if (index === 0) {
      // red
    } else if (index === 1) {
      // green
    } else {
      // blue
    }
    
    divColor.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  }*/

  function changeRed(event) {
    redValue = parseInt(event.target.value);
    divColor.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    redText.value = redValue;
  }

  function changeGreen(event) {
    greenValue = parseInt(event.target.value);
    divColor.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    greenText.value = greenValue;
  }

  function changeBlue(event) {
    blueValue = parseInt(event.target.value);
    divColor.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    blueText.value = blueValue;
  }

  var divColor = document.querySelector('#colored-area');

  var redText = document.querySelector('#red-text');
  var greenText = document.querySelector('#green-text');
  var blueText = document.querySelector('#blue-text');

  var redRange = document.querySelector('#red-range');
  var greenRange = document.querySelector('#green-range');
  var blueRange = document.querySelector('#blue-range');

  redRange.value = 0;
  greenRange.value = 0;
  blueRange.value = 0;

  divColor.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  redRange.addEventListener('change', changeRed);
  greenRange.addEventListener('change', changeGreen);
  blueRange.addEventListener('change', changeBlue);
}

// Criar um index para cada um dos elementos
/*
function activateInput() {
  for (var i = 0; i < 3; i++) {}
}*/
