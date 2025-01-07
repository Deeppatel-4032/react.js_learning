
// count select
const firstCountAdd = document.getElementById("firstCount");
const secondCountAdd = document.getElementById("secondCount");

// button select
const leftButtonClick = document.getElementById("leftButton");
const rightButtonClick = document.getElementById("rightButton");

//total counts
const totalCount = 10;

let secondNumCount = 0;
let firstNumCount = totalCount - secondNumCount;

// print the Page
firstCountAdd.innerHTML = firstNumCount;
secondCountAdd.innerHTML = secondNumCount;

rightButtonClick.addEventListener("click", () => {
    if (firstNumCount > 0) {
        firstNumCount--
        firstCountAdd.innerHTML = firstNumCount;
        secondNumCount++
        secondCountAdd.innerHTML = secondNumCount;
    }
})

leftButtonClick.addEventListener("click", () => {
    if (secondNumCount > 0) {
        firstNumCount++
        firstCountAdd.innerHTML = firstNumCount;
        secondNumCount--
        secondCountAdd.innerHTML = secondNumCount;
    }
})