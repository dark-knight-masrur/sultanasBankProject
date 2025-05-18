//add money to account

//step: 1 added a event handler on add money button
document.getElementById('btnCashout').addEventListener('click', function (event) {
    event.preventDefault();//to prevent loading the page

    //step 2: checking the amount and password
    const cashoutField = document.getElementById('cashout-field').value
    const cashoutPinField = document.getElementById('cashout-pin-field').value

    //step 3: verifying the pin and the amount

    if (cashoutPinField === '5392') {

        // get the current balance 
        const currentBalance = document.getElementById('current-balance').innerText
        console.log(currentBalance);


        // step 5: add new amount to current balance 

        const cashoutFieldNumber = parseFloat(cashoutField) //converting the string to number

        console.log(cashoutFieldNumber);

        const currentBalanceNumber = parseFloat(currentBalance)//converting the string to number
        console.log(currentBalanceNumber);

        const totalUpdatedBalance2 = currentBalanceNumber - cashoutFieldNumber;
        console.log(totalUpdatedBalance2);


        //update the balance by dom in available balance
        document.getElementById('current-balance').innerText = totalUpdatedBalance2;

    } else {
        alert('wrong ammount or pin')
    }
})
