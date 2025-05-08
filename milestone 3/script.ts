(() => {
  
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const profilePicInput = document.getElementById("profile-pic") as HTMLInputElement;
  const educationInput = document.getElementById("education") as HTMLTextAreaElement;
  const skillsInput = document.getElementById("skills") as HTMLTextAreaElement;
  const workInput = document.getElementById("work-experience") as HTMLTextAreaElement;

  const updateButton = document.getElementById("update-resume") as HTMLButtonElement;

  
  const previewName = document.getElementById("preview-name") as HTMLElement;
  const previewEmail = document.getElementById("preview-email") as HTMLElement;
  const previewPic = document.getElementById("preview-pic") as HTMLImageElement;
  const previewEducation = document.querySelector("#preview-education p") as HTMLElement;
  const previewSkillsList = document.querySelector("#preview-skills ul") as HTMLUListElement;
  const previewWork = document.querySelector("#preview-work p") as HTMLElement;
  const resumePreview = document.getElementById("resume-preview") as HTMLElement;

  updateButton.addEventListener("click", () => {
    
    previewName.innerText = nameInput.value;
    previewEmail.innerText = emailInput.value;
    previewPic.src = profilePicInput.value;
    previewEducation.innerText = educationInput.value;
    previewWork.innerText = workInput.value;

    
    const skillsArray = skillsInput.value.split(",").map(skill => skill.trim()).filter(skill => skill !== "");
    previewSkillsList.innerHTML = ""; 

    skillsArray.forEach(skill => {
      const li = document.createElement("li");
      li.innerText = skill;
      previewSkillsList.appendChild(li);
    });

    
    resumePreview.style.display = "block";
  });
})();
