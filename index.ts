function addEducation(): void {
    const educationContainer = document.getElementById('education-container') as HTMLElement;

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

function buildResume(): void {
    const name: string = (document.getElementById('name') as HTMLInputElement).value;
    const intro: string = (document.getElementById('intro') as HTMLTextAreaElement).value;
    const phone: string = (document.getElementById('phone') as HTMLInputElement).value;
    const email: string = (document.getElementById('email') as HTMLInputElement).value;

    const educationEntries = document.querySelectorAll('.education-entry');
    const educationData: Array<{ educationLevel: string, fieldOfStudy: string, startYear: string, endYear: string }> = [];
    
    educationEntries.forEach(entry => {
        const educationLevel = (entry.querySelector('select[name="education[]"]') as HTMLSelectElement).value;
        const fieldOfStudy = (entry.querySelector('select[name="field_of_study[]"]') as HTMLSelectElement).value;
        const startYear = (entry.querySelector('input[name="start_year[]"]') as HTMLInputElement).value;
        const endYear = (entry.querySelector('input[name="end_year[]"]') as HTMLInputElement).value;

        educationData.push({ educationLevel, fieldOfStudy, startYear, endYear });
    });

const skillsList = document.getElementById("skills-list") as HTMLUListElement;
const skills: string[] = Array.from(skillsList.children).map(skill => skill.textContent || '');

let experience: string = (document.getElementById('experience') as HTMLTextAreaElement).value;

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
                        font-family: "Roboto Mono", monospace;
                        color: white;
                    }
                    .container {
                        width: 60%;
                        margin: auto;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        text-align: center;
                        color: #34034b;
                        font-size: 2.5em;
                        margin-bottom: 10px;
                    }
                    h2 {
                        color: #34034b;
                        font-size: 1.5em;
                        margin-top: 20px;
                    }
                    p, ul {
                        font-size: 16px;
                        line-height: 1.6;
                        color: #371a44;
                    }
                    .resume-section {
                        margin-bottom: 20px;
                        padding: 15px;
                        background: #f8f9fa;
                        border-left: 5px solid #007bff;
                        border-radius: 5px;
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
function addSkill(): void {
    const skillsSelect = document.getElementById("skills") as HTMLSelectElement;
    const selectedSkill = skillsSelect.options[skillsSelect.selectedIndex].text;
    const selectedValue = skillsSelect.value;

    if (selectedValue === "") {
        alert("Please select a skill first.");
        return;
    }

    const skillsList = document.getElementById("skills-list") as HTMLUListElement;
    const skillItem = document.createElement("li");
    skillItem.textContent = selectedSkill;
    skillsList.appendChild(skillItem);
    skillsSelect.selectedIndex = 0;
}
