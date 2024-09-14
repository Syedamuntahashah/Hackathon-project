// Get form elements
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
const workExperienceInput = document.getElementById('work-experience') as HTMLTextAreaElement;
const updateButton = document.getElementById('update-resume') as HTMLButtonElement;

// Get display elements for resume
const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayPic = document.getElementById('display-pic') as HTMLImageElement;
const displayEducation = document.getElementById('education-content') as HTMLElement;
const displaySkills = document.getElementById('skills-content') as HTMLElement;
const displayWorkExperience = document.getElementById('work-experience-content') as HTMLElement;

// Event listener to update resume when the button is clicked
updateButton.addEventListener('click', () => {
    // Update personal information
    displayName.textContent = nameInput.value || "Your Name";
    displayEmail.textContent = `Contact: ${emailInput.value || "your.email@example.com"}`;
    displayPic.src = profilePicInput.value || ""; // Sets the profile picture URL

    // Update education, skills, and work experience
    displayEducation.textContent = educationInput.value || "Your education details will appear here.";
    displaySkills.textContent = skillsInput.value || "Your skills will appear here.";
    displayWorkExperience.textContent = workExperienceInput.value || "Your work experience will appear here.";
});
