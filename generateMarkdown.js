function generateMarkdown(data) {
  return `# ${data.projectName}

    ## Description  
    ${data.description}. Check it out at ${data.url}

    ## Table of Contents

    * [Installation](#installation)

    * [Usage](#usage)

    * [License](#license)

    * [Contributing](#contributing)

    * [Tests](#tests)

    * [Questions](#questions)
    

    ## Installation

    To install necessary dependencies, run the following command:

    \`\`\`
    ${data.install}
    \`\`\`

    ## Usage

    ${data.usage}

    ##License
    
    ${data.license}

    ## Contributing

    ${data.contribute}

    ## Tests

    To run tests, run the following command:

    \`\`\`
    ${data.tests}
    \`\`\`

    ## Questions

    If you have any questions about the repo, open and issue or contact ${data.username} directly at ${data.email}.

    `;
}

module.exports = generateMarkdown;
