// utilites files normally used for shared function. that's call don't repeat youself (dry) method,
// in this process you don't have to repeat the code again and again.

// shared function for text of form
function getInputElementById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}

// shared function for text of tag
function getTextFeildById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue)
    return textNumber;
}

// shared function for action button
function showSectionById(id) {
    //hide all idd
    document.getElementById('addmoney-form').classList.add('hidden')
    document.getElementById('cashout-form').classList.add('hidden')
    document.getElementById('transfermoney-form').classList.add('hidden')
    // document.getElementById('getbonus-form').classList.add('hidden')
    // document.getElementById('payBill-form').classList.add('hidden')
    // document.getElementById('transiction-form').classList.add('hidden')

    //show that id that needed
    document.getElementById(id).classList.remove('hidden')
}