-----------------------
--  MOVIES DATABASE  --
-----------------------

-- The names of all movies released in 1995?

-- How many people played a part in the movie “Lost in Translation”?
-- we need the roles table, and the movies table
.open Z:/sql/sample-databases/imdb_small.db
.mode column
.headers on

SELECT 2 + 2;
SELECT role
FROM roles
JOIN movies ON movies.id = roles.movie_id
WHERE movies.name = 'Lost in Translation';


-- Who directed the movie “Fight Club”?

-- How many movies Clint Eastwood has directed?

-- The names of all the movies that Clint Eastwood has directed?

-- The names of all directors who have directed at least one
-- horror film?

-- The names of every actor who has appeared in a movie directed
-- by Christopher Nolan?
