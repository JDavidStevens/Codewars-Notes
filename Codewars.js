// ******String incrementer******
// Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.
//Observations: 1. may be given an empty string 2. Need to look at the depth of the string for ex. 19 to 20, 99 to 100, etc. 
//Need to pull number from end of string, increment it and then put the new number back where the old one was found
//Approach split string.. convert to num.. if number, push to new array.. join the numbers.. increment.. push to original array.. join array back to a string
//My Solution:
function incrementString (strng) {
    let arr1 = strng.split('');
    let arr2 = [];
    let arr3 = [];
    for(let i = 0; i< arr1.length; i++){
    if(arr1[i] ==  0 ||arr1[i] ==1 || arr1[i] == 2 || arr1[i] ==3 || arr1[i] == 4 || arr1[i] == 5|| arr1[i] == 6 || arr1[i] == 7 || arr1[i] == 8 || arr1[i] == 9 ){
    arr3.push(arr1[i])
    }else{
    arr2.push(arr1[i])
    }
    }
    if(arr3.length===0){
    arr3.push(0)}
    let num1 = arr3.join('')
    let num2=parseInt(num1)
    let arr4 = [];
    let arr5 = num1.split('')
    arr4.push(num2 + 1);
    if(arr4[0] > 9 && arr4[0]<=99){
    arr5.splice(arr5.length-2,2,arr4[0])
    }
    else if(arr4[0] >= 100 && arr5.length < 5){
    arr5.splice(0,arr5.length,arr4[0])
    }
    else if(arr4[0]>=1000 && arr5.length > 4){
    arr5.splice(arr5.length-4,4,arr4[0])
    }
    else{
    arr5.splice(arr5.length-1,1,arr4[0])
    }
    arr2.push(arr5.join(''))
   let res = arr2.join('')
    return res;
}
//alternate solutions: 
let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)
//[0-8] is saying 1 through 8. | === 'or.' \d matches a digit character. $ matches end of input

function incrementString(str){
    var c = str[str.length-1];
      switch(c){
              case '0':
              case '1':
              case '2':
              case '3':
              case '4':
              case '5':
              case '6':
              case '7':
              case '8': return str.substring(0, str.length-1) + (parseInt(c)+1);
              case '9': return incrementString(str.substring(0, str.length-1)) + 0;
              default: return str+"1";
                  }
  }

  function incrementString(input) {
    return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
        return +d + 1 + ns.replace(/9/g, '0');
      });
  }


//   Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//My solution:
var moveZeros = function (arr) {
    // TODO: Program me
    const arr1 = [];
    const arr2 = [];
    arr.map(e=>{
      if(e!==0){
        arr1.push(e)
      }else{
        arr2.push(e)
      }
    })
    console.log("arr1",arr1,"arr2",arr2)
    const solution = [...arr1,...arr2]
  return solution;
  }
//   alt solutions:
var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }

  var moveZeros = function (arr) {
    return arr
      .filter((val) => val !== 0)
      .concat(arr.filter((val) => val === 0));
  }