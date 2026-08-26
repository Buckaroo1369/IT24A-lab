function getTaskText() {
    const input = document.getElementById('nameInput');
    const text = input.value.trim();

    console.log("Hello there, " + input.value);
    return text;
}

function addTask() {
    const taskText = getTaskText();

    document.getElementById('nameDisplay').textContent =
        "Hello there, " + taskText + "! Welcome to Event Driven Programming.";
}

// Remove the displayed text when typing
document.getElementById('nameInput').addEventListener('input', function() {
    document.getElementById('nameDisplay').textContent = "";
});
