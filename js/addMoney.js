document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = document.getElementById('add-money-input').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pin = document.getElementById('add-money-pin').value;
    const pinNumber = parseFloat(pin);
    
    if(pinNumber === 1111){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Wrong password')
    }
})