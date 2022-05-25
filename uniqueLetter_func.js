// finding unique letters from given names

function unqLetter(name) {
    let count = 0, flag = 0;

    for (let i = 0; i < name.length; i++){
        flag = 0;
        for (let j = i + 1; j < name.length; j++) {
            // console.log(name[i],name[j]);
            if (name[i] == name[j]) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            count += 1;
        }
    }
    return count;
}
let arr = ["sadia", "wasim", "mama halim", "mousumi", "anarul"];
for (let i = 0; i < arr.length; i++) {
    console.log("'"+ arr[i] +"' unique letter has:"+ unqLetter(arr[i]));
}
