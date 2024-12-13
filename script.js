let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let checkbox = document.getElementById("checkbox");
let submit = document.getElementById("submit");
submit.addEventListener("click",(e)=>{
	e.preventDefault();
	if(checkbox.checked){
		localStorage.setItem("Username",username);
		localStorage.setItem("Password",password);
	}
	else{
		localStorage.removeItem("Username");
		localStorage.removeItem("Password");
	}
	if(username == localStorage.getItem("Username")){
		alert(`Login as existing user.`);
	}
	else{
		alert(`Logged in as.`);
	}
	
});