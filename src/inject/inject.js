function inputKeyPressed(evt) {
    const elem = evt.target;

    if (elem.maxLength < 0 || !isCharacterKeyPress(evt)) {
        return;
    }

    if (elem.value.length == elem.maxLength) {
        elem.classList.remove("maxlenwarner-shake");

        void elem.offsetWidth;

        elem.classList.add("maxlenwarner-shake");

        elem.addEventListener("animationend", function() {
            elem.classList.remove("maxlenwarner-shake");
        });
    }
}

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
        input.addEventListener("keydown", inputKeyPressed);
    });

    document.arrive("input", function() {
        this.addEventListener("keydown", inputKeyPressed);
    });
}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
        setUpListener();
	}
	}, 10);
});

