function licenseBadge(license) {
    if (license !== "None") {
        return `<img src="https://img.shields.io/badge/license-${license}-blue.svg">`;
    } else {
        return "";
    }
};

function licenseLink(license) {
    if (license !== "None") {
        return `* [License](# license)`;
    }
    else {
        return "";
    }
};

function licenseSection(license) {
    if (license !== "none") {
        return ` 
    # License 
    
    > This project is licensed under ${license}`;
    }
    else {
        return "";
    }
}

// Generates Markdown
function generateMarkdown(data) {
    return `# ${data.title}
    ${licenseBadge(data.license)}
    ${licenseSection(data.license)};
    
    # Description

   > ${data.description}
    
    # Table of Contents
     * [Install](# install)

     * [Usage](# usage)
    
    * [Contributors](# contributors)
    
    * [Tests](# testInstructions)
    
    ${licenseLink(data.license)}
    # Install
    > ${data.install}
    # Usage
    > ${data.usage}
    # Contributors
    > ${data.contributors}
    # Tests
    > ${data.testInstructions}
    # Questions
    ## If you have questions, then please email me at ${data.email}`;
}

module.exports = generateMarkdown;