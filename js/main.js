document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed", {
    strings: ["Front-End Web Developer"], // Only one string to loop
    typeSpeed: 50, // Typing speed in milliseconds
    backSpeed: 30, // Backspacing speed in milliseconds
    loop: true, // Loop the animation
    showCursor: true, // Show blinking cursor
    cursorChar: "|", // Cursor character
  });
});
  // Function to open PDF in a new tab
      function openPdfInNewPage() {
        window.open("./cv.pdf", "_blank");
      }