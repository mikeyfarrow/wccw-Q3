$(document).ready(function() {
	$('#run-btn').click(submitQuery);
});

function submitQuery() {
	var userQuery = $('#sql-query').val();
	$.get('/query', { sql: userQuery }, displayResults);
}

function displayResults(data) {
	$('#output').text(JSON.stringify(data, null, '  '));
}

function addTable(result) {
	$('pre, table').hide();
	if (!result.ok || result.rows.length == 0) {
		var output = JSON.stringify(result.message || 'No results', null, '  ');
		$('pre').text(output).fadeIn();
		return;
	}

	$('thead, tbody').html('');
	var rows = result.rows;
	var tableHeaders = Object.keys(rows[0]).map(function(colName) {
		return $('<th>').text(colName);
	});

	$('<tr>').append(tableHeaders).appendTo('thead');

	var bodyRows = rows.map(function(row) {
		var rowData = Object.values(row).map(function(tdVal) {
			return $('<td>').text(tdVal);
		});
		return $('<tr>').append(rowData);
	});
	$('tbody').append(bodyRows);

	$('table').fadeIn();
}