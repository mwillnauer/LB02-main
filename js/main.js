// Anmeldeformular mit HTML DOM
// Validierung E-Mail-Feld
var disabled = 0;

function emailValidierung() {
    var email = document.getElementById("email_felder").value;
    // Unten steht der Regex für Email format --> gelernt bei einem Stack Overflow (kopiert von Website)
    var format = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (format.test(email)) {
        document.getElementById("email_felder").style.borderColor = "green";
        document.getElementById("email_felder").style.borderWidth = "2.5px";
        if (disabled < 4) {
            disabled++ // disabled + 1
        } else {
            document.getElementById("button").disabled = true;
        }
    } else {
        document.getElementById("email_felder").style.borderColor = "red";
        document.getElementById("email_felder").style.borderWidth = "2.5px";
    }
}


// anwenden für alle wie oben jeder hat eine andere ID. ------->>>> Mia Work Stuff

function nameValidierung() {
    var text = document.getElementById("name_felder").value;
    if (text.toString().length > 2) {
        document.getElementById("name_felder").style.borderColor = "green";
        document.getElementById("name_felder").style.borderWidth = "2.5px";
        if (disabled < 4) {
            disabled++ // disabled + 1
        } else {
            document.getElementById("button").disabled = true;
        }
    } else {
        document.getElementById("name_felder").style.borderColor = "red";
        document.getElementById("name_felder").style.borderWidth = "2.5px";
    }
}

function lastnameValidierung() {
    var text = document.getElementById("lastname_felder").value;
    if (text.toString().length > 2) {
        document.getElementById("lastname_felder").style.borderColor = "green";
        document.getElementById("lastname_felder").style.borderWidth = "2.5px";
        if (disabled < 4) {
            disabled++ // heisst soviel wie disabled +1
        } else {
            document.getElementById("button").disabled = true;
        }
    } else {
        document.getElementById("lastname_felder").style.borderColor = "red";
        document.getElementById("lastname_felder").style.borderWidth = "2.5px";
    }
}


function addressValidierung() {
    let text = document.getElementById("address_felder").value;
   console.log(text)

    if (text.toString().length > 5) {
        document.getElementById("address_felder").style.borderColor = "green";
        document.getElementById("address_felder").style.borderWidth = "5px";
        if (disabled < 4) {
            disabled++ // heisst soviel wie disabled +1
        } else {
            document.getElementById("button").disabled = true;
        }
    } else {
        document.getElementById("address_felder").style.borderColor = "red";
        document.getElementById("address_felder").style.borderWidth = " 5px";
    }
}



//das war das HTML DOM
