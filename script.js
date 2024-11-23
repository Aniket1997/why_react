const setupCounter = (countSelector, buttonSelector) => {
    const countElement = document.querySelector(countSelector);

    if (countElement) {
        let count = parseInt(countElement.textContent, 10) || 0;

        const increase = () => {
            count++;
            countElement.textContent = count;
        };

        document.querySelector(buttonSelector)?.addEventListener('click', increase);
    } else {
        console.error(`Element with selector "${countSelector}" not found in the DOM.`);
    }
};

// Set up the counters
setupCounter('#count', '#increaseButton');
setupCounter('#count2', '#increaseButton_two');
