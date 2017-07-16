var nums1 = [4, 6, 2, 7, 3, 5];
var nums2 = [10, 15];

var Course = function(name, grade) {
	this.name = name;
	this.grade = grade;
};

var courseArray = [
	new Course('Math', 2.7),
	new Course('Science', 3),
	new Course('PE', 1.2)
];

// returns the sum of the list that is passed in
// using a for loop.
function sumForLoop(list) {
	var sum = 0;
	for (var i = 0; i < list.length; i++) {
		sum = sum + list[i];
	}
	return sum;
}

console.log(sumForLoop(nums1));
console.log(sumForLoop(nums2));

// returns the sum of the list that is passed in
// using the forEach method.
function sumForEach(list) {
	var sum = 0;
	list.forEach(function(elem) {
		sum = sum + elem;
	});
	return sum;
}

console.log(sumForEach(nums1));
console.log(sumForEach(nums2));

var getGrade = course => course.grade;
var gpaSum = sumForEach(courseArray.map(getGrade));
var gpa = gpaSum / courseArray.length;
console.log(gpa);

/*
[
	{ name: _____, grade: 3.2 },
	{ name: _____, grade: 2.7 }
]

[ 3.2, 2.7 ]
*/

function sumReduce(list) {
	var combineNums = (prev, cur) => prev + cur;
	/*
		5+3  ===> 8
		8+6  ===> 14
		14+4 ===> 18
		[ 5, 3, 6, 4 ]
	*/
	return list.reduce(combineNums);
}

function min(list) {
	/*
		fn(5, 7) 	-> 5
		fn(5, 1)	-> 1
		fn(1, 8)	-> 1
		fn(1, 2)	-> 1
		[ 5, 7, 1, 8, 2 ]

	
		[25]
	*/
	var combine = (prev, cur) => Math.min(prev, cur);
	return list.reduce(combine);
}

console.log(sumReduce(nums1));
console.log(`Minimum in list: ${min(nums1)}`);
console.log(`Minimum in list: ${min(nums2)}`);


function minReduce2(list) {
	return list.reduce(function(prev, cur, index) {
		console.log(`prev: ${prev}, cur: ${cur}, index: ${index}`);
		return Math.min(prev, cur);
	});
}

// console.log(`Minimum in list: ${minReduce2(nums1)}`);

var minOfSmallList = minReduce2([25]);
console.log('list with one number: ' + minOfSmallList);

console.log(min(courseArray.map(getGrade)));

/*
[
	{ name: 'math', grade: 3.2 },
	{ name: 'science', grade: 2.7 },
	{ name: 'programming', grade: 4.0 }
]

	fn({ name: 'math', grade: 3.2 }, { name: 'science', grade: 2.7 })
		-> { name: 'science', grade: 2.7 }

	fn({ name: 'science', grade: 2.7 }, { name: 'programming', grade: 4.0 })
		-> { name: 'science', grade: 2.7 }

*/

var minGrade = function(prevCourse, curCourse) {
	if (prevCourse.grade < curCourse.grade) {
		return prevCourse;
	} else {
		return curCourse;
	}
}
console.log('========================');
var worstCourseName = courseArray.reduce(minGrade).name;
console.log(worstCourseName);