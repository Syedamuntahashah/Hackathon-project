import html2pdf from 'html2pdf.js';

// Function to save resume data
const saveButtonHandler = (buttonId: string, contentId: string) => {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);
    
    button?.addEventListener('click', () => {
        const text = content?.textContent || '';
        alert(`${buttonId} saved!`);
        // Implement local storage or server save here if needed
    });
};

// Set up save handlers for different sections
saveButtonHandler('save-personal-info', 'display-name');
saveButtonHandler('save-education', 'education-content');
saveButtonHandler('save-skills', 'skills-content');
saveButtonHandler('save-work-experience', 'work-experience-content');

// Generate unique URL
const usernameInput = document.getElementById('username') as HTMLInputElement;
const submitButton = document.getElementById('submit-button');

submitButton?.addEventListener('click', () => {
    const username = usernameInput.value;
    if (username) {
        const uniqueUrl = `https://your-app.vercel.app/${username}/resume`;
        alert(`Your unique URL: ${uniqueUrl}`);
    } else {
        alert('Please enter a username.');
    }
});

// Copy link to clipboard
const copyButton = document.getElementById('copy-link');
const resumeUrl = window.location.href;

copyButton?.addEventListener('click', () => {
    navigator.clipboard.writeText(resumeUrl)
        .then(() => alert('Link copied!'))
        .catch(err => console.error('Failed to copy link', err));
});

// Download as PDF
const downloadButton = document.getElementById('download-pdf');
const resumeSection = document.getElementById('editable-resume') as HTMLElement;

downloadButton?.addEventListener('click', () => {
    if (resumeSection) {
        html2pdf().from(resumeSection).save('resume.pdf')
            .catch(err => console.error('Failed to generate PDF', err));
    } else {
        console.error('Resume section not found.');
    }
});
