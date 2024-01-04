
//  Get Inputs Elements   
let billInp = document.getElementById("bill-input");
let numOfPeopleInput = document.getElementById("numOfPeople");
// Get P element which should be excecuse when input numOfPeople's value will be 0 
const cantBeZero = document.getElementById("zero")
const cantBeZero1 = document.getElementById("zero1")
// console.log(cantBeZero);
// Text variables  where calculate result should be written
let tipAmount = document.getElementById("tip-amount");
let totalAmount = document.getElementById("total");
let buttons = document.getElementById("button-container");

let reset = document.getElementById("reset")
// console.log(buttons);


let tipValue= 0 
let custom = document.getElementById("Custom")
let bill = 0 ;
let numOfPeople = 0;

buttons.addEventListener("click",(e) => {

  const tipButton = e.target
   tipValue = parseInt(tipButton.textContent)
  

   calcTip()

  if(bill === 0){
  
    billInp.style.outline = "2px solid red";
    cantBeZero.style.color = "red";
    cantBeZero.style.display = "flex";
  }
  if(numOfPeople === 0) {
   
    numOfPeopleInput.style.outline = "2px solid red";
    cantBeZero1.style.display = "block";
    cantBeZero1.style.color = "red";

  }
})


  billInp.addEventListener("input",() => {
    bill = Number(billInp.value);
   
    calcTip()
   if(bill === 0) {
   
      billInp.style.outline = "2px solid red";
      cantBeZero.style.color = "red";
      cantBeZero.style.display = "flex";
    }
    else {
      billInp.style.outline = 'none';
      cantBeZero.style.display = "none";
    }
  })
// NUMOFPEOPLE INPUT EVENT LISTENER . WHEN NUMOFPEOPLE  VALUE IS 0 ERROR SHOULD BE EXSECUSE
  numOfPeopleInput.addEventListener("input",() => {
    numOfPeople = Number(numOfPeopleInput.value)
  
    calcTip()
    if(numOfPeople === 0  ) {
      numOfPeopleInput.style.outline = "2px solid red";
      cantBeZero1.style.display = "flex";
      cantBeZero1.style.color = "red";
    }
    else{
      numOfPeopleInput.style.outline = "none";
      cantBeZero1.style.display = "none";
    }
  })
  function calcTip(){
    let tip = bill * (tipValue / 100) / numOfPeople;
    console.log(tip)
    let total = tip + bill / numOfPeople;
    console.log(total);;
    tipAmount.textContent= `$${tip.toFixed(2)}`;
    totalAmount.textContent = `$${total.toFixed(2)}`;

    if(numOfPeople === 0) {
      tipAmount.textContent= "$0.00";
      totalAmount.textContent = "$0.00";
    }
   }
// Custom value event listener  when custom input receives number it should calculate bill 

custom.addEventListener("input", (event) => {
tipValue = parseInt(event.target.value)

 calcTip()
})




function resetvalues() {
  billInp.value = "";
  numOfPeopleInput.value = "";
  bill = 0
  numOfPeople = 0
  tipAmount.textContent = `$0.00`
  totalAmount.textContent ="$0.00"
  tipValue = 0
  custom.value = ""
}

reset.addEventListener("click",resetvalues) 