//add money to account


//step: 1 added a event handler on add money button
document.getElementById('btnCashout').addEventListener('click', function (event) {
    event.preventDefault();//to prevent loading the page

    //step 2: checking the amount and password
    const cashoutField = getInputElementById('cashout-field')
    const cashoutPinField = getInputElementById('cashout-pin-field')

    //preventing the text without number
    if (isNaN(cashoutField)) {
        alert('Go to hell, Put number')
        return;
    }

    //step 3: verifying the pin and the amount

    if (cashoutPinField === 5392) {

        // get the current balance 
        const currentBalance = getTextFeildById('current-balance')
        console.log(currentBalance);

        if (cashoutField > currentBalance) {
            alert('apni awkaat pe raho, ye tumhari awkat k bahar hain')
            return;
        }
        // step 5: add new amount to current balance 



        const totalUpdatedBalance2 = currentBalance - cashoutField;
        console.log(totalUpdatedBalance2);


        //update the balance by dom in available balance
        document.getElementById('current-balance').innerText = totalUpdatedBalance2;

        //add the transiction history to button of transiction

        const div = document.createElement('div')

        div.innerHTML = `
        <div class="bg-yellow-500 text-center">
                    <h2 class="text-4xl ">Cash out</h2>
                    <p class="text-red-600">Added Money: ${cashoutField}, Total Updated Balance: ${totalUpdatedBalance2}
                    </p>
        </div>
                `
        document.getElementById('transiction-container').appendChild(div)


        // Clear input fields after successful transaction

        // ★ Dynamic Field Clearing ★
        clearInputFields('cashout-field', 'cashout-pin-field');
    } else {
        alert('wrong ammount or pin')
    }
})
