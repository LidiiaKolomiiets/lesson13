function isValid(inputValue) {
    if (inputValue > 0 && Number.isInteger(inputValue)) {
        return true;
    }
    else {
        return false;
    }
}


function array() {
    const m = Number(prompt("The length of the main array is"));

    if (!isValid(m)) {
        alert("Error! Enter an integer!");
        return null;
    }

    const mainArray = new Array();

    mainArray.length = m;

    for (var i = 0; i < m; i++) {

        const n = Number(prompt("The length of the internal array is " + (i + 1)));

        if (!isValid(n)) {
            alert("Error! Enter an integer!");
            return null;
        }

        mainArray[i] = new Array();

        mainArray[i].length = n;
    }

    for (var i = 0; i < mainArray.length; i++) {
        for (var j = 0; j < mainArray[i].length; j++) {

            const item = prompt("Value for element " + (j + 1) + " array " + (i + 1))

            mainArray[i][j] = item;
        }
    }
    return mainArray;
}

console.log(array())