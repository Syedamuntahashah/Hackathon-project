// Get editable elements
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayPic = document.getElementById('display-pic');
var displayEducation = document.getElementById('education-content');
var displaySkills = document.getElementById('skills-content');
var displayWorkExperience = document.getElementById('work-experience-content');
// Get Save buttons
var savePersonalInfoButton = document.getElementById('save-personal-info');
var saveEducationButton = document.getElementById('save-education');
var saveSkillsButton = document.getElementById('save-skills');
var saveWorkExperienceButton = document.getElementById('save-work-experience');
// Function to save personal information
savePersonalInfoButton.addEventListener('click', function () {
    var name = displayName.textContent;
    var email = displayEmail.textContent;
    // Optionally: Display a confirmation or store the data in local storage
    alert("Personal info saved!");
});
// Function to save education
saveEducationButton.addEventListener('click', function () {
    var education = displayEducation.textContent;
    alert("Education saved!");
});
// Function to save skills
saveSkillsButton.addEventListener('click', function () {
    var skills = displaySkills.textContent;
    alert("Skills saved!");
});
// Function to save work experience
saveWorkExperienceButton.addEventListener('click', function () {
    var workExperience = displayWorkExperience.textContent;
    alert("Work experience saved!");
});
