function renderLicenseBadge(license) {
    if (license !== "none") {
        return `<img src="https://img.shields.io/badge/license-${license}-blue.svg">`;
    } else {
        return "";
    }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "none") {
        return `* [License](#license)`;
    } else {
        return "";
    }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "none") {
        return ` 
    
    # License 
    
    > This project is licensed under ${license}`;
    } else {
        return "";
    }
}

// Generates Markdown
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ${renderLicenseSection(data.license)};
    
    # Description
   > ${data.description}
    
    # Table of Contents
     * [Installaton](#install)
     * [Usage](#usage)
     * [Contribution](#contributors)
     * [Tests](#testInstructions)
    
    ${renderLicenseLink(data.license)}
    # Installation
    > ${data.install}
    # Usage
    > ${data.usage}
    # Contribution
    > ${data.contributors}
    # Tests
    > ${data.testInstructions}
    # Questions
    ## If you have questions, then please email me at ${data.email}`;
}

module.exports = generateMarkdown;