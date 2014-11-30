$( document ).ready(function() {
 
  // Hide Sign Up side on initialization
  $( '.inactive' ).hide();
 
 
  $( '.mini.button.signup' ).click(function() {
 
    // Hide Sign In and show Sign Up side with slide down effect
    $( '.ui.segment.signin' )
      .hide()
      .end()
    .find( '.ui.segment.signup' )
      .slideDown();
 
  });
 
 
  $( '.mini.button.signin' ).click(function() {
 
    // Hide Sign Up and show Sign In side with slide down effect
    $( '.ui.segment.signup' )
      .hide()
      .end()
    .find( '.ui.segment.signin' )
      .slideDown();
 
  });
});
