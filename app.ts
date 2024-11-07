// Function to show/hide sections
function toggleSection(sectionId: string): void {
  const section = document.getElementById(sectionId);

  if (section) {
    // Check if the section exists
    const currentDisplay = window.getComputedStyle(section).display;

    // Toggle between block and none
    if (currentDisplay === "none") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  } else {
    console.error(`No element found with id: ${sectionId}`);
  }
}

// function exportToPDF() {
//     try {
//         const resumeElement = document.getElementById('resume');
//         if (!resumeElement) {
//             console.error("Resume element not found");
//             return;
//         }
        
//         const options = {
//             margin: 1,
//             filename: 'resume.pdf',
//             image: { type: 'jpeg', quality: 0.98 },
//             html2canvas: { scale: 2 },
//             jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
//         };
        
//         html2pdf().from(resumeElement).set(options).save();
//     } catch (error) {
//         console.error("Error generating PDF:", error);
//     }
// }
