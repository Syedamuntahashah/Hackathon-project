// No functional changes, just a comment for Git tracking

// Get references to the button and the skills section
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Add event listener to the button
toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block'; // Show the skills section
    } else {
        skillsSection.style.display = 'none'; // Hide the skills section
    }
});
