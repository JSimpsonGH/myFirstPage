let fName = document.getElementById('fname').value.trim();
let lName = document.getElementById('lname').value.trim();

if (fName == '' || lName == '') {
               alert('Both First Name and Last Name are required!');
                              } else {
alert(`${fName} ${lName}`);
                              }

