$(document).ready(function() {
	$.get('/multiply', { a: 2, b: 3 }, function(data) {
		/*optional stuff to do after success */
		console.log(data);
	});
});