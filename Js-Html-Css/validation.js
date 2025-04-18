


function checkAll(){

//   let uname =  document.getElementById("fname").value;
  let uname =  document.myform.fname.value;
  let uedu = document.myform.edu;
   if(uname.trim() === ""){
    window.alert("Full Name is Required");
    document.getElementById("fname").focus();
    return false;
   }

   if(!uname.trim().match("^[a-zA-Z]{3,25}$")){
    window.alert("Full Name Must Contains only Characters and min-3 and max-25");
    document.getElementById("fname").focus();
    return false;
   }

   if(uedu[0].checked==false && uedu[1].checked==false && uedu[2].checked==false && uedu[3].checked==false){
    window.alert("Please Enter your Qualifications");
    return false;

   }


}