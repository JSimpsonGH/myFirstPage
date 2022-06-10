*/ working on this need to review adding external JS file and practice the JS per Rob: Also, for practice, try putting the first and last name values in variables, then pass the variables to the alert method.
let fName = document.getElementById('fname').value.trim();
let lName = document.getElementById('lname').value.trim();

if (fName == '' || lName == '') {
               alert('Both First Name and Last Name are required!');
                              } else {
alert(`${fName} ${lName}`);
                              } 

