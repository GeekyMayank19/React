
var selectedRow = null

function onFormSubmit() {
    debugger
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
    // localStorage.setItem("users", JSON.stringify(formData));
    // document.getElementById("myForm").reset();
}
user=[]
function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["email"] = document.getElementById("email").value;
    formData["password"] = document.getElementById("password").value;
    formData["status"] = document.getElementById("status").value;
    
    user.push(formData);
    

    localStorage.setItem("users", JSON.stringify(user));
    document.getElementById("myForm").reset();
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.password;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.status;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("password").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.lname;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formDatapassword;
    localStorage.setItem("users", JSON.stringify(formData));

}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // var amount    = document.getElementById('card_amount').value;
    //  if(fname=="" ||  fname.length>=20){
    //      document.getElementById('name_error').innerHTML= "**Enter the valid name";
    //     isValid = false;
    //  }
     if(firstname=="" ||  firstname.length>=20){
                document.getElementById('fname_error').innerHTML= "**Enter the valid name";
                returnval = false;
        
            }
        
            if(lastname=="" ||  lastname.length>=20){
                document.getElementById('lname_error').innerHTML= "**Enter the valid name";
                returnval = false;
        
            }
        
            if(email == ""){
                document.getElementById('email_error').innerHTML =" ** Please fill the email field";
               returnval =  false;
            }
            if(email.indexOf('@') <= 0 ){
                document.getElementById('email_error').innerHTML =" ** @ Invalid Position";
               returnval =  false;
            }
           if(password=="" || password.lenght<=8){
            document.getElementById("psw_error").innerHTML = " ** Password must be 8 Characters";
            returnval = false;
           }
    return isValid;
}











