-----------------------------------
--    PLANET_EXPRESS Database    --
--     Practice SQL queries      --
-----------------------------------

-- What are the names of all employees who make between
-- $10,000 and $15,000 salary?
SELECT name
FROM Employee 
WHERE salary BETWEEN 10000 AND 15000;

-- What is the total number of customers?
SELECT COUNT(*)
FROM Client;

-- What is the weight of the heaviest package?
	-- Version 1: Selects just the weight, none of the other info
	SELECT MAX(weight)
	FROM package;

	-- Version 2: Selects all of the details of the heaviest package
	SELECT * FROM package
	ORDER BY weight DESC
	LIMIT 1;

-- How many packages are in each shipment?
SELECT shipment, COUNT(PackageNumber)
FROM package
GROUP BY shipment;

-- Which shipment has the most packages?

-- What is the average weight of a package?

-- What is the average weight of a package per sender?

-- Who was the sender of the lightest package
-- and what is its weight? 

-- Write a query that prints the account numbers of the Sender
-- and the Recipient of all Packages that are on Shipments under
-- the Supervision of Manager 2

-- Write a query to determine the account numbers of recipients
-- of packages that are in pending shipments. (Hint: DISTINCT will
-- be useful here.)

-- What is the name of the planet that is the destination of the
-- most packages?

-- Write a query to determine the names of clients who have
-- received their packages. 