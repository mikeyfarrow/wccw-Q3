$(document).ready(function() {
	$.get('http://localhost:3030/async', function(data) {
		console.log('Async: ');
	});
	$.get('http://localhost:3030/sync', function(data) {
		console.log('Sync: ');
	});
	$.get('http://localhost:3030/stream', function(data) {
		console.log('Stream: ');
	});
});