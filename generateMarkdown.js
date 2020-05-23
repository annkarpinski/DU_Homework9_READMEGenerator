function generateMarkdown(data) {
  return `# ${data.projectName}

![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

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

Be aware of the following when using this repo:
${data.usage}

## License
    
${data.license}

 ## Contributing

 To contribute to ${data.projectName}, take note of: ${data.contribute} 
 
 and follow these steps:

 1. Fork this repository.
 2. Create a branch: \`git checkout -b <branch_name>\`.
 3. Make your changes and commit them: \`git commit -m \'<commit_message>\'\`
 4. Push to the original branch: \`git push origin <project_name>/<location>\`
 5. Create the pull request.

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact **${data.username}** directly at <${data.email}>.

`;
}

module.exports = generateMarkdown;
