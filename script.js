document.addEventListener("DOMContentLoaded", function() {
    // Header Click Event
    document.querySelector("header").addEventListener("click", function() {
        changeColor(this);
    });

    // Main Content Click Event
    document.querySelector("main").addEventListener("click", function() {
        changeColor(this);
    });

    // Footer Click Event
    document.querySelector("footer").addEventListener("click", function() {
        changeColor(this);
    });

    // Function to Change Color
    function changeColor(element) {
        var randomColor = getRandomColor();
        element.style.backgroundColor = randomColor;
    }

    // Function to Generate Random Color
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

