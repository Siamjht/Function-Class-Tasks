function titleName(name) {
    let count = 0;

    for (let i in name) {
        count += 1;
        if (name[i] == " ") {
            name = name.slice(0, i);
            // console.log(name);
            count -= 1;
            break;
            
        }
    }
    // console.log(count);
    if (count%2 != 0) {
        console.log("'" + name + "': Tumi ajibon aka taikai morba!!!");
    }
    else {
        console.log("'" +name + "': Tomer Life set $");
    }
}

let nameArr = ["Rashmika Mandhana", "Sai pallavi", "Sabila nur", "Meher Afroz Shaon","Nusrat Imrose Tisha"];
for (let i in nameArr) {
    titleName(nameArr[i]);
}

