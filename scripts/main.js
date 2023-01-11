// JavaScript function to animate the button
function animateButton(button) {
    button.classList.toggle('active');
    setTimeout(function() {
        button.classList.remove('active');
    }, 200); // the time is in milliseconds,  1000ms = 1s
}