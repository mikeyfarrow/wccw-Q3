PRAGMA foreign_keys = ON;

CREATE TABLE User (
	username TEXT PRIMARY KEY,
	password TEXT NOT NULL,
	active INTEGER CHECK (active IN (0, 1)) DEFAULT 1
);

CREATE TABLE Message ( 
	message_id INTEGER PRIMARY KEY,
	sender TEXT REFERENCES User(username),
	recipient TEXT REFERENCES User(username),
	time_sent TEXT DEFAULT CURRENT_TIMESTAMP,
	message TEXT NOT NULL
);

INSERT INTO User (username, password) VALUES
	('freddie', 'woof'),
	('jax', 'meow'),
	('kiesha', 'hey'),
	('radar', 'bark'),
	('yoko', 'ono');

-- ERROR: freddie is already in User table
-- INSERT INTO User VALUES ('freddie', 'haha');

-- ERROR: password is NOT NULL
-- INSERT INTO User (username) VALUES ('johnlennon');

SELECT * FROM User;

INSERT INTO Message VALUES
	(NULL, 'freddie', 'jax', datetime('now'), 'Hey there bud'),
	(NULL, 'jax', 'freddie', datetime('now'), 'You dog!');

INSERT INTO Message (sender, recipient, message) VALUES
	('freddie', 'jax', 'How are you, jax?'),
	('jax', 'freddie', 'I am okay'),
	('kiesha', 'yoko', 'I have cookies but not for you'),
	('yoko', 'kiesha', 'Give me a chance'),
	('radar', 'freddie', 'Ruff ruff'),
	('freddie', 'radar', 'Wow, I love you');

UPDATE User SET password = 'bowwow' WHERE username = 'freddie';

-- DELETE FROM Message WHERE sender = 'freddie' OR recipient = 'freddie';
-- DELETE FROM User WHERE username = 'freddie';
UPDATE User SET active = 0 WHERE username = 'freddie';

-- ERROR: 
-- INSERT INTO User VALUES ('blkaasdfa', 'asdfasd', 10);