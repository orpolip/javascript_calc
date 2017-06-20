function reset() {
    document.getElementById("display").value = "";
}

function result(val) {
    document.getElementById("display").value = val;
}

function v(val) {
    document.getElementById("display").value += val;
}

function e() {
    try {
        result(eval(document.getElementById("display").value))
    }
    catch (e) {
        result('Error')
    }
}  