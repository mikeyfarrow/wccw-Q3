.open Z:/sql/sample-databases/GuestHouse.db 
.mode column
.headers on

-- For each day of the week beginning 2016-11-25
-- show the number of people who are arriving that day.
SELECT booking_date AS i, COUNT(occupants) AS arrivals
FROM booking
WHERE booking_date BETWEEN '2016-11-25' AND '2016-12-01'
GROUP BY booking_date;

-- Show the number of guests in the hotel on the night
-- of 2016-11-21. Include all those who checked in that
-- day or before but not those who have check out on
-- that day or before.

-- WHERE 2016-11-21 is between check-in date and check-out

SELECT SUM(occupants)
FROM booking
WHERE julianday('2016-11-21') >= julianday(booking_date) AND
	  julianday('2016-11-21') < julianday(booking_date) + nights;

SELECT SUM(occupants)
FROM booking
WHERE '2016-11-21' >= booking_date AND
      '2016-11-21' < date(booking_date, '+' || nights || ' days');

-- target date: julianday('2016-11-21')
-- checkin date: julianday(booking_date)
-- checkout date: julianday(booking_date) + nights