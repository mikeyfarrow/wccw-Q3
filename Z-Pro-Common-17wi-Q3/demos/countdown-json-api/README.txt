
/countdown/days
	Gets the number of days left. GET requests can specify
	an optional query parameter for the start date. If no
	start date is specified, today's date will be used as the
	start. For example:
		/countdown/days?iso=2018-12-25T08:00:00.000Z
	Or:
		/countdown/days
	
	Response will look like:
		{ days: 99 }

/countdown/weeks
	Gets the number of weeks left. Optional query parameter
	for start date (same as /countdown/days). For example:
		/countdown/weeks?iso=2018-12-25T08:00:00.000Z
	Or:
		/countdown/weeks

	Response will look like:
		{ weeks: 102 }

TODO:
	1. Create the server and make it listen

	2. Write helper functions for sending responses:
		- function notFound(res)
			sends 404 Not Found
		- function sendJSON(res, obj)
			sends the obj as a JSON string

	3. Create if/else logic for "routing" requests based on their URL

	4. Respond to requests with dummy data

	5. Write helper functions for doing the countdown
		- function daysLeft(dateObj)
			returns an object with number of days left between the dateObj
			parameter and January 20, 2021
		- function weeksLeft(dateObj)
			returns an object with number of weeks left between the dateObj
			parameter and January 20, 2021

	6. ...?
