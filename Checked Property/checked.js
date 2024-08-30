const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentRsult = document.getElementById("paymentRsult");

mySubmit.onclick = ()=>{
    if(myCheckBox.checked){
        subResult.textContent = `you are subscribed....` ;
    }
    else{
        subResult.textContent=`you are not subscribed....`;
    }

    if(visaBtn.checked){
        paymentRsult.textContent = `you are paying through visa..` ;
    } else if(masterCardBtn.checked){
        paymentRsult.textContent = `You are paying through mastercard` ;        
    } else if(payPalBtn.checked){
        paymentRsult.textContent = `you are paying through paypal`
    } else{
        paymentRsult.textContent = `you havnt selected the transaction option..`;
    }
}