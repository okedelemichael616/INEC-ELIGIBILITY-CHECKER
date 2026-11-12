// let currentYear = new Date().getFullYearmn()
// console.log(currentYear);


function check(){
  let birthYear = document.getElementById('input').value
  let displayArea = document.getElementById('display')
  if (birthYear ==''){
    alert('input should not be empty')


  }
  if(birthYear.length < 4) {
    alert('Please enter at least 4 numbers');
    return;
  }

  

  let currentYear = new Date().getFullYear();
  let age = currentYear - Number(birthYear);
  if (age >= 18){
    displayArea.innerHTML =  `<p> you can vote </p>`
  } else if (age < 18){
    displayArea.innerHTML = `<p> you are not eligible to vote, you have ${18-age} more years to vote </p>`
  } 
  if (Number (birthYear) > currentYear)
    alert ('invalid birthyear');
    return;


}

