let getUsersdata=JSON.parse(localStorage.getItem("usersdata")) || [];
// JSON parse are used to convert Json object to normal object
console.log(getUsersdata);

function Signup(){
    let username=document.getElementById("naam").value;
    let mobile=document.getElementById("phone").value;
    let password=document.getElementById("pass").value;
    if(mobile.length==0){
        alert("Enter mobile number");
    }
    else if(mobile.length!==10){
        alert("mobile number should have 10 digits");
    }
  
    else{
        let userData={
            username:username,
            mobile:mobile,
            password:password
        }
        let users=[...getUsersdata,userData];
        // users.push(userData);
        // JSON.stringy are used to convert object to string
        localStorage.setItem("usersdata",JSON.stringify(users));
        alert("Signup is Successfull");
       window.location.href="Signin.html";
        

    }
    
   
}