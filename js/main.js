function validateForm() {
  // object/success
  let formData = {};

  // array/error
  let errorLogs = [];

  let successCount = 0;


  let fnameValue = document.getElementById("fname").value;
  let emailValue = document.getElementById("email").value;
  let messageValue = document.getElementById("message").value;

  // validate fullName
  if(fnameValue === "" || fnameValue.match(/^\s*$/)){
  	errorLogs.push("empty fullname");
  }
  
  else{
  	formData.firstName = fnameValue;
    successCount += 1;
  }

  // validate email
  if(emailValue === "" || emailValue.match(/^\s*$/)){
  	errorLogs.push("empty email");
  }

  else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue) === false){
    errorLogs.push("invalid email");
  }

  else{
  	formData.email = emailValue;
    successCount += 1;
  }

  // validate message
  if(messageValue === "" || messageValue.match(/^\s*$/)){
    errorLogs.push("empty message");

  }
  else{
    formData.message = messageValue;
    successCount += 1;
  }


  // display feedback
  // let successtext = "";
  // for (let x in formData) {
  //   successtext += formData[x] + " ";
  // };

  if(successCount === 3){
    document.getElementById("successLogs").style.display = 'block';
    document.getElementById("successLogs").innerHTML = `Thank you for reaching out, ${formData.firstName}! <br><br> We have received your message:<br> "${formData.message}" <br> <br> Our team will review your message and get back to you at ${formData.email} shortly.`;

    document.getElementById("errorLogs").style.display = 'none';

    document.getElementById("fname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';

    console.log(`${formData.firstName} | ${formData.email} | ${formData.message}`)

  }

  else{
    document.getElementById("errorLogs").style.display = 'block';
    document.getElementById("errorLogs").innerHTML = errorLogs.join(' | ');

    document.getElementById("successLogs").style.display = 'none';
    console.log(`${errorLogs}`)


  }

}