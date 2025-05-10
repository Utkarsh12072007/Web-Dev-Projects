var disp = document.querySelector('#display');
var inp = document.querySelector('input');
var buttons = document.querySelectorAll('button');
window.onload = function () {
    document.querySelector("input").focus();
    toggleCaret();
};
document.addEventListener("click", function () {
    document.querySelector("input").focus();
    toggleCaret();
});
  
function toggleCaret() {
  if(inp.value.length >= 7){
      inp.classList.remove('text-4xl');
      inp.classList.add('text-2xl')
  }
  else {
      inp.classList.remove('text-2xl');
      inp.classList.add('text-4xl');
  }
  var nothing;
    if (inp.value === "") {
      inp.classList.add("caret-transparent");
    } else{
      inp.classList.remove("caret-transparent");
    }
    
}
inp.addEventListener("input",toggleCaret);
inp.addEventListener('keydown',(e)=>{
    const allowedKeys = [
        "0","1","2","3","4","5","6","7","8","9",
        "+","-","*","/","%","(",")",".",
        "Backspace","Delete","ArrowLeft","ArrowRight","Enter"
      ];
  
      if (!allowedKeys.includes(e.key)) {
        e.preventDefault();  // Block other keys (like alphabets)
      }
      if(e.key == 'Enter'){
        inp.value = eval(inp.value);
      }
})
function addOperator(op) {
  const value = inp.value;
  const operators = ['+', '-', '×', '÷'];

  if (operators.includes(value.slice(-1))) {
    // Replace the last operator
    inp.value = value.slice(0, -1) + op;
  } else {
    // Append normally
    inp.value += op;
  }
}
buttons.forEach(button => {
  button.addEventListener("click", () => {
    if(button.textContent !== '='){
      inp.value += button.textContent;
    }
  });
});
var multi = document.querySelector('#multiply');
var divi = document.querySelector('#divide');
var backspace = document.querySelector('#del');
var ac = document.querySelector('#AC');
var equal = document.querySelector('#et');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var per = document.querySelector('#per');
multi.addEventListener('click',()=>{
  addOperator('*')
})
divi.addEventListener('click',()=>{
  addOperator('/');
})
plus.addEventListener('click',()=>{
  inp.value = inp.value.slice(0,-1);
  addOperator('+');
})
minus.addEventListener('click',()=>{
   inp.value = inp.value.slice(0,-1);
  addOperator('-');
})
per.addEventListener('click',()=>{
   inp.value = inp.value.slice(0,-1);
  addOperator('%');
})
ac.addEventListener('click',()=>{
  inp.value = '';
})

backspace.addEventListener('click',()=>{
  inp.value = inp.value.slice(0,-1);
})

equal.addEventListener('click',()=>{
  inp.value = eval(inp.value);
})
