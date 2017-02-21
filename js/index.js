$(document).ready(function() {
	// $("p:contains(Lorem)").addClass("caption");

	// navigation click actions
	$('.scroll-link').on('click', function(e){
		e.preventDefault();
	});

	// scroll to top action
	$('.scroll-top').on('click', function(e) {
		e.preventDefault();
	});

	// mobile nav toggle
	$('#nav-toggle').on('click', function (e) {
		e.preventDefault();
	});

	// input checkboxs to modify the progrss-bar
	$('input').on('click', function() {

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
