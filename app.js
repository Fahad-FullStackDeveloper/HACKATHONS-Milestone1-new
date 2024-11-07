// Function to show/hide sections
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) { // Check if the section exists
        var currentDisplay = window.getComputedStyle(section).display;
        // Toggle between block and none
        if (currentDisplay === 'none') {
            section.style.display = 'block';
        }
        else {
            section.style.display = 'none';
        }
    }
    else {
        console.error("No element found with id: ".concat(sectionId));
    }
}
