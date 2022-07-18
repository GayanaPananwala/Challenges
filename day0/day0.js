
//This function will reverse the given string
function reverseString(text) {

    //declaring the newText variable for storing the reversed string
    let newText = "";

    for(let i=text.length-1; i >= 0; i--){
        newText = newText + text[i];
    }
    console.log(newText) ;
}

//Calling the function 
reverseString("jake");