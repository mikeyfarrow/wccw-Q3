PRAGMA foreign_keys = ON;

CREATE TABLE Artist (
	id INTEGER PRIMARY KEY,
	name TEXT NOT NULL
);

CREATE TABLE Song (
	id INTEGER PRIMARY KEY,
	title TEXT NOT NULL,
	artist_id INTEGER,
	FOREIGN KEY (artist_id) REFERENCES Artist(id)
);

INSERT INTO Artist VALUES (NULL, 'The Beatles'), (NULL, 'Metallica'), (NULL, 'Katy Perry'), (NULL, 'What');

INSERT INTO Song VALUES (NULL, 'Help', (SELECT id FROM Artist WHERE name = 'The Beatles')), (NULL, 'Fade to Black', 2), (NULL, 'Roar', 3), (NULL, 'Else', 4);

SELECT * FROM Artist;
SELECT * FROM Song;
SELECT * FROM Artist WHERE name = 'The Beatles';