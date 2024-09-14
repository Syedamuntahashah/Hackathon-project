// No functional changes, just a comment for Git tracking


// Get references to the button and the skills section
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Add event listener to the button
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block'; // Show the skills section
    }
    else {
        skillsSection.style.display = 'none'; // Hide the skills section
    }
});
