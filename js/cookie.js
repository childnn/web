'use strict';

// Set the cookie to the name, value, and expiration date.
function writeCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // millisecond.
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + '; path=/';
}

// find the specified cookie and return its value.
function readCookie(name) {
    const searchName = name + '=';
    let cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(searchName) == 0) {
            return cookie.substring(searchName.length, cookie.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    writeCookie(name, "", -1);
}