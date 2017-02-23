$(document).ready(function() {
	// select the first p, and add lead class to it

	// add caption class to all paragraphs that contain word (Lorum)
	// Select the p elements with the contains selector

	// update the lorum text inside the p of the div with id affectionate

	// navigation click actions
	$('.scroll-link').on('click', function(e){
		// Prevent Default Behavior

		// Grab the section id from the data-id attribute and store it in variable.

		// Call scrollToID function passing in the section id and a speed of 750
	});

	// scroll to top action
	$('.scroll-top').on('click', function(e) {
		// Prevent Default Behavior

		// Grab html, and body, and animate slowly to top of screen.
	});

	// input checkboxs to modify the progrss-bar
	$('input').on('click', function() {
		// Set an inital empty value

		// grab the inputs with the checked selector
		// for each of them, increment the empty value with the value of the check box.
		// grab the progress bar via class, and set it's css
	});
});

// scroll function takes an id and speed
function scrollToID(id, speed){
	var offSet = 50;
	// target Offset equals the current coordinates of the first element minus offset
	var targetOffset = $(id).offset().top - offSet;
	// Main nav target.
	var mainNav = $('#main-nav');
	// Scroll to the top, with an given speed.
	$('html,body').animate({scrollTop:targetOffset}, speed);
	// If the main nav is open
	if (mainNav.hasClass("open")) {
		// change the height of the main nav by 1px, remove the in class and replace with collapse.
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		// remove the open class.
		mainNav.removeClass("open");
	}
}
