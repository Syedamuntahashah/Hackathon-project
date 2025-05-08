// Define types for the inputs
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var profilePicInput = document.getElementById("profile-pic");
var educationInput = document.getElementById("education");
var skillsInput = document.getElementById("skills");
var workInput = document.getElementById("work-experience");
var updateButton = document.getElementById("update-resume");
// Preview elements
var previewName = document.getElementById("preview-name");
var previewEmail = document.getElementById("preview-email");
var previewPic = document.getElementById("preview-pic");
var previewEducation = document.querySelector("#preview-education p");
var previewSkillsList = document.querySelector("#preview-skills ul");
var previewWork = document.querySelector("#preview-work p");
var resumePreview = document.getElementById("resume-preview");
updateButton.addEventListener("click", function () {
    // Set values to preview
    previewName.innerText = nameInput.value;
    previewEmail.innerText = emailInput.value;
    previewPic.src = profilePicInput.value;
    previewEducation.innerText = educationInput.value;
    previewWork.innerText = workInput.value;
    // Handle skills (comma-separated)
    var skillsArray = skillsInput.value.split(",").map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill !== ""; });
    previewSkillsList.innerHTML = ""; // Clear old list
    skillsArray.forEach(function (skill) {
        var li = document.createElement("li");
        li.innerText = skill;
        previewSkillsList.appendChild(li);
    });
    // Show the resume preview
    resumePreview.style.display = "block";
});
