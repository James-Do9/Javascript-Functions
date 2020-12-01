const rapid = (str) => {
    for(i = 0; i < str.length; i++){
        str = str.toLowerCase();
        str = str.replace( /[aeiou]/ig, '' )
    }
    return str.toUpperCase()
}

   // From this line up Do not change code below
let str = "John";
console.log(rapid(str));