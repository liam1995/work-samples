// Initialize App
(function () {
'use strict';

document.addEventListener('deviceready', onDeviceReady.bind(this), false);

function onDeviceReady() {
// Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
document.addEventListener( 'pause', onPause.bind( this ), false );
document.addEventListener( 'resume', onResume.bind( this ), false );
        
// TODO: Cordova wurde geladen. Führen Sie hier eine Initialisierung aus, die Cordova erfordert.
var parentElement = document.getElementById('deviceready');
//var listeningElement = parentElement.querySelector('.listening');
//var receivedElement = parentElement.querySelector('.received');
//listeningElement.setAttribute('style', 'display:none;');
//receivedElement.setAttribute('style', 'display:block;');
document.addEventListener("backbutton", onBackKeyDown);
}

function onPause() {
// TODO: Diese Anwendung wurde ausgesetzt. Speichern Sie hier den Anwendungszustand.
}

function onResume() {
// TODO: Diese Anwendung wurde erneut aktiviert. Stellen Sie hier den Anwendungszustand wieder her.
}
})();

// Initialize Functions
function onBackKeyDown() {
    window.close();
}

function callmain() {
    window.open('main.html', '_self');
}

function btnc() {
    /*var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.response);
            if (xhr.response !== '5U22') {
                console.log('Login failed!');
            } else {
                console.log('Login success!');
                callmain();
            }
        }
    }
    var data = {user: username.value, pass: password.value};
    xhr.open('POST', 'http://localhost/APP/login.php');
    xhr.send(JSON.stringify(data));*/

    callmain();
}

// Initialize Vars
var header = document.getElementById('header');
var container = document.getElementById('container');
var btn = document.getElementById('btn');
var user = document.getElementById('username');
var pass = document.getElementById('password');

// Initialize Events
btn.addEventListener('click', btnc);

// Initialize Version
var ver = document.createElement('h1');
ver.id = 'version';
ver.appendChild(document.createTextNode('Version: 1.0.6 Alpha'));
container.appendChild(ver);