function checkAll() {
  let uname = document.myform.fname.value.trim();
  let uedu = document.myform.edu;
  let uemail = document.myform.email.value.trim();
  let upass = document.myform.password.value.trim();

  if (uname === "") {
    window.alert("Full Name is Required");
    document.getElementById("fname").focus();
    return false;
  }

  if (!/^[a-zA-Z]{3,25}$/.test(uname)) {
    window.alert("Full Name must contain only letters (min 3, max 25 characters)");
    document.getElementById("fname").focus();
    return false;
  }

  if (
    !uedu[0].checked &&
    !uedu[1].checked &&
    !uedu[2].checked &&
    !uedu[3].checked
  ) {
    window.alert("Please select your Qualification");
    return false;
  }

  if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{9,125}$/.test(uemail)) {
    window.alert("Invalid Email Format");
    document.getElementById("email").focus();
    return false;
  }

  if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(upass)) {
    window.alert("Password must be at least 8 characters, contain letters, numbers, and one special character");
    document.getElementById("password").focus();
    return false;
  }

  return true; // if all validations passed
}
