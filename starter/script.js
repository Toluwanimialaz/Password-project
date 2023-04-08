// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password option

// Function for getting a random element from an array
function getRandom(arr) {
  var i=Math.floor(Math.random()*arr.length);
  return arr[i];
}

// Function to generate password with user input
function generatePassword() {
  var b;
  var c;
  var d;
  var e;
  var low;
  var upper;
  var spec;
  var numb;
  function getPasswordOptions() {
    a=parseInt(prompt("decide length of your password"));
    b=confirm("do you want lowercase characters");
    c=confirm("do you want uppercase charaters");
    d=confirm("do you want special keys");
    e=confirm("do you want numbers");
  }
  a=low+upper+spec+numb;
  getPasswordOptions();
  if(b===true){
    low=Math.floor(Math.random()*a);
    alert(low);
  }else{
    low=0;
    alert(low);
  }
  if(c===true){
    upper=Math.floor(Math.random()*(a-low))
    alert(upper);
  }else{
    upper=0;
    alert(upper);
  }
  if(d===true){
    spec=Math.floor(Math.random()*(a-low-upper));
    alert(spec);
  }else{
    spec=0;
    alert(spec);
  }
  if(e===true){
    numb=a-low-upper-spec;
    alert(numb);
  }else{
    numb=0;
    alert(numb);
  }


  var password=[];
  for(var i=0;i<low;i++){
    var ty=getRandom(lowerCasedCharacters);
    password.push(ty);
  }
  for(var i=0;i<upper;i++){
    var rt=getRandom(upperCasedCharacters);
    password.push(rt);
  }
  for(var i=0;i<spec;i++){
    var hj=getRandom(specialCharacters);
    password.push(hj);
  }
  for(var i=0;i<numb;i++){
    var wx=getRandom(numericCharacters);
    password.push(wx);
  }
  var password1=password.join("");
  return password1


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);