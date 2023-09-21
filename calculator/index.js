let display=document.getElementById('display');
let currentinput='';
let currentoperator='';
let prevalue =0;

function data(value){
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentinput) {
            prevalue = parseFloat(currentinput);
           currentinput = '';
        }
        currentoperator = value;
        display.innerText=currentoperator;
    } else {
        currentinput += value;
        display.innerText = currentinput;
    }
  //  console.log(currentinput);
}
function clearDisplay(){
   currentinput='';
   currentoperator='';
   prevalue =0;
   display.innerText='0';
}
function calculate(){
  if(currentinput == ''){
    clearDisplay();
    return;
  };
  const currentvalue=parseFloat(currentinput);
  switch(currentoperator){
    case '+':
      prevalue += currentvalue;
      break;
     case '-':
        prevalue -= currentvalue;
        break;
      case '*':
          prevalue *= currentvalue;
          break;
        case '/':
            if(currentvalue !=0){
              prevalue /= currentvalue;
            }else{
                alert("Can't divide by zero");
                clearDisplay();
                return;
            }
        break;
         default:
             prevalue= currentvalue;
             break;

  }
  display.innerText=prevalue;
  currentinput='';
  currentoperator='';
}
clearDisplay();