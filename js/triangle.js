// Two different approaches to calculate area of triangle: 1) asking user for sides and 2) creating a triangle object

// 1) asking user for sides
// function calculateArea(s1, s2, s3) {
// 	var p = (s1 + s2 + s3)/2;
// 	var Area = Math.sqrt(p * (p - s1) * (p - s2) * (p - s3)); // p = perimeter / 2
// 	return Area;
// };

// var s1 = parseInt(prompt("What is side 1 of your triangle?"), 10);
// var s2 = parseInt(prompt("What is side 2 of your triangle?"), 10);
// var s3 = parseInt(prompt("What is side 3 of your triangle?"), 10);

// console.log(calculateArea(s1, s2, s3));


// 2) creating a triangle object
var triangleArea = function (s1, s2, s3) {
	var p = (s1 + s2 + s3)/2; //p=perimeter / 2
	var Area = Math.sqrt(p * (p - s1) * (p - s2) * (p - s3));
	return Area;
};

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5
};

console.log(triangleArea(triangle.sideA, triangle.sideB, triangle.sideC));

