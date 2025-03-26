document.addEventListener("DOMContentLoaded", () => {

    // Quotes List
    const remindersList = [
        "You are stronger than you think.",
        "Take a deep breath and start again.",
        "It's okay to feel how you feel. Embrace it.",
        "Small steps lead to big changes.",
        "Be kind to yourself. You deserve it.",
        "Remember: Progress, not perfection.",
        "Your worth is not defined by your productivity.",
        "Take a moment to appreciate how far you've come.",
        "You are enough, just as you are.",
        "It's okay to rest. Recharge for a better tomorrow."
    ];

    // DOM elements
    const button = document.querySelector("button");
    const quote = document.querySelector("blockquote p");
  
    function updateReminder() {
        const random = Math.round(Math.random() * (remindersList.length - 1));
        quote.textContent = remindersList[random];
    }

    // Attach an event listener to the `button`
    button.addEventListener("click", updateReminder);

    updateReminder();
  });
  