
document.addEventListener('DOMContentLoaded',()=>{
    //! select the elements

const calculateBtn=document.getElementById('calculateBtn');
const amountInput=document.getElementById('amount');
const interestInput=document.getElementById('interest');
const yearsInput=document.getElementById('years');
const monthlyPaymentOutput=document.getElementById('monthly');
const totalPaymentOutput=document.getElementById('total');
const totalInterestOutput=document.getElementById('totalInterest');


//Functiont to calculate the loan
function calculatedLoan(){
    const principal=parseFloat(amountInput.value);
    const interest=parseFloat(interestInput.value)/100/12;
    const payments=parseFloat(yearsInput.value)*12;
    if(isNaN(principal)||isNaN(interest)||isNaN(payments)){
    alert('Please enter valid numbers');
    return;
}

    //Monthly payment
const x=Math.pow(1+interest,payments);
const monthly=(principal*x*interest)/(x-1);
    if(isFinite(monthly)){
    monthlyPaymentOutput.innerText=monthly.toFixed(2);
    totalPaymentOutput.innerText=(monthly*payments).toFixed(2);
    totalInterestOutput.innerText=((monthly*payments)-principal).toFixed(2);
}else{
    alert('Please check your numbers');
}
}
calculateBtn.addEventListener('click',calculatedLoan);
})

