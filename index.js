function addEducation() {
    const educationContainer = document.getElementById('education-container');

    let newEducationEntry = document.createElement('div');
    newEducationEntry.classList.add('education-entry');

    newEducationEntry.innerHTML = `
        <label for="education">Education Level</label>
        <select name="education[]" required>
            <option value="High School">High School</option>
            <option value="Bachelors">Bachelor's Degree</option>
            <option value="Masters">Master's Degree</option>
            <option value="PHD">PhD</option>
        </select>

        <label for="field_of_study">Field of Study</label>
        <select name="field_of_study[]" required>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Business">Business</option>
            <option value="Arts">Arts</option>
        </select>

        <label for="start_year">Starting Year</label>
        <input type="number" name="start_year[]" placeholder="Enter starting year" min="1984" max="2099" required>

        <label for="end_year">Ending Year</label>
        <input type="number" name="end_year[]" placeholder="Enter ending year" min="1984" max="2099" required>
    `;

    educationContainer.appendChild(newEducationEntry);
}

function buildResume() {
    const name = document.getElementById('name').value;
    const intro = document.getElementById('intro').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const educationEntries = document.querySelectorAll('.education-entry');
    const educationData = [];
    
    educationEntries.forEach(entry => {
        const educationLevel = entry.querySelector('select[name="education[]"]').value;
        const fieldOfStudy = entry.querySelector('select[name="field_of_study[]"]').value;
        const startYear = entry.querySelector('input[name="start_year[]"]').value;
        const endYear = entry.querySelector('input[name="end_year[]"]').value;

        educationData.push({ educationLevel, fieldOfStudy, startYear, endYear });
    });

    const skillsList = document.getElementById("skills-list");
    const skills = Array.from(skillsList.children).map(skill => skill.textContent || '');

    const experience = document.getElementById('experience').value;

    const newTab = window.open();
    if (newTab) {
        newTab.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${name}'s Resume</title>
                <link href="style.css" rel="stylesheet"> 
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-image: url(back\ 2.png);
                        background-repeat: no-repeat;
                        background-size: cover;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: auto;
                        margin: 0;
                        font-family:'Times New Roman', Times, serif;
                        color: white;
                    }
                    .container {
                        width: 60%;
                        margin: auto;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                        background-image: url(back\\ 4.png);
                    }
                    h1 {
                        text-align: center;
                        color: white;
                        font-size: 2.5em;
                        margin-bottom: 10px;
                        font-family:'Times New Roman', Times, serif;
                    }
                    h2 {
                        color: #78866b;
                        font-size: 1.5em;
                        margin-top: 20px;
                    }
                    p, ul {
                        font-size: 16px;
                        line-height: 1.6;
                        color: #010203;
                    }
                    .resume-section {
                        margin-bottom: 20px;
                        padding: 15px;
                        background: #f7f4e5;
                        border: 5px solid #78866b;
                        border-radius: 20px;
                    }
                    .resume-section ul {
                        list-style-type: none;
                        padding: 0;
                    }
                    .resume-section li {
                        padding: 5px 0;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>${name}</h1>
                    <p>${intro}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <div class="resume-section">
                        <h2>Education</h2>
                        <ul>
        `);

        educationData.forEach(edu => {
            newTab.document.write(`
                <li>${edu.educationLevel} in ${edu.fieldOfStudy} (${edu.startYear}-${edu.endYear})</li>
            `);
        });

        newTab.document.write(`
                        </ul>
                    </div>
                    <div class="resume-section">
                        <h2>Skills</h2>
                        <ul>
        `);

        skills.forEach(skill => {
            newTab.document.write(`
                <li>${skill}</li>
            `);
        });

        newTab.document.write(`
                        </ul>
                    </div>
                    <div class="resume-section">
                        <h2>Experience Level</h2>
                        <p>${experience}</p>
                    </div>
                </div>
            </body>
            </html>
        `);

        newTab.document.close();
    }
}

function addSkill() {
    const skillsSelect = document.getElementById("skills");
    const selectedSkill = skillsSelect.options[skillsSelect.selectedIndex].text;
    const selectedValue = skillsSelect.value;

    if (selectedValue === "") {
        alert("Please select a skill first.");
        return;
    }

    const skillsList = document.getElementById("skills-list");
    const skillItem = document.createElement("li");
    skillItem.textContent = selectedSkill;
    skillsList.appendChild(skillItem);
    skillsSelect.selectedIndex = 0;
}
