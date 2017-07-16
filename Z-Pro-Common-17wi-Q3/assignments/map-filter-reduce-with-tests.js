// Exercise 1: Use forEach to print all the names in the array
function ex1() {
    var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

    // INSERT CODE HERE!

}

// Convert an array of video objects into an array of {id,title}
// objects using map()
//      The function you pass to .map() should return an object with the
//      following format: { id: 70111470, title: "Die Hard" }
function ex2() {
    var newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    }, {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }, {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    }, {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }];

    // ------------ INSERT CODE HERE! -----------------------------------
    // Use map function to convert the array of video objects into an 
    // array of objects with only a title property and an id propery.
    // As an example, the result should be an array of objects that all
    // have the following format:
    //      { id: _____, title: _____ }

    return newReleases.map // finish this expression

    // ------------ INSERT CODE HERE! -----------------------------------

}

// Chain filter and map to collect the ids of videos that have a rating of 5.0
function ex3() {
    var newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    }, {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }, {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    }, {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }];

    // ------------ INSERT CODE HERE! -----------------------------------
    // Chain the filter and map functions to select the id of all videos
    // with a rating of 5.0.

    return newReleases // Complete this expression
        // ------------ INSERT CODE HERE! -----------------------------------
}

// Retrieve the largest rating.
// Let's use the reduce function to isolate the largest value in an array
// Your function should return a single value: the highest number
function ex4() {
    var ratings = [2, 3, 1, 4, 5];

    // Use
    //return ratings.reduce // Complete this expression
}

// Exercise 5: Retrieve url of the largest boxart
function ex5() {
    var boxarts = [
        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
        { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ];

    // You should return a single value: the URL of the largest box

    return boxarts.reduce // Complete this expression
}

function testEx2() {

}

function testEx3() {
    var expected = [654356453, 675465];
    var actual = ex3();
    compareResults('Ex3', expected, actual);
}

function testEx4() {
    var expected = 5;
    var actual = ex4();
    compareResults('Ex4', expected, actual);
}

function testEx5() {

}

function compareResults(name, expected, actual) {
    var expectedStr = JSON.stringify(expected);
    var actualStr = JSON.stringify(actual);
    if (expectedStr === actualStr) {
        console.log(`${name} Passed!`);
    } else {
        console.error(`${name} Failed. Expected: ${expectedStr}, Actual: ${actualStr}`);
    }
}

function runAllTests() {
    testEx2();
    testEx3();
    testEx4();
    testEx5();
}
