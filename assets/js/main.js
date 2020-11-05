/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
function startApp($) {

	var $window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		default: ['1681px', null],
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Menu.
	$('#menu')
		.append('<a href="#menu" class="close"></a>')
		.appendTo($body)
		.panel({
			target: $body,
			visibleClass: 'is-menu-visible',
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right'
		});

};

$(document).ready(function () {
	startApp(jQuery);
});

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function (ev) {  // azért kell az ev, különben a függvény megadja magának paraméterként magát az eseményt, ezt meglőzve
	ev.preventDefault();    // hogy ne az alapértelmezett működés menjen végbe


	let inputs = this.querySelectorAll("input");
	let values = {};
	for (let i = 0; i < inputs.length; i++) {
		values[inputs[i].name] = inputs[i].value;
	}

	console.log(values);
    // ez azért jó, mert úgy tudok küldeni adatokat a szervernek, hogy nem frissül le az oldalam.