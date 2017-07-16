---------------------------------
-- TIPS ON WRITING SQL QUERIES --
---------------------------------
-- Figure out the proper SQL queries in the following way:
-- Which table(s) contain the critical data? (FROM)
-- Which columns do I need in the result set? (SELECT)
-- How are tables connected (JOIN) and values filtered (WHERE)?

-----------------------
-- SIMPSONS DATABASE --
-----------------------

-- What courses Bart has taken and gotten a B- or better?
SELECT courses.name, grades.grade
FROM students
JOIN grades ON students.id = grades.student_id
JOIN courses ON courses.id = grades.course_id
WHERE students.name = 'Bart' AND grades.grade <= 'B-';

-- What courses have been taken by both Bart and Lisa?
SELECT courses.name
FROM grades
JOIN students ON students.id = grades.student_id
JOIN courses ON courses.id = grades.course_id
WHERE students.name IN ('Bart', 'Lisa')
GROUP BY course_id
HAVING COUNT(student_id) = 2;

-- Who all the teachers that Bart has had?
SELECT teachers.name
FROM students
JOIN grades ON students.id = grades.student_id
JOIN courses ON courses.id = grades.course_id
JOIN teachers ON teachers.id = courses.teacher_id
WHERE students.name = 'Bart';

-- How many total students that Ms. Krabappel taught.
SELECT COUNT(grades.student_id)
FROM teachers
JOIN courses ON courses.teacher_id = teachers.id
JOIN grades ON grades.course_id = courses.id
WHERE teachers.name = 'Krabappel';

-- The names of the students that Ms. Krabappel taught.
SELECT students.name
FROM teachers
JOIN courses ON courses.teacher_id = teachers.id
JOIN grades ON grades.course_id = courses.id
JOIN students ON students.id = grades.student_id
WHERE teachers.name = 'Krabappel';