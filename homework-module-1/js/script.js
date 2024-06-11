//Function to generate combination of characters
function generateCode() {
  var code = "";
  var getCode = ""
  var btnvalue;
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
  
  //Generate character multiple times using a loop
  for (i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }
  return code; //return the final accumulated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton(btnvalue) {
  document.getElementById("submit").disabled = btnvalue; //able/disable button
  if (btnvalue == true) {
      //test if button is disabled or enabled
      //set button and label color translucent
      document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
      document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
  } else {
      //set button and label color with no transparency
      document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
      document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
  }
}
// Listen to user input code
var codebox = document.getElementById("codeentered"); //get textbox
codebox.addEventListener("input", evaluateCode); //listen to code entered in textbox

// Run function if detected user had entered a character in textbox
function evaluateCode() {
getCode = document.getElementById("codeentered").value; //get character entered
var charset1 = getCode.trim(); //remove any hidden characters entered
var charset2 = getCode.trim(); //remove any hidden characters generated
//test if code entered matches the number of generated characters
  if (charset1.length == charset2.length && charset1 == charset2) {
       disableButton(false); //if match, run the function to enable button
      } else {
        disableButton(true);//if not match, run the function to disable button
}
}
$(document).ready(function() {
  // Debug log to confirm jQuery is loaded and ready
  console.log('jQuery is ready');

  // Lightbox functionality
  $('.gallery').click(function() {
    var src = $(this).attr('src');
    console.log('Image source:', src); // Debugging log
    $('.lightbox-img').attr('src', src);
    $('#lightbox').fadeIn();
    console.log('Lightbox should be visible now'); // Debugging log
  });

  $('.close').click(function() {
    $('#lightbox').fadeOut();
    console.log('Lightbox closed'); // Debugging log
  });

  $(document).on('click', function(e) {
    if ($(e.target).is('#lightbox')) {
      $('#lightbox').fadeOut();
      console.log('Lightbox closed by clicking outside'); // Debugging log
    }
  });
});
