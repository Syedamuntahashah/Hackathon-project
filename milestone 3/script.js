// Get form elements
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var profilePicInput = document.getElementById('profile-pic');
var educationInput = document.getElementById('education');
var skillsInput = document.getElementById('skills');
var workExperienceInput = document.getElementById('work-experience');
var updateButton = document.getElementById('update-resume');
// Get display elements for resume
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayPic = document.getElementById('display-pic');
var displayEducation = document.getElementById('education-content');
var displaySkills = document.getElementById('skills-content');
var displayWorkExperience = document.getElementById('work-experience-content');
// Event listener to update resume when the button is clicked
updateButton.addEventListener('click', function () {
    // Update personal information
    displayName.textContent = nameInput.value || "Your Name";
    displayEmail.textContent = "Contact: ".concat(emailInput.value || "your.email@example.com");
    displayPic.src = profilePicInput.value || ""; // Sets the profile picture URL
    // Update education, skills, and work experience
    displayEducation.textContent = educationInput.value || "Your education details will appear here.";
    displaySkills.textContent = skillsInput.value || "Your skills will appear here.";
    displayWorkExperience.textContent = workExperienceInput.value || "Your work experience will appear here.";
});
