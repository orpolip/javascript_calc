function reset() {
    document.getElementById("display").value = "";
}

function result(val) {
    document.getElementById("display").value = val;
}

function v(val) {
    document.getElementById("display").value += val;
}

function percent() {
    result(eval(document.getElementById("display").value / 100))
}

function e_math() {
    try {
        result(eval(document.getElementById("display").value))
    }
    catch (e_math) {
        result('Error')
    }
}  