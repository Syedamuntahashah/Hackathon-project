// Get editable elements
const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayPic = document.getElementById('display-pic') as HTMLElement;
const displayEducation = document.getElementById('education-content') as HTMLElement;
const displaySkills = document.getElementById('skills-content') as HTMLElement;
const displayWorkExperience = document.getElementById('work-experience-content') as HTMLElement;

// Get Save buttons
const savePersonalInfoButton = document.getElementById('save-personal-info') as HTMLButtonElement;
const saveEducationButton = document.getElementById('save-education') as HTMLButtonElement;
const saveSkillsButton = document.getElementById('save-skills') as HTMLButtonElement;
const saveWorkExperienceButton = document.getElementById('save-work-experience') as HTMLButtonElement;

// Function to save personal information
savePersonalInfoButton.addEventListener('click', () => {
    const name = displayName.textContent;
    const email = displayEmail.textContent;
    // Optionally: Display a confirmation or store the data in local storage
    alert("Personal info saved!");
});

// Function to save education
saveEducationButton.addEventListener('click', () => {
    const education = displayEducation.textContent;
    alert("Education saved!");
});

// Function to save skills
saveSkillsButton.addEventListener('click', () => {
    const skills = displaySkills.textContent;
    alert("Skills saved!");
});

// Function to save work experience
saveWorkExperienceButton.addEventListener('click', () => {
    const workExperience = displayWorkExperience.textContent;
    alert("Work experience saved!");
});
