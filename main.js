   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBkJgd8AgtBQ3lorzAaTS8mLsG97zsHbM",
    authDomain: "contact-b9d20.firebaseapp.com",
    databaseURL: "https://contact-b9d20.firebaseio.com",
    projectId: "contact-b9d20",
    storageBucket: "contact-b9d20.appspot.com",
    messagingSenderId: "173355236570"
  };
  firebase.initializeApp(config);


  
// reference messages collection
var messagesRef = firebase.database().ref('messages');

$(document).ready(function () {
  //listen for submit
  $('#onlineqoute').on('submit', submitForm);

  $('#myImg').on({
    mouseover: function () {
      $(this).css({
        'height': 250, 'width': 250

      });
    },

    mouseout: function () {
      $(this).css({
        'height': 153, 'width': 135

      });
    }
  });
});

function submitForm(e) {
  e.preventDefault();
  debugger;
  // Validation
  if (!is_checked()) {
    clearForm();
    return;
  }

  //get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var valid_age = $('input[name=age]:checked').val();
  var additionalinfo = getInputVal('additionalinfo');


  var star_rate = $('input[name=ratin]:checked').val();

  //save message
  saveMessage(name, email, valid_age, additionalinfo, star_rate);

  //show alert
  document.querySelector('.alert').style.display = 'block';

  //hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  //clear form
  clearForm();
}

//function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, valid_age, additionalinfo, star_rate) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    valid_age: valid_age,
    additionalinfo: additionalinfo,
star_rate: star_rate


  });
}

function MM_validateForm() { //v4.0
  if (document.getElementById) {
    var i, p, q, nm, test, num, min, max, errors = '', args = MM_validateForm.arguments;
    for (i = 0; i < (args.length - 2); i += 3) {
      test = args[i + 2]; val = document.getElementById(args[i]);
      if (val) {
        nm = val.name; if ((val = val.value) != "") {
          if (test.indexOf('isEmail') != -1) {
            p = val.indexOf('@');
            if (p < 1 || p == (val.length - 1)) errors += '- ' + nm + ' must contain an e-mail address.\n';
          } else if (test != 'R') {
            num = parseFloat(val);
            if (isNaN(val)) errors += '- ' + nm + ' must contain a number.\n';
            if (test.indexOf('inRange') != -1) {
              p = test.indexOf(':');
              min = test.substring(8, p); max = test.substring(p + 1);
              if (num < min || max < num) errors += '- ' + nm + ' must contain a number between ' + min + ' and ' + max + '.\n';
            }
          }
        } else if (test.charAt(0) == 'R') errors += '- ' + nm + ' is required.\n';
      }
    } if (errors) alert('The following error(s) occurred:\n' + errors);
    document.MM_returnValue = (errors == '');
  }
}

function is_checked() {
  var age_valid = $('input[name=age]:checked').val();
  if (age_valid == 'no') {
    alert('You are under age to use this site');
    return false;
  } else {
    return true;
  }
}

function clearForm() {
  document.getElementById('onlineqoute').reset();
}



//initial ratings
const ratings ={
star: 3.7
}

//total stars
const starsTotal = 5;

//run getRatings when DOM loads

document.addEventListener('DOMContentLoaded', getRatings);

//form elements
const ratingControl = document.getElementById('rating-control');



//enable rating control
//ratingControl.disabled = false;
//ratingControl.value = ratings;

//rating control change
ratingControl.addEventListener('blur', (e) => {
const rating = e.target.value;

//ratingControl.value = ratings;

//make sure number is 5 and under
if (rating > 5) {
alert('please rate 1 - 5');
return;
}

//change rating

ratings = rating;

getRatings();

} );


// get ratings
function getRatings() {
for(let rating in ratings){

    //get percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;
    
    //round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    //set width of star-inner to percentage
    document.querySelector(`.${rating} .stars-inner`) .style.width = starPercentageRounded;

//add number rating
    document.querySelector(`.${rating} .number-rating`) .innerHTML = ratings[rating];


}

}


