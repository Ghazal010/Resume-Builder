function addEducation() {
    var educationContainer = document.getElementById('education-container');
    var newEducationEntry = document.createElement('div');
    newEducationEntry.classList.add('education-entry');
    newEducationEntry.innerHTML = "\n        <label for=\"education\">Education Level</label>\n        <select name=\"education[]\" required>\n            <option value=\"High School\">High School</option>\n            <option value=\"Bachelors\">Bachelor's Degree</option>\n            <option value=\"Masters\">Master's Degree</option>\n            <option value=\"PHD\">PhD</option>\n        </select>\n\n        <label for=\"field_of_study\">Field of Study</label>\n        <select name=\"field_of_study[]\" required>\n            <option value=\"Computer Science\">Computer Science</option>\n            <option value=\"Engineering\">Engineering</option>\n            <option value=\"Business\">Business</option>\n            <option value=\"Arts\">Arts</option>\n        </select>\n\n        <label for=\"start_year\">Starting Year</label>\n        <input type=\"number\" name=\"start_year[]\" placeholder=\"Enter starting year\" min=\"1984\" max=\"2099\" required>\n\n        <label for=\"end_year\">Ending Year</label>\n        <input type=\"number\" name=\"end_year[]\" placeholder=\"Enter ending year\" min=\"1984\" max=\"2099\" required>\n    ";
    educationContainer.appendChild(newEducationEntry);
}
function buildResume() {
    var name = document.getElementById('name').value;
    var intro = document.getElementById('intro').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var educationEntries = document.querySelectorAll('.education-entry');
    var educationData = [];
    educationEntries.forEach(function (entry) {
        var educationLevel = entry.querySelector('select[name="education[]"]').value;
        var fieldOfStudy = entry.querySelector('select[name="field_of_study[]"]').value;
        var startYear = entry.querySelector('input[name="start_year[]"]').value;
        var endYear = entry.querySelector('input[name="end_year[]"]').value;
        educationData.push({ educationLevel: educationLevel, fieldOfStudy: fieldOfStudy, startYear: startYear, endYear: endYear });
    });
    var skillsList = document.getElementById("skills-list");
    var skills = Array.from(skillsList.children).map(function (skill) { return skill.textContent || ''; });
    var experience = document.getElementById('experience').value;
    var newTab = window.open();
    if (newTab) {
        newTab.document.write("\n            <!DOCTYPE html>\n            <html lang=\"en\">\n            <head>\n                <meta charset=\"UTF-8\">\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                <title>".concat(name, "'s Resume</title>\n                <link href=\"style.css\" rel=\"stylesheet\"> \n                <style>\n                    body {\n                        font-family: Arial, sans-serif;\n                        background-image: url(2\\ (1).png);\n                        background-repeat: no-repeat;\n                        background-size: cover;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        height: auto;\n                        margin: 0;\n                        font-family: \"Roboto Mono\", monospace;\n                        color: white;\n                    }\n                    .container {\n                        width: 60%;\n                        margin: auto;\n                        padding: 20px;\n                        background: #ffffff;\n                        border-radius: 10px;\n                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n                    }\n                    h1 {\n                        text-align: center;\n                        color: #34034b;\n                        font-size: 2.5em;\n                        margin-bottom: 10px;\n                    }\n                    h2 {\n                        color: #34034b;\n                        font-size: 1.5em;\n                        margin-top: 20px;\n                    }\n                    p, ul {\n                        font-size: 16px;\n                        line-height: 1.6;\n                        color: #371a44;\n                    }\n                    .resume-section {\n                        margin-bottom: 20px;\n                        padding: 15px;\n                        background: #f8f9fa;\n                        border-left: 5px solid #007bff;\n                        border-radius: 5px;\n                    }\n                    .resume-section ul {\n                        list-style-type: none;\n                        padding: 0;\n                    }\n                    .resume-section li {\n                        padding: 5px 0;\n                    }\n                </style>\n            </head>\n            <body>\n                <div class=\"container\">\n                    <h1>").concat(name, "</h1>\n                    <p>").concat(intro, "</p>\n                    <p><strong>Phone:</strong> ").concat(phone, "</p>\n                    <p><strong>Email:</strong> ").concat(email, "</p>\n                    <div class=\"resume-section\">\n                        <h2>Education</h2>\n                        <ul>\n        "));
        educationData.forEach(function (edu) {
            newTab.document.write("\n                <li>".concat(edu.educationLevel, " in ").concat(edu.fieldOfStudy, " (").concat(edu.startYear, "-").concat(edu.endYear, ")</li>\n            "));
        });
        newTab.document.write("\n                        </ul>\n                    </div>\n                    <div class=\"resume-section\">\n                        <h2>Skills</h2>\n                        <ul>\n        ");
        skills.forEach(function (skill) {
            newTab.document.write("\n         <li>".concat(skill, "</li>\n            "));
        });
        newTab.document.write("\n                        </ul>\n                    </div>\n                    <div class=\"resume-section\">\n                        <h2>Experience Level</h2>\n                        <p>".concat(experience, "</p>\n                    </div>\n                </div>\n            </body>\n            </html>\n        "));
        newTab.document.close();
    }
}
function addSkill() {
    var skillsSelect = document.getElementById("skills");
    var selectedSkill = skillsSelect.options[skillsSelect.selectedIndex].text;
    var selectedValue = skillsSelect.value;
    if (selectedValue === "") {
        alert("Please select a skill first.");
        return;
    }
    var skillsList = document.getElementById("skills-list");
    var skillItem = document.createElement("li");
    skillItem.textContent = selectedSkill;
    skillsList.appendChild(skillItem);
    skillsSelect.selectedIndex = 0;
}
