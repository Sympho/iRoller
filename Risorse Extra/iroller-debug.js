/*!
 * iRoller functions
 */
function init() {
    try {
        localStorage.clear();
        localStorage.logger = "";
    } catch(err) {
        alert("Web Storage is not supported by your browser, some functionality may not work!");
    }
}

function d(n, risultato) {
    var oggi = new Date();
    var log = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "] ";
    var ris = "1d" + n + ": ";
    ris += Math.floor(Math.random() * n) + 1;
    log += ris;
    try {
        localStorage.logger = log + "\n" + localStorage.logger;
    } catch(err) {}
    risultato.value = ris;
}

function coin(risultato) {
    var oggi = new Date();
    var log = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "] ";
    var ris = "Coin: ";
    var n = Math.floor(Math.random() * 2);
    if (n == 0) ris += "Tail";
    else ris += "Head";
    log += ris;
    try {
        localStorage.logger = log + "\n" + localStorage.logger;
    } catch(err) {}
    risultato.value = ris;
}

function custom(num, facce, risultato) {
    var oggi = new Date();
    var log = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "] " + num.value + "d" + facce.value + ": ";
    var ris = num.value + "d" + facce.value + ": ";
    var i;
    var somma = 0;
    for (i = 0; i < num.value; i++) {
        somma += Math.floor(Math.random() * facce.value) + 1;
    }
    log += somma;
    ris += somma;
    try {
        localStorage.logger = log + "\n" + localStorage.logger;
    } catch(err) {}
    risultato.value = ris;
}

function marcia(num, spostamento) {
    var oggi = new Date();
    var log = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "] ";
    var ris = "";
    switch (num) {
        case 1:
            ris = "1st Gear: " + (Math.floor(Math.random() * 2) + 1);
            break;
        case 2:
            ris = "2nd Gear: " + (Math.floor(Math.random() * 3) + 2);
            break;
        case 3:
            ris = "3rd Gear: " + (Math.floor(Math.random() * 5) + 4);
            break;
        case 4:
            ris = "4th Gear: " + (Math.floor(Math.random() * 6) + 7);
            break;
        case 5:
            ris = "5th Gear: " + (Math.floor(Math.random() * 10) + 11);
            break;
        case 6:
            ris = "6th Gear: " + (Math.floor(Math.random() * 10) + 21);
            break;
        default:
            alert("Errore");
    }
    log += ris;
    try {
        localStorage.logger = log + "\n" + localStorage.logger;
    } catch(err) {}
    spostamento.value = ris;
}