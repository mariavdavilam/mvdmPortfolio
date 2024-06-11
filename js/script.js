


function validateForm(){
    var name=getDocumentById("name").value;
    var email=getDocumentById("email").value;
    var message=getDocumentById("message").value;


 Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mv0206dm@gmail.com",
    Password : "C7608267B69D099EEE678CD626E87DF561F0",
    To : 'mv0206dm@gmail.com',
    From : "mv0206dm@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

};