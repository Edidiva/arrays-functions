//NO 1
// Mutating array methods in JavaScript are methods that modify the original array on which they are called, whereas non-mutation array methods return a new array without modifying the original one. Here are 5 examples of each:

// Mutating array methods:

// push() - adds one or more elements to the end of an array.
// pop() - removes the last element from an array.
// splice() - removes, replaces or adds elements to an array.
// sort() - sorts the elements of an array in place.
// reverse() - reverses the order of the elements in an array in place.

// Non-mutation array methods:

// slice() - returns a new array that is a copy of a portion of an existing array.
// concat() - merges two or more arrays, returning a new array.
// filter() - creates a new array with all elements that pass the test implemented by a provided function.
// map() - creates a new array with the results of calling a provided function on every element in the calling array.
// reduce() - applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value, returning a new value.

//NO2
let programmingLanguage =  ["C#", "Javascript", "Ruby", "PHP", "Python"]
//a
programmingLanguage.push("Kotlin");
console.log(programmingLanguage); //[ 'C#', 'Javascript', 'Ruby', 'PHP', 'Python', 'Kotlin' ]

//b
programmingLanguage.splice(3,0,"Java");
console.log(programmingLanguage); //[ 'C#', 'Javascript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]

//c
programmingLanguage.shift();
console.log(programmingLanguage);//[ 'Javascript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]

//d
programmingLanguage.unshift("Scala", "Swift")
console.log(programmingLanguage);
//[
  //  'Scala',      'Swift',
  //  'Javascript', 'Ruby',
  //  'Java',       'PHP',
  //  'Python',     'Kotlin'
  //]

  //e
  programmingLanguage.splice(5,1, "Go","Rust");
  console.log(programmingLanguage);
  //[
  //'Scala',      'Swift',
  //'Javascript', 'Ruby',
  //'Java',       'Go',
  //'Rust',       'Python',
  //'Kotlin'
//]


  let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

      
       console.log(changeFruit(fruit));//[ 'apple', 'mango', 'orange' ]




    

