var names = ['John', 'Kenny', 'Tom', "Bob", 'Dilan'];

function sortNames(){
    for(var i = 0; i < names.length; i++){
        names.sort();
        console.log(names[i]);
    }
}

sortNames(names);