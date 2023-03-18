// forEach() Method
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach((e) => console.log(e));
//.join() method
const fruits = ["Apple", "Orange", "Mango"];
console.log(fruits.join("*"));
//.pop() Method-to remove an element to last
const fruit = ["Apple", "Orange", "Mango", "Grapes"];
console.log(fruit.pop());
//.push() Method-to add an element to last
fruit.push("Pineapple");
fruit.forEach((e) => console.log(e));
//.shift() Method-to remove st element from array
console.log("the removed element is:-" + fruit.shift());
//.unshift() Method-to add an element at st position
fruit.unshift("Lemon");
fruit.forEach((e) => console.log(e));
//changing an element
fruit[2] = "Banana";
fruit.forEach((e) => console.log(e));
//concat() Method-to add two arrays into a single array
const allFruits = fruits.concat(fruit);
allFruits.forEach((e) => console.log(e));
//.splice() Method- it adds new items in array.
fruit.splice(2, 0, "Lemudha", "Kanoda");
fruit.forEach((e) => console.log("Ater adding new fruits the array :-- " + e));
//.slice() Method -It is used to slice out the piece of array and make a new array
console.log(allFruits.slice(1, 3));

// String sorting
let newfruit = allFruits.sort();
console.log(newfruit);

//Fisher Yates Method to sort an array
// const dataArray = [5,8,9,3,4,7,17,12]
//  for (let i = dataArray.length-1; i > 0; i--){
//       let j = Math.floor(Math.random() * (i+1));
//       let k = dataArray[i];
//       dataArray[i] = dataArray[j];
//       dataArray[j] = k;
// }
// console.log(dataArray);

//sorting an array
const numArray = [5, 8, 3, 10, 7, 2];
console.log(numArray);
// Process to sort an array of numbers in javaScript
let newArray = numArray.sort(function (a, b) {
  return a - b;
});
console.log(newArray);
//sorting in reverse order
let myArray = numArray.sort(function (a, b) {
  return b - a;
});
console.log(myArray);
//to know the heighest value in array
console.log(myArray[0]); //gives the heighest

console.log(myArray[myArray.length - 1]); // gives the smalest element

// or we can also find max and min by Math.max.apply() and Math.min.apply() Methods
function maxValue(arr) {
  return Math.max.apply(null, arr);
}
console.log(maxValue(myArray));

function minValue(arr) {
  return Math.min.apply(null, arr);
}
console.log(minValue(myArray));

// sorting of an array of objects
const carsArray = [
  { type: "volvo", year: 2009 },
  { type: "Maruti", year: 2004 },
  { type: "Honda", year: 2010 },
];
const sortedArray = carsArray.sort(function (a, b) {
  return a.year - b.year;
});
console.log(sortedArray);

//Array Iterations

   //for Each method
const numArrays2 = [4,3,6,8,9,17,12,19,13];
numArrays2.forEach(e => console.log(e));

   //for...in
for(let x in numArrays2){
    console.log("The elements of arr by for in :",numArrays2[x]);
}

   //for loop
for(let i=0; i < numArrays2.length; i++){
    console.log("Elements of an arr by using for loop",numArrays2[i]);
}

   // map() if takes an arguement of callBack function and perform operations for each elements.
const map1 = numArrays2.map(x => x*2);
console.log(map1);

const map2 = numArrays2.map(x => x*x)
console.log(map2);
   //.filter() it creates a new arrays with those elements who passes the tests in conditions
const fruitName = ["Mango", "Guava", "Banana", "Papaya", "PineApple", "Oranges", "Grapes"];
let selectedFruits= fruitName.filter(word => word.length>6);
console.log(selectedFruits);

const arrOfPrimes = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];
console.log(arrOfPrimes.filter(num =>{
    for(let i=2;i<arrOfPrimes.length;i++){
        if(num%i===0){
            return false;
        }
        return num>1;
    }
}))

   //reduce() it reduces the elements of array and return a single value@
   //finding sum of all elements
const numbers = [1,2,3,4,5,6];
 let sums=numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
 console.log(sums);
 //finding difference
 let diffArray = [1800,300,500,50,900];
 let difference = diffArray.reduce((accumulator, currentValue) => accumulator-currentValue);
 console.log(difference);
  // calculate the savings of a persion
  let expenses = [1800,2000,3000,5000,500];
  let salary = 15000;
  let remainings = expenses.reduce((accumulator, currentValue) => accumulator-currentValue, salary);
  console.log(remainings);
  //remove duplicates elements from an array
  let ageGroups=[18,21,15,21,18,15,4,19,4,16];
  let reducedAge=ageGroups.reduce((accumulator, currentValue) => {
    if(accumulator.indexOf(currentValue)===-1){
        accumulator.push(currentValue);
    }
    return accumulator
  },[])
  console.log(reducedAge);
  //.some() to check whether all elements of an array pass a given condition or not
  //if not then return false in console 
  //check for age restriction
  function isMinnor(age){
    return age<18;
  }
  const ageArray1= [18,20,16,19,24,25]
  let checks=ageArray1.some(isMinnor);
  console.log(checks);

  // check for even
  function isEven(num){
    return num%2===0;
  }
  let nums3=[1,2,3,4,5,6];
  console.log(nums3.some(isEven));

  //indexOf() returns index of searched element
  //lastIndexOd() returns position of last occurence of an element
  // find() it is same as filtetr()
  //findIndex() it is find index of an element which passes the tests
  //arr.keys() it gives index as akey
  //arr.entries() it gives elements with their index 
  //arr.includes() it checks for whether an element persent or not in an array
  // ...Operator it combines all elements together of different arrays
  const a=["jan","feb", "mar"]
  const b=["april", "may", "june"]
  const c=["july","aug", "sep"]

  const year =[...a, ...b, ...c];
  console.log(year);

  
