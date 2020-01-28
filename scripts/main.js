'use strict';
document.getElementById('button').addEventListener('click', function( event ) {
  const idLength = document.getElementById('length');
  const idUppercase = document.getElementById('uppercase');
  const idLowercase = document.getElementById('lowercase');
  const idNumber = document.getElementById('number');
  const idSpecial = document.getElementById('special');
  // from 32 to 126
  const asciiMin = 0x20;
  const numberZero = 0x30;
  const numberNine = 0x39;
  const uppercaseA = 0x41;
  const uppercaseZ = 0x5a;
  const lowercaseA = 0x61;
  const lowercaseZ = 0x7a;
  const asciiMax = 0x7e;
  // character set
  let numberArray = [];
  let uppercaseArray = [];
  let lowercaseArray = [];
  let specialArray = [];
  for (let i = asciiMin; i <= asciiMax; i++) {
    if (i >= numberZero && i <= numberNine) {
      numberArray.push(String.fromCharCode(i));
    }
    else if (i >= uppercaseA && i <= uppercaseZ) {
      uppercaseArray.push(String.fromCharCode(i));
    }
    else if (i >= lowercaseA && i <= lowercaseZ) {
      lowercaseArray.push(String.fromCharCode(i));
    }
    else {
      specialArray.push(String.fromCharCode(i));
    }
  }
  // this array contains the arrays above
  let typeArrayArray = [];
  // how many checkboxes are checked
  let checkedCount = 0;
  if (idNumber.checked) {
    checkedCount += 1;
    typeArrayArray.push(numberArray);
  }
  if (idUppercase.checked) {
    checkedCount += 1;
    typeArrayArray.push(uppercaseArray);
  }
  if (idLowercase.checked) {
    checkedCount += 1;
    typeArrayArray.push(lowercaseArray);
  }
  if (idSpecial.checked) {
    checkedCount += 1;
    typeArrayArray.push(specialArray);
  }
  // determine the condition of the generated password
  let typeIncluded = [];
  for (let i = 0; i < checkedCount; i++) {
    typeIncluded.push(false);
  }
  let typeChoose;
  // char to be randomed
  let char;
  // password to be generated
  let password = '';
  // get the length of the required password
  let length = idLength.value;
  length = Number(length);
  if (length < checkedCount) {
    alert('Length of password should not less than checked checkboxes.');
  }
  else if (length <= 0) {
    alert('Length of password should not less than or equal to 0.')
  }
  else if (checkedCount == 0) {
    alert('There should be at least one checkbox checked.');
  }
  else {
    for (let i = 0; i < length; i++) {
      if (i == length - 1 && typeIncluded.indexOf(false) !== -1) {
        typeChoose = typeIncluded.indexOf(false);
      }
      else if (i == length - 2 && typeIncluded.indexOf(false) !== -1) {
        // TODO
        typeChoose = typeIncluded.indexOf(false);
      }
      else if (i == length - 3 && typeIncluded.indexOf(false) !== -1) {
        typeChoose = typeIncluded.indexOf(false);
      }
      else {
        typeChoose = Math.floor(Math.random() * checkedCount);
      }
      typeIncluded[typeChoose] = true;
      char = Math.floor(Math.random() * typeArrayArray[typeChoose].length);
      char = typeArrayArray[typeChoose][char];
      password = password.concat('', char);
    }
    document.getElementById('result').value = password;
    if (typeIncluded.indexOf(false) !== -1) {
      alert('Error occurs');
    }
  }
  }, false);