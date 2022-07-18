//This function checks if two arrays contain any common items
function intersection(array1, array2) {

    //declaring a new array for storing common values
    let commonArray = [];

    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++) {

            //Check if elements are common and avoid adding duplicate values
            if(array1[i] === array2[j] && !commonArray.includes(array1[i])){
                 commonArray.push(array1[i]) //add new elements to the end of the array
            }

               
        }
    }
    if(commonArray.length == 0){
        console.log("Sorry! There are no common items.")
    }else{
        console.log(commonArray)
    }
   
}




const array1 = [1,2,2,1];
const array2 = [2,2];

//Calling the intersection function
intersection(array1, array2);