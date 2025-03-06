# Contributing to Shoply

Thank you for your interest in contributing to Shoply! We welcome contributions from the community and are excited to work with you. Below are some guidelines to help you get started.

## Table of Contents

-   [Code of Conduct](#code-of-conduct)
-   [How to Contribute](#how-to-contribute)
    -   [Reporting Bugs](#reporting-bugs)
    -   [Suggesting Enhancements](#suggesting-enhancements)
    -   [Submitting Pull Requests](#submitting-pull-requests)
-   [Development Setup](#development-setup)
-   [Style Guides](#style-guides)
    -   [Git Commit Messages](#git-commit-messages)
    -   [Code Style](#code-style)
-   [License](#license)

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a positive experience for everyone involved in our community.

## How to Contribute

### Reporting Bugs

If you find a bug in the project, please open an issue on GitHub with the following information:

-   A clear and descriptive title
-   A detailed description of the problem
-   Steps to reproduce the issue
-   Any relevant screenshots or code snippets
-   Your environment information (e.g., operating system, browser, Node.js version)

### Suggesting Enhancements

If you have an idea for a new feature or an improvement, please open an issue on GitHub with the following information:

-   A clear and descriptive title
-   A detailed description of the enhancement
-   Any relevant use cases or examples
-   Any potential implementation ideas

### Submitting Pull Requests

1. Fork the repository on GitHub.
2. Create a new branch from the `main` branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them with clear and descriptive commit messages.
4. Push your changes to your fork:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a pull request on GitHub and provide a detailed description of your changes.

## Development Setup

To set up the development environment, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/sr-githaka/shoply.git
    ```
2. Navigate to the project directory:
    ```bash
    cd shoply
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Build the project:
    ```bash
    npm run build
    ```
5. Start the development server:
    ```bash
    npm run dev
    ```

## Style Guides

### Git Commit Messages

-   Use the present tense ("Add feature" not "Added feature")
-   Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
-   Limit the first line to 72 characters or less
-   Reference issues and pull requests when applicable (e.g., `Fixes #123`)

### Code Style

-   Follow the coding conventions used in the project
-   Use TypeScript for type safety
-   Ensure your code passes the linting checks:
    ```bash
    npm run lint
    ```

## License

By contributing to Shoply, you agree that your contributions will be licensed under the MIT License.
