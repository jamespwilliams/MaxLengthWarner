function isCharacterKeyPress(evt) {
    const keycode = evt.keyCode;

    const valid = 
        (keycode > 47 && keycode < 58)   || // number keys
        keycode == 32                    || // spacebar & return key(s) (if you want to allow carriage returns)
        (keycode > 64 && keycode < 91)   || // letter keys
        (keycode > 95 && keycode < 112)  || // numpad keys
        (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
        (keycode > 218 && keycode < 223);   // [\]' (in order)

    return valid;
}

function setUpListener() {

    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("keydown", function(e) {
            if (input.maxLength < 0 || !isCharacterKeyPress(e)) {
                return;
            }

            const elem   = e.target;
            const maxLen = elem.getAttribute("maxlength");

            if (elem.value.length == maxLen) {
                elem.classList.remove("maxlenwarner-shake");

                void elem.offsetWidth;

                elem.classList.add("maxlenwarner-shake");

                elem.addEventListener("animationend", function() {
                    elem.classList.remove("maxlenwarner-shake");
                });
            }
        });
    });

    document.arrive(".test-elem", function() {
        // 'this' refers to the newly created element
    });
}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

        setUpListener();
	}
	}, 10);
});

