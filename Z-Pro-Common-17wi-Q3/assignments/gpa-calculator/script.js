/*
  This web application helps a user calculate a GPA for their courses.

  User enters a name and grade for each course via a form. We build a list of
  these courses, and print the list to the page every time it changes (on form
  submit).

  When user clicks the "calculate" button, we get the average of the grades for
  each course in the list, and print it to the page.

  When user clicks "clear" button, the list of courses is emptied.
  The page is updated to remove the old list and any previously calculated GPA.

  Comments labeled TODO and BUGFIX must be done for the application to work 
  properly. REVIEW comments are requests for you to use your judgement to
  optimize the code.
*/


// TODO: Write a constructor called "Course" to create objects with "name" and
//       "grade" attributes.
var Course = function(name, grade) {
  this.name = name;
  this.grade = grade;
}

// Global variable to hold list of courses.
var courseArray = [];
// REVIEW: Would this be safer if variable was scoped to window.onload or
//         formHandler functions?

$(document).ready(function() {
    $('#course-form').submit(formHandler);

    // TODO: Assign handler for click of "clear" button. It should empty
    // courseList array, remove list items and GPA calculation from page text.
    $('#clear').click(clearCourses);

    $('#calculate').click(calculateAverage);

    // REVIEW: Would it make more sense to make some handlers anonymous
    // functions, instead of defining them elsewhere and assigning them here?
});

function clearCourses() {
  // empty the courseArray
  courseArray = [];
  // remove all list item elements from ul
  $('#course-list').html('');
  // clear the div #result
  clearGPA();
}

// Triggered on form submit. Creates a new course object and pushes it into
// courseList array, clears content in form fields, prints courseList objects
// to the page.
function formHandler(e) {
    // Prevent form from trying to submit to a server.
    e.preventDefault();

    var grade = parseFloat(this.elements["grade"].value);

    /*
      TODO: validate that "grade" value is a number between 1.0 and 4.0.

      Checking 'grade typeof "number"' will always return true because we
      called parseFloat. We must check that it's value is not NaN.

      Or is there a way we could use HTML to do it?
      http://w3schools.pro.edu/html/html_form_input_types.html
    */

    // Create the new course with values given, push it into array of courses.
    // BUGFIX: this causes an error because the "Course" constructor is not
    // yet defined.
    var newCourse = new Course(this.elements["course-name"].value, grade);
    courseArray.push(newCourse);

    clearFormFields();
    outputList();

    // Prevent form from trying to submit to a server.
    return false;
}

// Calculate the average of "grade" attribute for all objects in courseList
// array and prints it in friendly message to page text.
function calculateAverage() {
    var avg = "";

    // TODO: Calculate the average GPA of courses (the sum of all grades,
    //       divided by the number of course objects) and assign that value
    //       to "avg" variable.

    $('#result').html("Your overall GPA is " + avg);
}

// Removes GPA calculation from page text.
function clearGPA() {
    $('#result').html('');
}

// Clears content in form fields.
function clearFormFields() {
    // TODO: set the value of both the form fields to an empty string or null.
    // $('input[name="grade"]').val('');
    // $('input[name="course-name"]').val('');
    $('.user-input').val('');
}

// Prints courseList objects to the page in a readable way.
function outputList() {
    var list = $('#course-list');
    $('#course-list').html('');
    courseArray.forEach(function(courseObj) {
      $('<li>')
        .text(courseObj.name + ', ' + courseObj.grade)
        .appendTo(list)
    });
    /*
      TODO:
        - Clear the contents of the "list" element.
        - For each course in courseList, create an li element that holds the
          course's name and grade, then append the li to the "list" ul element
          (this is the same process used in event-listings project).
    */
}
