//add money to account

//step: 1 added a event handler on add money button
document.getElementById('btnAddMoney').addEventListener('click', function (event) {
    event.preventDefault();//to prevent loading the page

    //step 2: checking the amount and password
    const addMoneyField = getInputElementById('add-money-field')
    const addPinField = getInputElementById('add-pin-field')
    console.log(addMoneyField, addPinField);

    //preventing the text without number
    if (isNaN(addMoneyField)) {
        alert('Go to hell, Put number')
        return;
    }




    //step 3: verifying the pin and the amount

    if (addPinField === 5392) {

        // get the current balance 
        const currentBalance = getTextFeildById('current-balance')
        console.log(currentBalance);

        if (addMoneyField > 100000) {
            alert('itna paisa hum tumko nehi denge, ab vago ehase')
            return;
        }

        // step 5: add new amount to current balance 


        const totalUpdatedBalance = addMoneyField + currentBalance;
        console.log(totalUpdatedBalance);


        //update the balance by dom in available balance
        document.getElementById('current-balance').innerText = totalUpdatedBalance;

        //update to transiction history
        const div = document.createElement('div')

        div.innerHTML = `
        <div class="bg-purple-500 text-center">
                    <h2 class="text-4xl ">add money</h2>
                    <p class="text-white">Added Money: ${addMoneyField}, Total Updated Balance: ${totalUpdatedBalance}
                    </p>
        </div>
                `
        document.getElementById('transiction-container').appendChild(div)

    } else {
        alert('wrong ammount or pin')
    }
})
