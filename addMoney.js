//add money to account

//step: 1 added a event handler on add money button
document.getElementById('btnAddMoney').addEventListener('click', function (event) {
    event.preventDefault();//to prevent loading the page

    //step 2: checking the amount and password
    const addMoneyField = getInputElementById('add-money-field')
    const addPinField = getInputElementById('add-pin-field')
    console.log(addMoneyField, addPinField);


    //step 3: verifying the pin and the amount

    if (addPinField === 5392) {

        // get the current balance 
        const currentBalance = getTextFeildById('current-balance')
        console.log(currentBalance);


        // step 5: add new amount to current balance 


        const totalUpdatedBalance = addMoneyField + currentBalance;
        console.log(totalUpdatedBalance);


        //update the balance by dom in available balance
        document.getElementById('current-balance').innerText = totalUpdatedBalance;

        //update to transiction history

        const p = document.createElement('p')
        p.innerText = `Added Money: ${addMoneyField}, Total Updated Balance: ${totalUpdatedBalance}`;
        document.getElementById('transiction-container').appendChild(p)

    } else {
        alert('wrong ammount or pin')
    }
})
