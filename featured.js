//show the cashout feild when i clicked cashout button
document.getElementById('btn-show-cashout-clicked').addEventListener('click', function (event) {

    // step 1: show cashout button clicked 
    document.getElementById('cashout-form').classList.remove('hidden')

    // step 2: hide add money form clicked 
    document.getElementById('addmoney-form').classList.add('hidden')

})


//show the add money feild when i clicked add money button
document.getElementById('btn-show-addmoney-clicked').addEventListener('click', function (event) {

    // step 1: show cashout button clicked 
    document.getElementById('addmoney-form').classList.remove('hidden')

    // step 2: hide add money form clicked 
    document.getElementById('cashout-form').classList.add('hidden')

})