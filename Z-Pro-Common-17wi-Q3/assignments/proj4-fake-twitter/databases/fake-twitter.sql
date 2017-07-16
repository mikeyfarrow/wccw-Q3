PRAGMA foreign_keys = ON;
.mode column
.headers on 

CREATE TABLE User (
	login TEXT PRIMARY KEY,
	password TEXT
);

CREATE TABLE Following (
	follower TEXT REFERENCES User(login),
	feed TEXT REFERENCES User(login)
);

CREATE TABLE Tweet (
	tweet_id INTEGER PRIMARY KEY,
	user TEXT REFERENCES User(login),
	message TEXT CHECK(LENGTH(message) BETWEEN 1 AND 100),
	post_time TEXT DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO User (login, password) VALUES
	('bugs', 'bunny'),
	('elmer', 'fudd'),
	('daffy', 'duck');

INSERT INTO Following (follower,feed) VALUES
	('bugs', 'elmer'),
	('bugs', 'daffy'),
	('elmer', 'bugs'),
	('elmer', 'daffy'),
	('daffy', 'bugs');

INSERT INTO Tweet (user,message) VALUES
	('bugs', "What's up doc?"),
	('elmer', "Shh. I'm hunting wabbits!"),
	('bugs', "What do you mean, Wabbits?"),
	('elmer', "You know, with big wong ears, and a whittle white fwuffy tail, and he hope awound and awound"),
	('bugs', "Listen, Doc. Confindentially, I AM A WABBIT!");

.save fake-twitter.db

