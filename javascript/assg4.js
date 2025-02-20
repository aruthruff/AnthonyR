/**********
Date: 6-12-2023
Author: Anthony Ruthruff
Class: CITW 165
Exercise: Exercise 4
**********/








/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

(function () {

  // PART ONE: CREATE PARK OBJECT AND WRITE OUT THE OFFER DETAILS

  // Create a park object using object literal syntax
  var park = {
    name: 'Coyotemy State Park',
    parkRate: 50, // Amount in dollars
    discount: 25,  // Percentage discount
    offerPrice: function () {
      var offerRate = this.parkRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  }

  // Write out the park name, standard rate, and the special rate
  var parkName, parkRate, specialRate;                    // Declare variables

  parkName = document.getElementById('parkName');        // Get elements
  parkRate = document.getElementById('parkRate');
  specialRate = document.getElementById('specialRate');

  parkName.textContent = park.name;                      // Write park name
  parkRate.textContent = '$' + park.parkRate.toFixed(2); // Write park rate
  specialRate.textContent = '$' + park.offerPrice();      // Write offer price


  // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
  var expiryMsg; // Message displayed to users
  var today;     // Today's date
  var elEnds;    // The element that shows the message about the offer ending

  function offerExpires(today) {
    // Declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    // Add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Create arrays to hold the names of days / months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    // Create the message
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br/>(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
  }

  today = new Date();                             // Put today's date in variable
  elEnds = document.getElementById('dealEnds');  // Get the dealEnds element
  elEnds.innerHTML = offerExpires(today);         // Add the expiry message

  // Finish the immediately invoked function expression
}());