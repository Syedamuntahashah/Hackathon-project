"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var html2pdf_js_1 = require("html2pdf.js");
// Function to save resume data
var saveButtonHandler = function (buttonId, contentId) {
    var button = document.getElementById(buttonId);
    var content = document.getElementById(contentId);
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
        var text = (content === null || content === void 0 ? void 0 : content.textContent) || '';
        alert("".concat(buttonId, " saved!"));
        // Implement local storage or server save here if needed
    });
};
// Set up save handlers for different sections
saveButtonHandler('save-personal-info', 'display-name');
saveButtonHandler('save-education', 'education-content');
saveButtonHandler('save-skills', 'skills-content');
saveButtonHandler('save-work-experience', 'work-experience-content');
// Generate unique URL
var usernameInput = document.getElementById('username');
var submitButton = document.getElementById('submit-button');
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', function () {
    var username = usernameInput.value;
    if (username) {
        var uniqueUrl = "https://your-app.vercel.app/".concat(username, "/resume");
        alert("Your unique URL: ".concat(uniqueUrl));
    }
    else {
        alert('Please enter a username.');
    }
});
// Copy link to clipboard
var copyButton = document.getElementById('copy-link');
var resumeUrl = window.location.href;
copyButton === null || copyButton === void 0 ? void 0 : copyButton.addEventListener('click', function () {
    navigator.clipboard.writeText(resumeUrl)
        .then(function () { return alert('Link copied!'); })
        .catch(function (err) { return console.error('Failed to copy link', err); });
});
// Download as PDF
var downloadButton = document.getElementById('download-pdf');
var resumeSection = document.getElementById('editable-resume');
downloadButton === null || downloadButton === void 0 ? void 0 : downloadButton.addEventListener('click', function () {
    if (resumeSection) {
        (0, html2pdf_js_1.default)().from(resumeSection).save('resume.pdf')
            .catch(function (err) { return console.error('Failed to generate PDF', err); });
    }
    else {
        console.error('Resume section not found.');
    }
});
