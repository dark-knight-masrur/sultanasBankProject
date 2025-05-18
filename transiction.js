//add money to account

//step: 1 added a event handler on add money button
document.getElementById('btntransfermoney').addEventListener('click', function (event) {
    event.preventDefault();//to prevent loading the page

    //step 2: checking the amount and password
    const transfermoneyField = getInputElementById('transfermoney-field')
    const transfermoneyPinField = getInputElementById('transfermoney-pin-field')

    //step 3: verifying the pin and the amount

    if (transfermoneyPinField === 5392) {

        // get the current balance 
        const currentBalance = getTextFeildById('current-balance')
        console.log(currentBalance);


        // step 5: add new amount to current balance 



        const totalUpdatedBalance2 = currentBalance - transfermoneyField;
        console.log(totalUpdatedBalance2);


        //update the balance by dom in available balance
        document.getElementById('current-balance').innerText = totalUpdatedBalance2;

    } else {
        alert('wrong ammount or pin')
    }
})
