# Certifico

## Overview
**Certifico** is a Certificate Verification System designed to streamline the management and retrieval of
certificates for students. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), this system allows administrators to upload student data in Excel format, which is then processed and stored in a MongoDB database. Students can subsequently search for their certificates using unique certificate IDs, view their details, and download them.

## Features

### Admin Features:
- **Excel Data Upload:** Admins can upload an Excel file containing student information, such as certificate ID, student name, internship domain, starting date, and ending date. The system processes the Excel data and stores it in a MongoDB database.

### Student Features:
- **Certificate Retrieval:** Students can search for their certificates using a unique certificate ID. The system retrieves and displays the relevant certificate details, including the student’s name, internship domain, and the dates of the internship.
- **Certificate Generation:** A certificate template with fields (student name, internship domain, and dates) is generated dynamically based on the search results.
- **Download Option:** Students can download their certificate in a specified format (e.g., PDF) after viewing it.

### General Features:
- **User Authentication:** Secure user registration and login system.
 
## Tech Stack

- **Backend:**
  - Node.js with Express.js
  - MongoDB with Mongoose (NoSQL database)
  - JWT for authentication

## Getting Started

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager, included with Node.js)
- [Git](https://git-scm.com/)

# Contribution Guide

## Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```bash
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

For example:

```bash
git clone git@github.com:this-is-you/job-board-api.git
```

where `this-is-you` is your GitHub username. Here you're copying the contents of the first-contributions repository on GitHub to your computer.

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```bash
cd job-board-api
```

Now create a branch using the `git switch` command:

```bash
git switch -c your-new-branch-name
```

For example:

```bash
git switch -c add-alonzo-church
```

### Important notice:

```bash
  console.log
```

is not allowed

a default logger has been created

```bash
  import log from "./utils/logger";

  log.info("information")
```

### Make Changes

Make your changes to the codebase. Ensure your code follows the project's coding standards and guidelines.

## commit those changes

<img align="right" width="450" src="https://firstcontributions.github.io/assets/Readme/git-status.png" alt="git status" />

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

## Push changes to GitHub

Push your changes using the command `git push`:

```bash
git push -u origin your-branch-name
```

replacing `your-branch-name` with the name of the branch you created earlier.

<details>
<summary> <strong>If you get any errors while pushing, click here:</strong> </summary>

- ### Authentication Error
     <pre>remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
  remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
  fatal: Authentication failed for 'https://github.com/<your-username>/first-contributions.git/'</pre>
  Go to [GitHub's tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) on generating and configuring an SSH key to your account.

</details>

## Submit your changes for review into Staging

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

Now submit the pull request.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

Soon your changes will be merged into the staging branch of this project. You will get a notification email once the changes have been merged.

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine using Git.

```sh
git clone https://github.com/your-username/[app-name].git
cd [app-name]
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies.

```sh
yarn
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory of the project and add your environment-specific variables. You can use the provided `.env.example` file as a reference.

```sh
cp .env.example .env
```

Edit the `.env` file to match your environment configuration.

### 4. Run the Development Server

Start the development server with the following command. This will also watch for any changes in your code and automatically restart the server.

```sh
yarn start:dev
```

### 5. Run the Production Server

To run the application in a production environment, use the following command:

```sh
yarn start
```

### 7. Verify the Setup

Open your browser and navigate to `http://localhost:8080` to verify that the application is running correctly.

## API Endpoints

All API endpoints can be referenced in the [API Reference](API_REFERENCE.md) document.

## Versioning

This project is versioned to ensure backward compatibility and easy maintenance. The current version is [version 1].

## route naming conventions

all routes should have a prefix of

```bash
  api/v1
```
