let a = document.getElementsByClassName("title")[0]
setTimeout(() => {
    a.style.opacity=1
}, 50);

let divArray = Array.from(document.getElementsByClassName("text"))
console.log(divArray)

const Timer = (i) => {
    let delay = 1000; // Default delay
    if (i == 3) delay = 3000;
    if (i == 5 || i == 7) delay = 5000;
    if (i == 8 || i == 9) delay = 100;

    return new Promise((resolve) => setTimeout(resolve, delay));
}

const Hack = async (divArray) => {
    for(i in divArray) {
        await Timer(i)
        divArray[i].style.opacity = 1
    }
}

Hack(divArray)
