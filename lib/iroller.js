/*!
 * iRoller functions
 */
// FUNZIONE INIT
function init() {
    try {
        localStorage.clear();
        localStorage.logger = "";
    } catch(err) {
        alert("Web Storage is not supported by your browser, some functionality may not work!");
    }
}

// FUNZIONE D (D20 SYSTEM)
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

// FUNZIONE COIN (D20 SYSTEM)
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

// FUNZIONE CUSTOM (CUSTOM DICE)
function custom(num, facce) {
    if (num.value < 1 || num.value > 100) {
        alert("Number of dice not valid. Min: 1, Max: 100");
        return;
    }
    if (facce.value < 2 || facce.value > 100) {
        alert("Number of faces not valid. Min: 2, Max: 100");
        return;
    }
    var oggi = new Date();
    var log = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "] " + num.value + "d" + facce.value + ": ";
    var ris = "[" + oggi.toLocaleDateString() + "&nbsp;" + oggi.toLocaleTimeString() + "]<br /><b><h1>" + num.value + "d" + facce.value + "<br /><br />";
    var i;
    var somma = 0;
    for (i = 0; i < num.value; i++) {
        tiro = Math.floor(Math.random() * facce.value) + 1;
        somma += tiro;
        ris += "&nbsp;" + tiro + "&nbsp;";
        log += " " + tiro + " ";
    }
    log += "= " + somma;
    try {
        localStorage.logger = log + "\n" + localStorage.logger;
    } catch(err) {}
    ris += "=&nbsp;" + somma + "</h1></b>";
    document.getElementById("risultatocustom").innerHTML = ris;
}

// FUNZIONE MARCIA (FORMULA DE')
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

// FUNZIONE CATAN (CATAN DICE GAME)
function catan(num) {
    var d = 0;
    var oggi = new Date();
    document.getElementById("risultatocatan").innerHTML = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><br />"
    var i = 0;
    while (i < num) {
        d = (Math.floor(Math.random() * 6) + 1);
        document.getElementById("risultatocatan").innerHTML = document.getElementById("risultatocatan").innerHTML + "<img src=\"lib/images/catan/" + d + ".png\">&nbsp;";
        i++;
    }
}

// FUNZIONE MEMOIR44 (MEMOIR '44)
function memoir44(num) {
    var d = 0;
    var oggi = new Date();
    document.getElementById("risultatomemoir44").innerHTML = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><br />"
    var i = 0;
    while (i < num) {
        d = (Math.floor(Math.random() * 6) + 1);
        document.getElementById("risultatomemoir44").innerHTML = document.getElementById("risultatomemoir44").innerHTML + "<img src=\"lib/images/memoir44/" + d + ".png\">&nbsp;";
        i++;
    }
}

// FUNZIONE BATTLELORE (BATTLELORE)
function battlelore(num) {
    var d = 0;
    var oggi = new Date();
    document.getElementById("risultatobattlelore").innerHTML = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><br />"
    var i = 0;
    while (i < num) {
        d = (Math.floor(Math.random() * 6) + 1);
        document.getElementById("risultatobattlelore").innerHTML = document.getElementById("risultatobattlelore").innerHTML + "<img src=\"lib/images/battlelore/" + d + ".png\">&nbsp;";
        i++;
    }
}

// FUNZIONE ANCIENTS (C&C: ANCIENTS)
function ancients(num) {
    var d = 0;
    var oggi = new Date();
    document.getElementById("risultatoancients").innerHTML = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><br />"
    var i = 0;
    while (i < num) {
        d = (Math.floor(Math.random() * 6) + 1);
        document.getElementById("risultatoancients").innerHTML = document.getElementById("risultatoancients").innerHTML + "<img src=\"lib/images/ancients/" + d + ".png\">&nbsp;";
        i++;
    }
}

// FUNZIONE WESTEROS (BATTLES FO WESTEROS)
function westeros(num) {
    var d = 0;
    var oggi = new Date();
    document.getElementById("risultatowesteros").innerHTML = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><br />"
    var i = 0;
    while (i < num) {
        d = (Math.floor(Math.random() * 8) + 1);
        document.getElementById("risultatowesteros").innerHTML = document.getElementById("risultatowesteros").innerHTML + "<img src=\"lib/images/westeros/" + d + ".png\">&nbsp;";
        i++;
    }
}

// FUNZIONE TICKETTORIDETRAIN (TICKET TO RIDE DICE GAME)
function tickettoridetrain(num) {
    var d = 0;
    var oggi = new Date();
    document.getElementById("risultatotickettoridetrain").innerHTML = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><br />"
    var i = 0;
    while (i < num) {
        d = (Math.floor(Math.random() * 6) + 1);
        document.getElementById("risultatotickettoridetrain").innerHTML = document.getElementById("risultatotickettoridetrain").innerHTML + "<img src=\"lib/images/tickettoride/train" + d + ".png\">&nbsp;";
        i++;
    }
}

// FUNZIONE TICKETTORIDETUNNEL (TICKET TO RIDE DICE GAME)
function tickettoridetunnel(num) {
    var d = 0;
    var oggi = new Date();
    document.getElementById("risultatotickettoridetunnel").innerHTML = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><br />"
    var i = 0;
    while (i < num) {
        d = (Math.floor(Math.random() * 6) + 1);
        document.getElementById("risultatotickettoridetunnel").innerHTML = document.getElementById("risultatotickettoridetunnel").innerHTML + "<img src=\"lib/images/tickettoride/tunnel" + d + ".png\">&nbsp;";
        i++;
    }
}