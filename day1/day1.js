
String.prototype.reverse = function () {
    var newText = "";

     for(let i=this.length-1; i >= 0; i--){
        newText = newText + this[i];
    }
    console.log(newText) ;
}

 
"jake".reverse();