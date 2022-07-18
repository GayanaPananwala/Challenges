
const myArray = [1,2,2,1,3,4,5];


//This function removes all the duplicates in a given array
function removeDuplicates(myArray){
    return myArray.filter((val, index) => myArray.indexOf(val) === index);

}


console.log(removeDuplicates(myArray));