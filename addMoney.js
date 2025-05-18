//add money to account

//step: 1 added a event handler on add money button
document.getElementById('btnAddMoney').addEventListener('click', function (event) {
    event.preventDefault();//to prevent loading the page

    //step 2: checking the amount and password
    const addMoneyField = document.getElementById('add-money-field').value
    const addPinField = document.getElementById('add-pin-field').value

    //step 3: verifying the pin and the amount

    if (addPinField === '5392') {

        // get the current balance 
        const currentBalance = document.getElementById('current-balance').innerText
        console.log(currentBalance);


        // step 5: add new amount to current balance 

        const addMoneyFieldNumber = parseFloat(addMoneyField) //converting the string to number

        console.log(addMoneyFieldNumber);

        const currentBalanceNumber = parseFloat(currentBalance)//converting the string to number
        console.log(currentBalanceNumber);

        const totalUpdatedBalance = addMoneyFieldNumber + currentBalanceNumber;
        console.log(totalUpdatedBalance);


        //update the balance by dom in available balance
        document.getElementById('current-balance').innerText = totalUpdatedBalance;

    } else {
        alert('wrong ammount or pin')
    }
})
