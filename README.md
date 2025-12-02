# Node.js CI/CD Project with Docker and GitHub Actions

A simple Node.js application with automated CI/CD pipeline using Docker and GitHub Actions. This project showcases how to set up a complete deployment workflow on a self-hosted Windows machine using WSL, Docker Desktop, and GitHub Actions.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [CI/CD Pipeline](#cicd-pipeline)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Node.js Express API for task management.
- Dockerized application for easy deployment.
- Automated CI/CD pipeline with GitHub Actions using a self-hosted runner.
- Local deployment on a Windows 11 machine using WSL and Docker Desktop.
- Automated build, test, deploy, and cleanup steps.

---

## Prerequisites

- **Windows 11 Pro** (for WSL and Docker Desktop)
- **WSL with Ubuntu 22.04**
- **Docker Desktop** (with WSL 2 integration enabled)
- **Node.js LTS**
- **GitHub Account**
- **Git** (CLI or VS Code)

---

## Project Structure
node-windows-github-action-cicd/
├── .github/
│ └── workflows/
│ └── deploy.yml
├── app.js
├── package.json
├── Dockerfile
├── .gitignore
└── README.md

---

## Setup Instructions

1. Clone the repository:
- *git clone https:*//github.com/TrendTactician/node-windows-github-action-cicd.git


2. Install dependencies:
- npm install


3. Build Docker image:
- docker build -t node-app .


4. Run Docker container:
- docker run -d --name node-app-container -p 3000:3000 node-app
(Please note here we have specified the container name so when we make changes it stop old container before creating and deploying new container)


5. Access your app at `http://localhost:3000`.

6. Set up GitHub Actions self-hosted runner as described in the [GitHub Actions documentation](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners).

---

## CI/CD Pipeline

- **Checkout code**: Pulls your repo code.
- **Install dependencies**: Runs `npm install`.
- **Test**: Runs `npm test` (simple echo script for now).
- **Build Docker**: Builds the Docker image.
- **Deploy**: Runs the Docker container.
- **Stop and cleanup**: Stops and removes old containers for clean deployments.

---

## Usage

- Make changes to your code and commit.
- Push your changes to trigger the CI/CD pipeline.
- Access your deployed app at `http://localhost:3000`.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Documentation](https://docs.docker.com)

