//Odd-Even series using function

function oddEvenFunc(num) {
    for (let i = 1; i <= 10; i++){
        if (i % 2 == 0) {
            console.log("Even");
        }
        else
            console.log("Odd");
    }
}

oddEvenFunc(10);