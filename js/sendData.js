var url = './mail.php';
var xhr = new XMLHttpRequest();
xhr.onload = ReceiveData;

jsonData=''
function buttonClick()
{
    obj = {}
    obj["subject"] = "Subject"
    obj["to"] = "jtejado@pendulostudios.com"
    obj["body"] = "This is the body of the Message"
    obj["file"] = 'Alice_in_Wonderland.pdf'

    jsonData=JSON.stringify(obj)
    xhr.onload = ReceiveData;

    sendData(JSON.stringify(obj))
}

document.addEventListener('DOMContentLoaded', function () {
    RequestData();
});

function RequestData() {
    // setup xhr
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';

    xhr.send();
}

function ReceiveData() {
    if (xhr.status >= 200 && xhr.status < 300)
        jsonData = JSON.parse(xhr.response);
    else
        console.log('Failed with status: ' + xhr.status);
}

function sendData(json) {

    // xhr.open("POST", "mail.php", true)
    // xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.send(json);
}