/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {return null;}
  return n ? n * factorial(n - 1) : 1;
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  return array.length ? array[0] + sum(array.slice(1)) : 0;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (!Array.isArray(array)) {return array;}
  return array.length ? arraySum(array[0]) + arraySum(array.slice(1)) : 0;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n < 0) return isEven(-n);
  return n < 2 ? n === 0 : isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n < 0) {return -sumBelow(-n);}
  return n <= 1 ? 0 : n - 1 + sumBelow(n - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (x > y) {return range(y, x).reverse()}
  return y - x <= 1 ? [] : [x + 1, ...range(x + 1, y)];
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {return 1;}
  if (exp < 0) {return 1 / exponent(base, -exp);}
  if (exp % 2 === 0) {
    const sqrt = exponent(base, exp / 2);
    return sqrt * sqrt;
  } else {
    return base * exponent(base, exp - 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {return true;}
  if (n % 2 === 1 || n === 0) {return false;}
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  return string.length ? reverse(string.slice(1)) + string[0] : '';
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if (string.length <= 1) {return true;}
  string = string.toLowerCase().replace(/ /g, '');
  return string[0] === string.slice(-1) && palindrome(string.slice(1, -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {return NaN;}
  if (y < 0) {return modulo(x, -y);}
  if (x < 0) {return -modulo(-x, y);}
  return x < y ? x : modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {return 0;}
  if (y < 0) {return multiply(-x, -y);}
  return y === 1 ? x : x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {return NaN;}
  if (y < 0) {return -divide(x, -y);}
  if (x < 0) {return -divide(-x, y);}
  return x < y ? 0 : 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {return null;}
  if (x === 0) {return y;}
  if (y === 0) {return x;}
  return gcd(y, modulo(x, y));
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length > str2.length) {return compareStr(str2, str1);}
  return str1[0] === str2[0] && (str1[0] === undefined || compareStr(str1.slice(1), str2.slice(1)));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  return str.length ? [str[0], ...createArray(str.slice(1))] : [];
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  return array.length ? [...reverseArr(array.slice(1)), array[0]] : [];
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  return length ? [value, ...buildList(value, length - 1)] : [];
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  return n ? [...fizzBuzz(n - 1), `${n % 3 ? '' : 'Fizz'}${n % 5 ? '' : 'Buzz'}` || `${n}`] : [];
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  return array.length ? (array[0] === value) + countOccurrence(array.slice(1), value) : 0;
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  return array.length ? [callback(array[0]), ...rMap(array.slice(1), callback)] : [];
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  let count = 0;
  for (let k in obj) {
    count += (k === key) + (obj[k].constructor === Object ? countKeysInObj(obj[k], key) : 0);
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;
  for (let k in obj) {
    count += typeof obj[k] === 'object' ? countValuesInObj(obj[k], value) : obj[k] === value;
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  if (oldKey in obj) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }
  for (key in obj) {
    if (typeof obj[key] === 'object') {replaceKeysInObj(obj[key], oldKey, newKey);}
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {return null;}
  if (n === 1) {return [0, 1];}
  var fibArr = fibonacci(n - 1);
  fibArr.push(fibArr[n - 1] + fibArr[n - 2]);
  return fibArr;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {return null;}
  return n <= 1 ? n : nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  return array.length ? [array[0].toUpperCase(), ...capitalizeWords(array.slice(1))] : [];
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  return array.length ? [array[0][0].toUpperCase() + array[0].slice(1), ...capitalizeFirst(array.slice(1))] : [];
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  if (typeof obj !== 'object') {return typeof obj !== 'number' || obj % 2 ? 0 : obj;}
  let sum = 0;
  for (let key in obj) {sum += nestedEvenSum(obj[key]);}
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  if (!Array.isArray(array)) {return [array];}
  return array.length ? [...flatten(array[0]), ...flatten(array.slice(1))] : [];
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  obj = obj || {};
  if (str.length) {
    obj[str[0]] = (obj[str[0]] || 0) + 1;
    return letterTally(str.slice(1), obj);
  }
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (list.length <= 1) {return list;}
  return [...(list[0] === list[1] ? [] : [list[0]]), ...compress(list.slice(1))];
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  return array.length ? [[...array[0], aug], ...augmentElements(array.slice(1), aug)] : [];
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length <= 1) {return array;}
  return [...(array[0] === 0 && array[1] === 0 ? [] : [array[0]]), ...minimizeZeroes(array.slice(1))];
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  return [
    ...(array.length ? [Math.abs(array[0])] : []),
    ...(array.length > 1 ? [-Math.abs(array[1])] : []),
    ...(array.length > 2 ? alternateSign(array.slice(2)) : [])];
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var numText = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  return str.length ? (/\d/.test(str[0]) ? numText[str[0]] : str[0]) + numToText(str.slice(1)) : '';
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  node = node || document.documentElement;
  return (node.tagName.toLowerCase() === tag ? 1 : 0) + Array.from(node.children).reduce(
    (count, node) => count + tagCount(tag, node), 0
  );
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target) {
  var max = array.length - 1;
  if (max < 0) {return null;}
  var mid = Math.floor(max / 2);
  var recursiveResult;
  var recursiveLeftIndex = 0;
  if (array[mid] < target) {
    recursiveLeftIndex = mid + 1;
    recursiveResult = binarySearch(array.slice(recursiveLeftIndex), target);
  } else if (target < array[mid]) {
    recursiveResult = binarySearch(array.slice(0, mid), target);
  } else {
    return mid;
  }
  return recursiveResult === null ? null : recursiveLeftIndex + recursiveResult;
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  if (array.length <= 1) {return array;}
  var mid = Math.ceil(array.length / 2);
  var left = mergeSort(array.slice(0, mid))
  var right = mergeSort(array.slice(mid));

  var merged = [];
  while (left.length && right.length) {
    merged.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return [...merged, ...left, ...right];
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (Array.isArray(input)) {return input.map(element => clone(element));}
  if (typeof input === 'object') {
    return Object.keys(input).reduce((cloned, key) => {
      cloned[key] = clone(input[key]);
      return cloned;
    }, {});
  }
  return input;
};
