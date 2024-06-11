document.getElementById("sendEmailButton").addEventListener("click", function() {
    const name = document.getElementById("idName").value;
    const email = document.getElementById("idEmail").value;
    const message = document.getElementById("idMessage").value;
    

    if (!name || !email || !message) {
        alert("Please review the fields in the form.");
        alert
        return;
    }

    Email.send({
        SecureToken: "c505b644-bb6c-4a12-9327-a2af17510535",
        To: "mv0206dm@gmail.com",
        From: "mv0206dm@gmail.com",
        Subject: `New contact from ${name}`,
        Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
    }).then(
        message => alert("Email sent successfully!")
    ).catch(
        error => alert("Failed to send email: " + error)
    );
});