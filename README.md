# CircularTech

A responsive website presenting a sustainable device subscription
concept based on a circular supply chain. The project includes
automated checks and deployment through GitHub Actions.

## Live Website

[Visit CircularTech](https://malavjoshi003.github.io/circulartech/)

## Project Overview

CircularTech explores an alternative to traditional device ownership:
subscribe, use, return, and refurbish.

The website explains how electronic devices could stay useful for
longer through maintenance, refurbishment, and reuse.

This is an academic demonstration. It does not process payments,
manage real subscriptions, or send contact-form messages.

## Features

- Responsive layout with mobile navigation
- Homepage introducing the subscription concept
- Illustrative subscription plans and pricing
- Circular supply chain process information
- Sustainability goals and project background
- Frequently asked questions
- Contact form with browser-side validation
- Automated website checks
- Automatic deployment to GitHub Pages

## Technologies and Tools

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive layouts |
| JavaScript | Navigation and form interactions |
| Git | Version control |
| GitHub | Source code hosting |
| GitHub Actions | CI/CD automation |
| Python | Required-file and local-link checks |
| Node.js | JavaScript syntax checking |
| GitHub Pages | Static website hosting |

## Project Structure

    circulartech/
    ├── .github/
    │   └── workflows/
    │       └── deploy.yml
    ├── scripts/
    │   └── check_site.py
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    ├── images/
    │   └── scsc-diagram.png
    ├── index.html
    ├── how-it-works.html
    ├── plans.html
    ├── impact.html
    ├── about.html
    └── README.md

## Run Locally

1. Clone the repository:

       git clone https://github.com/malavjoshi003/circulartech.git

2. Open the circulartech folder.
3. Open index.html in a web browser.

No package installation or build step is required to view the website.

## CI/CD Pipeline

The workflow is defined in `.github/workflows/deploy.yml`.

### Triggers

- Pushes to main run checks and deploy the website.
- Pull requests targeting main run checks without deploying.

### Continuous Integration

The Check website job:

1. Downloads the repository code.
2. Checks that required website files exist and are not empty.
3. Checks that local href and src file references in HTML exist.
4. Checks the syntax of js/script.js using Node.js.

These checks do not validate external links, full HTML correctness,
or browser interactions.

### Continuous Deployment

After the checks pass on a push to main:

1. HTML, CSS, JavaScript, and images are copied into a deployment folder.
2. The website is uploaded as a GitHub Pages artifact.
3. The Deploy website job publishes the artifact to GitHub Pages.

A failed check prevents deployment. After the initial setup,
no manual deployment command or approval is required.

    Edit → Commit → Push to main → Check → Package → Deploy

The workflow is triggered by a push. If several commits are pushed
together, the workflow deploys the resulting version.

## Verification

### Failed Check Demonstration

The initial workflow detected a missing images/logo.png reference
in impact.html. The check failed and deployment was skipped.

After the reference was corrected and pushed, the workflow succeeded.

### Automatic Deployment Demonstration

The homepage headline was changed from “Smarter tech.” to
“Smarter technology.”

After the change was committed and pushed, GitHub Actions
automatically checked and deployed the updated website.
The new headline appeared at the public website URL.

## Updating the Website

After editing and saving a file, stage that file, commit, and push.
For example:

    git add index.html
    git commit -m "Update homepage content"
    git push

Open the repository’s Actions tab to view the pipeline result.

## Project Contributions and Credits

### Original Project

The original Subscription-Based Circular Supply Chain (SCSC)
website was supplied by Parin Shah and used with his permission.

The original website credits Parin Shah, Dev Rana, and their
student team at Navrachana University, Vadodara.

[Original SCSC repository](https://github.com/ParinShah2312/Subscription-Based-Circular-Supply-Chain-)

The supply chain diagram is retained from the original project.

### CircularTech Adaptation

Adapted by Malav Joshi, with assistance from OpenAI Codex.

Work on this adaptation includes:

- CircularTech branding and refreshed website content
- Updated styling and browser interactions
- GitHub repository setup
- Automated required-file and local-link checks
- JavaScript syntax checking
- GitHub Actions CI/CD workflow
- Automatic GitHub Pages deployment
- Pipeline troubleshooting and deployment verification
- Project documentation

[Malav Joshi’s GitHub profile](https://github.com/malavjoshi003)