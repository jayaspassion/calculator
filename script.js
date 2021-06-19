console.log("Hello World");

const calculatorBody = document.createElement("div");
console.log("Body Created");
calculatorBody.setAttribute("class", "wrapper container");
const innerElem = document.createElement("div");
innerElem.setAttribute("class", "col inner-elements");
console.log("InnerElements Created");

innerElem.innerHTML = `
    <div class="row logo">calculator</div>
    <div class=" row display">
    <div class="previous-op"></div>
    <div class="current-op"></div>
    </div>
    <div class=" row calc-buttons">    
        <div class="col"><button class="num-button">7</button></div>
        <div class="col"><button class="num-button">8</button></div>
        <div class="col"><button class="num-button">9</button></div>
        <div class="col"><button class="op-button sub">-</button></div>
    </div>
        <div class=" row calc-buttons">    
        <div class="col"><button class="num-button">4</button></div>
        <div class="col"><button class="num-button">5</button></div>
        <div class="col"><button class="num-button">6</button></div>
        <div class="col"><button class="op-button add">+</button></div>
    </div>
        <div class=" row calc-buttons">    
        <div class="col"><button class="num-button">1</button></div>
        <div class="col"><button class="num-button">2</button></div>
        <div class="col"><button class="num-button">3</button></div>
        <div class="col"><button class="op-button div">/</button></div>
    </div>
    </div>
        <div class=" row calc-buttons">    
        <div class="col"><button class="dot-button">.</button></div>
        <div class="col"><button class="num-button">0</button></div>
        <div class="col"><button class="op-button mod">%</button></div>
        <div class="col"><button class="op-button mul">X</button></div>
    </div>
    </div>
        <div class=" row calc-buttons">    
        <div class="col"><button class="delete-button"><-</button></div>
        <div class="col"><button class="clear-button">C</button></div>
        <div class="col-6"><button class="result-button">=</button></div>
    </div>

    `;

//   document.body.appendChild(calculatorBody);
//   calculatorBody.append(innerElem);

document.body.appendChild(calculatorBody);
calculatorBody.append(innerElem);
console.log("Body and Elements appended");

const numberButton = document.querySelectorAll(".num-button");

const disp = document.querySelector(".display");
const prevOp = document.querySelector(".previous-op");
const currentOp = document.querySelector(".current-op");

numberButton.forEach((button) => {
  button.onclick = function refreshDisp() {
    currentOp.innerText = currentOp.innerText + button.innerText;
  };
});

console.log(numberButton);

const clearButton = document.querySelector(".clear-button");
clearButton.onclick = "clear()";

function clear() {
  currentOp.innerText = "";
  prevOp.innerText = "";
}

const opButton = document.querySelectorAll(".op-button");
console.log(opButton);
opButton.forEach((button) => {
  const op = button.innerText;
  console.log(op);
  if (op == "+") {
    button.onclick = () => {
      console.log("Addition");
      currentOp.innerText = "Addition";
    };
  } else if (op == "-") {
    button.onclick = () => {
      console.log("Subtraction");
      currentOp.innerText = "Addition";
    };
  } else if (op == "/") {
    button.onclick = () => {
      currentOp.innerText = "Addition";
    };
  } else if (op == "%") {
    button.onclick = () => {
      currentOp.innerText = "Addition";
    };
  } else {
    button.onclick = () => {
      currentOp.innerText = "Addition";
    };
  }
});
