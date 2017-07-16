PRAGMA foreign_keys = ON;

CREATE TABLE Dog (
	id INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	dob TEXT,
	vaccine_date TEXT,
	owner_id INTEGER,
	FOREIGN KEY (owner_id) REFERENCES Client(id)
);

CREATE TABLE Client (
	id INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	phone TEXT
);

CREATE TABLE Visit (
	id INTEGER PRIMARY KEY,
	dog_id INTEGER,
	start_date TEXT,
	end_date TEXT,
	notes TEXT,
	charge REAL,
	FOREIGN KEY (dog_id) REFERENCES Dog(id)
);

CREATE TABLE Payment (
	id INTEGER PRIMARY KEY,
	visit_id INTEGER,
	date TEXT,
	amount_paid REAL,
	card_no TEXT,
	FOREIGN KEY (visit_id) REFERENCES Visit(id)
);

SELECT phone FROM Client
JOIN dog ON owner_id = Client.id
WHERE dog.name = 'Freddie';

SELECT * FROM Visit
JOIN Dog ON Dog.id = Visit.dog_id
JOIN Client ON Client.id = Dog.owner_id
WHERE Client.name = 'Joe';