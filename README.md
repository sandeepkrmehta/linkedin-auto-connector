# LinkedIn Auto Connector

This document contains an assignment for a ReactJS intern role, where the task is to build a Chrome Extension using the **wxt.dev** framework with React. The extension is designed to automate connection requests on LinkedIn.

## Objective

Create a Chrome Extension that automates connection requests on LinkedIn using React and the **wxt.dev** framework.

## Assignment Overview

- **Target URL**: The extension must work on LinkedIn's "My Network - Grow" page: [LinkedIn Grow](https://www.linkedin.com/mynetwork/grow).

- **UI Requirement**: 
  - Add a floating button on the page labeled **"Connect with All"**.

- **Functionality**: 
  - When the **"Connect with All"** button is clicked:
    - Automatically triggers the **"Connect"** button for all visible profiles on the page.
    - If there are 50 connectable profiles, 50 connection requests should be sent.

## Additional Requirements

- Add a delay between each connection request to avoid LinkedIn blocking the account.
  - **Delay**: Approximately **1-3 seconds**.
- Handle edge cases (e.g., no connectable profiles available).

## Constraints

- Use the **wxt.dev** framework.
- Code must be clean and well-commented.
- Handle edge cases, such as no profiles to connect.

## Deliverables

1. A demo video showcasing the extension's functionality.
2. A link to the GitHub repository containing the code.
3. The packaged extension in zip format for easy installation.

## Getting Started

To get started with the project, clone the repository and set up the project:

```bash
# Clone the Repository
git clone https://github.com/sandeepkrmehta/sandeepkrmehta-linkedin-auto-connector.git

# Navigate to the Project Directory
cd linkedin-auto-connector

# Install Dependencies
npm install

# Build the Extension
npm run build

# Load the Extension in Chrome
# Open Chrome and go to chrome://extensions/
# Enable "Developer mode"
# Click on "Load unpacked" and select the build folder
