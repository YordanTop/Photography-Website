let countFlag = 0;

class ParentField{

	constructor(name){
	   let err = document.getElementById("err-text");
      this.name=document.getElementById(name);
	}

    checkFields(){
    if(this.name.value == ""){
       err.innerHTML = "You forgot to enter your data in the fields.";
       countFlag++;
       return false
    }
    return true;
}

}

class NameField extends ParentField{
	constructor(name,fieldName){
		super(name);
        let err = document.getElementById("err-text");
        this.fieldName = fieldName
	}

	checkName(){
		if(this.checkFields() == true && this.name.value.length <= 5){
           err.innerHTML = "The field \""+this.fieldName+"\" should be filled with more than a 5 letters, not like your input \""+this.name.value+"\"."
           countFlag++;
		}
		
	}
}

let firstName = new NameField("fname", "First name");
let lastName = new NameField("lname", "Last name");
let submit = document.getElementById("contact-form");
let textArea = new ParentField("exampleFormControlTextarea1");

submit.addEventListener("submit", (event) => {

firstName.checkName();
lastName.checkName();
textArea.checkFields();

if(countFlag > 0){
		event.preventDefault();
      countFlag=0;
}
});

