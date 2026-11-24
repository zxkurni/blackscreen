/*
    In full screen mode, the mouse pointer will hide after 1 second of inactivity.
    Move your physical mouse or trackpad to show the pointer.
*/



// incrementing timer to hide mouse when it reaches certain value
var intTimer = 0;

// default idle time before the mouse hides
const intIdleTime = 1000;

// function to hide mouse cursor
function hideMouseCusror () {
    // hide mouse cursor
    document.documentElement.style.cursor = "none";
}

// the event listener for mouse move
document.addEventListener ("mousemove", () => {
    // show the cursor immediately when the mouse moves, either in full screen or not
    document.documentElement.style.cursor = "auto";
    
    // clear the timer
    clearTimeout (intTimer);
    
    // invoke the timer and hide cursor only in fullscreen mode
    if (document.fullscreenElement) {
        intTimer = setTimeout (hideMouseCusror, intIdleTime);
    }
});