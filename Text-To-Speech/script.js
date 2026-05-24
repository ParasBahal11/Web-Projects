const text = document.getElementById("texttoConvert");
const convertBtn = document.getElementById("convertBtn");
const highlightedText = document.getElementById("highlightedText");
const error = document.querySelector(".error-para");

convertBtn.addEventListener("click", function () {
    const speechSyth = window.speechSynthesis;
    const enteredText = text.value.trim();

    if (!speechSyth.speaking && !enteredText.length) {
        error.textContent = "Nothing to Convert! Enter text in the text area.";
        return;
    }

    if (!speechSyth.speaking && enteredText.length) {
        error.textContent = "";
        highlightedText.innerHTML = ""; // Clear previous highlights
        const words = enteredText.split(" ");
        words.forEach((word) => {
            const span = document.createElement("span");
            span.textContent = word + " ";
            highlightedText.appendChild(span);
        });

        const spans = highlightedText.querySelectorAll("span");
        const newUttar = new SpeechSynthesisUtterance(enteredText);

        // Adjust properties for clearer speech
        newUttar.rate = 1; // Speed of speech (default is 1)
        newUttar.pitch = 1; // Pitch of the voice (default is 1)
        newUttar.volume = 1; // Volume (1 is the maximum)

        let wordIndex = 0;
        newUttar.onboundary = function (event) {
            if (event.name === "word") {
                spans.forEach((span, index) => {
                    if (index === wordIndex) {
                        span.classList.add("highlight");
                    } else {
                        span.classList.remove("highlight");
                    }
                });
                wordIndex++;
            }
        };

        speechSyth.speak(newUttar);

        convertBtn.textContent = "Sound is Playing...";
        newUttar.onend = function () {
            convertBtn.textContent = "Play Converted Sound";
        };
    }
});
