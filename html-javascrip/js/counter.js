const number=document.getElementById('number');
const increase=document.getElementById('increase')
const decrease=document.getElementById('decrease')

const counter=parseInt(number.innerText,10);

 increase.onclick=()=>{
  number.innerText=counter+1;
}
 decrease.onclick=()=>{
  number.innerText=counter-1;
}
