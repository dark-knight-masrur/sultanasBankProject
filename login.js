document.getElementById('btnLogin').addEventListener('click', function (event) {
    event.preventDefault();//to prevent loading the page

    const phoneNumber = document.getElementById('phoneNumber').value

    const pinNumber = document.getElementById('pinNumber').value

    //this is not right way to check the pin number'

    if (phoneNumber === '01560059758' && pinNumber === '5392') {
        window.location.assign('./home.html')
    }
    else {
        alert('wrong phone number or pin')
    }

})