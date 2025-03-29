document.addEventListener("DOMContentLoaded", () => {

    // Reminders List
    const remindersList = [
    // 🌟 Motivational reminders
    "You're doing amazing, even if it doesn’t feel like it. Keep going. 💪",
    "Small progress is still progress. Every step forward counts. 🚀",
    "Your goals are valid, and your dreams are worth chasing. ✨",
    "Perfection isn’t the goal—growth is. Just keep moving. 🌱",
    "You’ve overcome hard days before. You can do this too. 🌊",
    
    // 🎯 Streak & Productivity reminders
    "One day at a time. Just showing up matters. 🔥",
    "Streaks aren’t just numbers—they’re proof of your dedication. 🏆",
    "You can still do something small today. Even 5 minutes counts.",
    "Missed a day? It’s okay. What matters is getting back up. 💖",
    "Remember why you started. Your effort is worth it.",

    // 🛡️ Comfort & Self-Compassion reminders
    "It's okay to rest. Your worth isn’t based on productivity. 🌸",
    "You’re not behind. You’re on your own path.",
    "Breathe. You don’t have to figure it all out right now.",
    "Even if today feels heavy, you are still loved and valuable. ❤️",
    "Not everything has to be perfect. Done is better than perfect. 🎨",

    // 🌙 Personal reflections & grounding
    "Remember how excited you were to start this? Keep that spark. ✨",
    "Your dreams are valid, no matter how big or small.",
    "What would 'future you' say right now? They’d be proud. 🌟",
    "You are more than your work. Your creativity is a gift.",
    "No matter what happens today, you are enough. Always. 💖",

    // my own add'ns
    "Overwhelmed? Go to the bathroom.",
    "Body tired? Stretch.",
    "In anything you do, be your genuine self."
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
  
