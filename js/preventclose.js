/*
    This is to show popup when the page is going to be closed.
    
    It can work in Chrome but not in all browsers.
*/

window.onbeforeunload = function () {
    return "Close this page?";
}