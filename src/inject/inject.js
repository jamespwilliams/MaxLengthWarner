function setUpListener() {

    document.querySelectorAll("input[maxlength]").forEach(input => {
        input.addEventListener("keydown", function(e) {
            const maxLen = e.target.getAttribute("maxlength");

            if (e.target.value.length == maxLen) {
                 
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
