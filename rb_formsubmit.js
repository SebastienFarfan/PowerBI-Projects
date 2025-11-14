/*
   New Perspectives on HTML and CSS, 7th Edition
   Tutorial 7
   Tutorial Case


   Filename: rb_formsubmit.js

   Purpose: The purpose of this program is to redirect the user to a
            confirmation page upon form submission, bypassing the
            default browser validation pop-ups.

*/

window.onload = setForm;

function setForm() {
   // Attach an event handler to the form's onsubmit event
   // We pass 'e' as the event argument to access event methods.
   document.forms[0].onsubmit = function(e) {
      
      // *** THE FIX ***
      // Stop the default browser action immediately. 
      // This prevents the native HTML5 validation pop-up from appearing.
      e.preventDefault();
      
      // Now, redirect the user to the desired confirmation page.
      location.href = "rb_survey_txt.html";
      
      // Note: Since we used e.preventDefault(), we no longer need 'return false;'
   }
}


