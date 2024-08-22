document.addEventListener("DOMContentLoaded", () => {
    let words = document.querySelectorAll(".word");

    words.forEach((word) => {
        // Split each word into individual letters and wrap each letter in a span
        let letters = word.textContent.split("");
        word.textContent = ""; // Clear the original word text

        letters.forEach((letter) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.append(span);
        });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;

    words[currentWordIndex].style.opacity = "1";

    setInterval(() => {
        let currentWord = words[currentWordIndex];
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        // Rotate out the current word's letters
        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            }, i * 80);
        });

        // Rotate in the next word's letters
        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            }, 340 + (i * 80));
        });

        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    }, 3000); // Change words every 3 seconds
});
document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll(".skill-bar");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkSkillsInView() {
        skillBars.forEach(skillBar => {
            if (isInViewport(skillBar)) {
                skillBar.classList.add("in-view");
            }
        });
    }

    // Check on load
    checkSkillsInView();

    // Check on scroll
    window.addEventListener("scroll", checkSkillsInView);
});
document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll(".skill-bar");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkSkillsInView() {
        skillBars.forEach(skillBar => {
            if (isInViewport(skillBar)) {
                skillBar.classList.add("in-view");
            }
        });
    }

    // Check on load
    checkSkillsInView();

    // Check on scroll
    window.addEventListener("scroll", checkSkillsInView);
});