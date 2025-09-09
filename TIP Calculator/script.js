function calculateTip(){
    const billAmount=parseFloat(document.getElementById("amount").value);
    const service=parseFloat(document.getElementById("rating").value);
    const people=parseFloat(document.getElementById("numberOfPeople").value);
    const btn=document.getElementById("button");
    if(!isFinite(billAmount) || billAmount<=0){
        alert("Please enter a valid bill amount");
        return;
    }
    if(people<1){
        alert("please enter at least 1 person");
        return;
    }

        const tipAmount=billAmount*service;
        const totalAmount=billAmount+tipAmount;
        const perPerson=totalAmount/people;
        const tipPerPerson=tipAmount/people;
        document.getElementById("tip").textContent=`$${tipAmount.toFixed(2)}`;
        document.getElementById("Totalbill").textContent=`$${totalAmount.toFixed(2)}`;
        document.getElementById("PP").textContent=`$${perPerson.toFixed(2)}`;
        document.getElementById("tpp").textContent=`$${tipPerPerson.toFixed(2)}`;

    

}
document.getElementById("button").addEventListener("click",calculateTip);