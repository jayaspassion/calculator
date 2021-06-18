window.onload = () => {
  const calculatorBody = document.createElement("div");
  calculatorBody.setAttribute("class", "wrapper container");

  const innerElem = document.createElement("div");
  innerElem.setAttribute("class", "col inner-elements");

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
        <div class="col"><button class="op-button">-</button></div>
    </div>
        <div class=" row calc-buttons">    
        <div class="col"><button class="num-button">4</button></div>
        <div class="col"><button class="num-button">5</button></div>
        <div class="col"><button class="num-button">6</button></div>
        <div class="col"><button class="op-button">+</button></div>
    </div>
        <div class=" row calc-buttons">    
        <div class="col"><button class="num-button">1</button></div>
        <div class="col"><button class="num-button">2</button></div>
        <div class="col"><button class="num-button">3</button></div>
        <div class="col"><button class="op-button">/</button></div>
    </div>
    </div>
        <div class=" row calc-buttons">    
        <div class="col"><button class="">.</button></div>
        <div class="col"><button class="num-button">0</button></div>
        <div class="col"><button class="">%</button></div>
        <div class="col"><button class="op-button">*</button></div>
    </div>
    </div>
        <div class=" row calc-buttons">    
        <div class="col"><button class=""><-</button></div>
        <div class="col"><button class="clear-button">C</button></div>
        <div class="col-6"><button class="">=</button></div>
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
      currentOp.innerText = currentOp.innerText + button.innerText;
    };
  });

  const clearButton = document.querySelector('.clear-button');
  clearButton.onclick = () => {
    disp.innerText = "";
  }

  //   const opButton = document.querySelectorAll(".op-button");

  
};
