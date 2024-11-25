"use strict";

function addEducation(): void {
    const educationContainer = document.getElementById('education-container') as HTMLElement;
    const newEducationEntry = document.createElement('div');
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


function removeEducation(entry: HTMLElement): void {
    entry.remove();
}


function addSkill(): void {
    const skillsDropdown = document.getElementById('skills') as HTMLSelectElement;
    const selectedSkill = skillsDropdown.value;

   
    if (!selectedSkill) {
        alert('Please select a skill before adding!');
        return;
    }

    const skillsList = document.getElementById('skills-list') as HTMLElement;

    
    const existingSkills = Array.from(skillsList.children).map(skill => skill.textContent || '');
    if (existingSkills.includes(selectedSkill)) {
        alert('Skill already added!');
        return;
    }

    
    const newSkillItem = document.createElement('li');
    newSkillItem.textContent = selectedSkill;

   
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.style.marginLeft = '10px';
    removeButton.onclick = function () {
        skillsList.removeChild(newSkillItem);
    };

    
    newSkillItem.appendChild(removeButton);

    
    skillsList.appendChild(newSkillItem);

  
    skillsDropdown.value = '';
}


function buildResume(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const intro = (document.getElementById('intro') as HTMLTextAreaElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;

    const educationEntries = document.querySelectorAll('.education-entry');
    const educationData: { educationLevel: string, fieldOfStudy: string, startYear: string, endYear: string }[] = [];

    educationEntries.forEach((entry: Element) => {
        const educationLevel = (entry.querySelector('select[name="education[]"]') as HTMLSelectElement).value;
        const fieldOfStudy = (entry.querySelector('select[name="field_of_study[]"]') as HTMLSelectElement).value;
        const startYear = (entry.querySelector('input[name="start_year[]"]') as HTMLInputElement).value;
        const endYear = (entry.querySelector('input[name="end_year[]"]') as HTMLInputElement).value;
        educationData.push({ educationLevel, fieldOfStudy, startYear, endYear });
    });

    const skillsList = document.getElementById('skills-list') as HTMLElement;
    const skills: string[] = [];
    
  
    function toTitleCase(str: string): string {
        return str
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    
    
    const skillItems = skillsList.children;
    for (let i = 0; i < skillItems.length; i++) {
        
        const skillItem = skillItems[i] as HTMLLIElement;
        const skillName = skillItem.textContent?.replace('Remove', '').trim() || '';
        if (skillName) {
            skills.push(toTitleCase(skillName)); 
        }
    }
    
    console.log(skills);
    

    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

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
                        background-image: url('back\\ 2.png');
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
                        border: 5px solid #8988a6;
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
                            ${educationData.map((edu) => {
                                return `<li>${edu.educationLevel} in ${edu.fieldOfStudy} (${edu.startYear}-${edu.endYear})</li>`;
                            }).join('')}
                        </ul>
                    </div>
                    <div class="resume-section">
                        <h2>Skills</h2>
                        <ul>
                            ${skills.map(function (skill) { 
                                return `<li>${skill}</li>`; 
                            }).join('')}
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
