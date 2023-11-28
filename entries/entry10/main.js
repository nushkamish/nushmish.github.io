//referenced from chatgpt

//I want to the color of the background to change on scroll, from a darker color to a light color
//adding an event listner that recognizes the scrolling action

document.addEventListener('DOMContentLoaded', function () {
      var body = document.body;
      var previousScroll = window.scrollY;

      window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var scrollDirection = (scrollPosition > previousScroll) ? 'down' : 'up';
        var targetColor = getColorFromScrollPosition(scrollPosition);

        // Update background color on scroll
        body.style.background = targetColor;

        // Update previous scroll position
        previousScroll = scrollPosition;
      });

      // Function to determine the background color based on scroll position
         function getColorFromScrollPosition(scrollPosition) {
        var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        var scrollPercentage = scrollPosition / maxScroll;

        // Hex codes for start and end colors
        var startColorHex = '#0B5783';
        var endColorHex = '#052639';

        // Convert hex codes to RGB
        var startColor = hexToRgb(startColorHex);
        var endColor = hexToRgb(endColorHex);

        // Interpolate between start and end colors
        var currentColor = startColor.map((start, i) => {
          var end = endColor[i];
          return Math.round(start + scrollPercentage * (end - start));
        });

        // Convert interpolated RGB back to hex
        return rgbToHex(currentColor[0], currentColor[1], currentColor[2]);
      }

      // Helper function to convert hex color to RGB
      function hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        return [r, g, b];
      }

      // Helper function to convert RGB color to hex
      function rgbToHex(r, g, b) {
        return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
      }
    });

//making image visible on scroll

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".sit");

    function checkVisible(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function handleScroll() {
        images.forEach((sit) => {
            if (checkVisible(sit)) {
                sit.style.opacity = 1;
            }
        });
    }

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
});

// Array of random prompts
const prompts = [
    "Describe your favorite vacation destination.",
    "If you could have any superpower, what would it be and why?",
    "Share a memorable childhood experience.",
    "What is your dream job and why?",
    "If you could time travel, where and when would you go?",
    "Describe a challenging situation you've overcome.",
    // Add more prompts as needed
];

// Function to generate a random prompt
function generateRandomPrompt() {
    // Get a random index from the prompts array
    const randomIndex = Math.floor(Math.random() * prompts.length);

    // Display the random prompt
    const promptDisplay = document.getElementById('promptDisplay');
    promptDisplay.textContent = prompts[randomIndex];
}
