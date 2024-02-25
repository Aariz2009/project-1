const name=document.querySelector("#name")
const mail=document.querySelector("#EMail")
const password=document.querySelector("#pass")
const cpassword=document.querySelector("#cpass")
const cnum=document.querySelector("#contact")
const form=document.querySelector("#form1")

function validate() {
	if (name.value="" || name.value==null){
		var	n=document.querySelector("#show")
		n.innerText="N.B: Name is required"
		return false
	}
	else if(mail.value=="" || mail.value==null){
		var n=document.querySelector("#show")
		n.innerText="N.B.: E-Mail is required"
		return false
	}
	else if(password.value.length<8){
		var n=document.querySelector("#show")
		n.innerText="N.B.: Password must be 8 characters or more"
		return false
	}
	else if(cpassword.value!=password.value){
		var n=document.querySelector("#show")
		n.innerText="N.B.: Password didn't match"
		return false
	}
	else if(cnum.value.length!=11){
		var n=document.querySelector("#show")
		n.innerText="N.B.: Contact Number must be 11 digits"
		return false
	}
}