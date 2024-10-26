function sendMail(){
    let parms = {
        name : document.getElementById('inputFirstName').value,
        subject : document.getElementById('subject').value,
        email : document.getElementById('inputEmail').value,
        message : document.getElementById('message').value,
    }
    console.log(parms);

    emailjs.send('service_zlz4mh7', 'template_jtevi6t', parms).then(alert('Email Sent Success!!!'))
}

// fuul name
// email addrss
// mbile 
// subject
//  your message 