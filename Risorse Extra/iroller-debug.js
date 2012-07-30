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

function d(n) {
    var oggi = new Date();
    var log = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "] ";
    var ris = "1d" + n + ": ";
    ris += Math.floor(Math.random() * n) + 1;
    log += ris;
    try {
        localStorage.logger = log + "\n" + localStorage.logger;
    } catch(err) {}
    ris = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><b><h1>" + ris + "</h1></b>";
    document.getElementById("risultatod20").innerHTML = ris;
}

function coin() {
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
    ris = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><b><h1>" + ris + "</h1></b>";
    document.getElementById("risultatod20").innerHTML = ris;
}

function custom(num, facce) {
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
    ris = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><b><h1>" + num.value + "d" + facce.value + ": " + somma + "</h1></b>";
    document.getElementById("risultatocustom").innerHTML = ris;
}

function marcia(num) {
    var ris = "";
    var d = 0;
    var oggi = new Date();
    var log = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br />"
    switch (num) {
        case 1:
            d = (Math.floor(Math.random() * 2) + 1);
            ris = log + "<b>1st Gear<br /><h1>" + d + "</h1></b>";
            break;
        case 2:
            d = (Math.floor(Math.random() * 3) + 2);
            ris = log + "<b>2nd Gear<br /><h1>" + d + "</h1></b>";
            break;
        case 3:
            d = (Math.floor(Math.random() * 5) + 4);
            ris = log + "<b>3rd Gear<br /><h1>" + d + "</h1></b>";
            break;
        case 4:
            d = (Math.floor(Math.random() * 6) + 7);
            ris = log + "<b>4th Gear<br /><h1>" + d + "</h1></b>";
            break;
        case 5:
            d = (Math.floor(Math.random() * 10) + 11);
            ris = log + "<b>5th Gear<br /><h1>" + d + "</h1></b>";
            break;
        case 6:
            d = (Math.floor(Math.random() * 10) + 21);
            ris = log + "<b>6th Gear<br /><h1>" + d + "</h1></b>";
            break;
        default:
            alert("Errore nella determinazione della marcia");
    }
    document.getElementById("risultatofd").innerHTML = ris;
    try {
        localStorage.logger = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]     " + num + " Gear:     " + d + "\n" + localStorage.logger;
    } catch(err) {}
}