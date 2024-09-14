	// Fill in the necessary validation here

let validate = () => {
	let num = document.getElementById("fName");
	let errorMsg = document.getElementById("fNameErrorMsg");
	if(num.value.length == 0){
	  num.classList = "form-control is-invalid";
	  errorMsg.classList = "text-danger";
	}
	else{
	  num.classList = "form-control";
	  errorMsg.classList = "d-none text-danger";
	  console.log("All Good!");
	}
	let num1 = document.getElementById("lName");
	let errorMsg1 = document.getElementById("lNameErrorMsg");
	if(num1.value.length == 0){
	  num1.classList = "form-control is-invalid";
	  errorMsg1.classList = "text-danger";
	}
	else{
	  num1.classList = "form-control";
	  errorMsg1.classList = "d-none text-danger";
	  console.log("All Good!");
	}


	let num2 = document.getElementById("email");
	let errorMsg2 = document.getElementById("emailErrorMsg");
	if(num2.value.length == 0){
	  num2.classList = "form-control is-invalid";
	  errorMsg2.classList = "text-danger";
	}
	else{
	  num2.classList = "form-control";
	  errorMsg2.classList = "d-none text-danger";
	  console.log("All Good!");
	}


	let num3 = document.getElementById("subject");
	let errorMsg3 = document.getElementById("subjectErrorMsg");
	if(num3.value.length == 0){
	  num3.classList = "form-control is-invalid";
	  errorMsg3.classList = "text-danger";
	}
	else{
	  num3.classList = "form-control";
	  errorMsg3.classList = "d-none text-danger";
	  console.log("All Good!");
	}

	
	let num4 = document.getElementById("message");
	let errorMsg4 = document.getElementById("messageErrorMsg");
	if(num4.value.length == 0){
	  num4.classList = "form-control is-invalid";
	  errorMsg4.classList = "text-danger";
	}
	else{
	  num4.classList = "form-control";
	  errorMsg4.classList = "d-none text-danger";
	  console.log("All Good!");
	};
};
