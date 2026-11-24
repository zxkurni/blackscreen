/*
    To enter or exit full screen:
    - Double click anywhere on the page
    - Press F
    - Press Q
    - Press Space
    - Press Enter
    - Press F11

    In full screen mode, the mouse pointer will hide after 1 second of inactivity.
    Move your physical mouse or trackpad to show the pointer.
*/

// function to toggle full screen
function toggleFullScreen () {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen ();
    } else {
        document.exitFullscreen ();
    }
}

// double click page to enter and exit full screen
document.addEventListener ("dblclick", () => {
    toggleFullScreen ();
});

// press F11 or Q to enter or exit full screen
document.addEventListener ("keydown", (e) => {
    if (e.key.toLowerCase () === "f11") {
        // press F11 to toggle full screen
        
        // disable normal function of F11 because it does not work well with JS at the moment
        e.preventDefault ();
        
        // override F11 to call our function. somehow it does not work well in firefox
        /*
            to make it work properly in firefox:
            1. open: about:config
            2. search: full-screen-api.allow-trusted-requests-only
            3. set to: false
        */
        toggleFullScreen ();
    } else {
        // for other buttons handling other than F11
        
        if ((document.activeElement.tagName !== "INPUT") && 
            (document.activeElement.tagName !== "TEXTAREA")) {
            // only process if cursor is not in an text input area
            
            switch (e.key.toLowerCase ()) {
                case "f":
                case "q":
                case " ":
                case "enter":
                    if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
                        // toggle full screen
                        toggleFullScreen ();
                    }
            }
        }
    }
});