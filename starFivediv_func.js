let starFivediv = function (num) {
    if (num % 5 == 0) {
        return "**";
    }
    else
        return num;
}
for (let i = 1; i <= 20; i++){
    console.log(starFivediv(i));
}
   