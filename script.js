var state = {
  previousOperand: "",
  currentOperand: "",
  operator: "",
};

//create calculator body
const calculatorBody = document.createElement("div");
calculatorBody.setAttribute("class", "wrapper container");
const innerElem = document.createElement("div");
innerElem.setAttribute("class", "col inner-elements");
innerElem.innerHTML = `
    <div class="row logo">calculator</div>
    <div class=" row display">
    <div class="previous-op">${state.previousOperand}</div>
    <div class="current-op">${state.currentOperand}</div>
    </div>
    <div class=" row calc-buttons">    
        <div class="col"><button class="num-button">7</button></div>
        <div class="col"><button class="num-button">8</button></div>
        <div class="col"><button class="num-button">9</button></div>
        <div class="col"><button onclick="opSubButtonClicked()" class="op-button sub">-</button></div>
    </div>
        <div class=" row calc-buttons">    
        <div class="col"><button class="num-button">4</button></div>
        <div class="col"><button class="num-button">5</button></div>
        <div class="col"><button class="num-button">6</button></div>
        <div class="col"><button onclick="opAddButtonClicked()" class="op-button add">+</button></div>
    </div>
        <div class=" row calc-buttons">    
        <div class="col"><button class="num-button">1</button></div>
        <div class="col"><button class="num-button">2</button></div>
        <div class="col"><button class="num-button">3</button></div>
        <div class="col"><button onclick="opDivButtonClicked()" class="op-button div">/</button></div>
    </div>
    </div>
        <div class=" row calc-buttons">    
        <div class="col"><button class="dot-button">.</button></div>
        <div class="col"><button class="num-button">0</button></div>
        <div class="col"><button onclick="opModButtonClicked()" class="op-button mod">%</button></div>
        <div class="col"><button onclick="opMulButtonClicked()" class="op-button mul">X</button></div>
    </div>
    </div>
        <div class=" row calc-buttons">    
        <div class="col"><button class="delete-button"><-</button></div>
        <div class="col"><button class="clear-button">C</button></div>
        <div class="col-6"><button onClick="result()" class="result-button">=</button></div>
    </div>

    `;

document.body.appendChild(calculatorBody);
calculatorBody.append(innerElem);

const numberButton = document.querySelectorAll(".num-button");
const disp = document.querySelector(".display");
const prevOp = document.querySelector(".previous-op");
const currentOp = document.querySelector(".current-op");

numberButton.forEach((button) => {
  button.onclick = function refreshDisp() {
    state.currentOperand = state.currentOperand + button.innerText;
    currentOp.innerText = state.currentOperand;
  };
});

const clearButton = document.querySelector(".clear-button");
clearButton.onclick = () => {
  currentOp.innerText = "";
  prevOp.innerText = "";
  state.currentOperand = "";
  state.previousOperand = "";
};

function result() {
  state.currentOperand = currentOp.innerText;
  
  let res;
  switch (state.operator) {
    case "+":
        console.log(state.currentOperand, state.previousOperand, state.operator)
      res = +state.previousOperand + +state.currentOperand;
      console.group(res);
      refreshDisp(res);
      break;
    case "-":
      res = +state.previousOperand - +state.currentOperand;
      refreshDisp(res);
      break;
    case "/":
      res = +state.previousOperand / +state.currentOperand;
      refreshDisp(res);
      break;
    case "*":
      res = +state.previousOperand * +state.currentOperand;
      refreshDisp(res);
      break;
    case "%":
      res = +state.previousOperand % +state.currentOperand;
      refreshDisp(res);
      break;
  }
}

function refreshDisp(res) {
    prevOp.innerText = prevOp.innerText + currentOp.innerText;
  currentOp.innerText = res;
}

//functions for performing operations
function opAddButtonClicked() {
    console.log("addition")
  operation("+");
}

function opSubButtonClicked() {
  operation("-");
}

function opDivButtonClicked() {
  operation("/");
}

function opMulButtonClicked() {
  operation("*");
}
function opModButtonClicked() {
  operation("%");
}

function operation(opr) {
  state.operator = opr;
  state.previousOperand = state.currentOperand;
  console.log(state.previousOperand);
  state.currentOperand = "";
  prevOp.innerText = state.previousOperand + state.operator;
  currentOp.innerText = "";
}
