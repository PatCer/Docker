function changeText() {
    var element = document.getElementById('demo');
    element.innerHTML = 'Text has been changed!';
}

function showMessage() {
    alert('Hello! This is a message from JavaScript.');
}

function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    alert('Random Number: ' + randomNumber);
}