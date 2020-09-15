"use strict";

// Painikkeet
const btnSignIn = document.querySelector("#btnSignIn");

// Painikkeen toiminnallisuus
btnSignIn.onclick = function() {
    const username = document.querySelector("#inputEmail").value;
    const password = document.querySelector("#inputPassword").value;

    const tuloste = document.querySelector("#tuloste");
    tuloste.innerHTML = `${username}, ${password}`;

    return false;
}
