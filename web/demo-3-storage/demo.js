/* Session Storage is destroyed when the browser is closed */

function storeInSessionStorage(key, value) {

    // check to see if the browser has local storage
    if(sessionStorage != undefined) {
        // encode JS object as JSON string and store it
        sessionStorage.setItem(key, JSON.stringify(value));
    } else {
        console.log("Session storage is not available.");
    }
    
}

function getFromSessionStorage(key) {

    // check to see if the browser has local storage
    if(sessionStorage != undefined) {
        // parse stored JSON string and return JS object
        return JSON.parse(sessionStorage.getItem(key));
    } else {
        console.log("Session storage is not available.");
    }
    
    // if local storage is not available...
    return undefined;
    
}

/* persistent local storage */

function storeInLocalStorage(key, value) {

    // check to see if the browser has local storage
    if(localStorage != undefined) {
        // encode JS object as JSON string and store it
        localStorage.setItem(key, JSON.stringify(value));
    } else {
        console.log("Session storage is not available.");
    }
    
}

function getFromLocalStorage(key) {

    // check to see if the browser has local storage
    if(localStorage != undefined) {
        // parse stored JSON string and return JS object
        return JSON.parse(localStorage.getItem(key));
    } else {
        console.log("Session storage is not available.");
    }
    
    // if local storage is not available...
    return undefined;
    
}

/* cookie storage */

function saveCookie(el, val) {
    // set cookie for document
    // dies at end of session because 'expires' is not set
	document.cookie = JSON.stringify(el) + "=" + val;
}
function getCookie(el) {
    // get document cookies
	var cs = document.cookie;
    // see if any key-value pairs (cookies) exist
	var start = cs.indexOf(el+"=");
	if(start == -1) return null;
    
    // look for the end of the cookie
	start += el.length + 1;
    // marked by ';' if there are multiple cookies
	var end = cs.indexOf(";", start);
    // If there's only one cookie...
	if(end == -1) return JSON.parse(cs.substring(start));
    // Else...
	return JSON.parse(cs.substring(start, end));
}