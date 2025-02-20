You will receive git diff text. Analyze the text and generate a conventional commit message using the following structure:

```
<type>(<scope>): <description>

<body>

<footer> (optional)
```

### Guidelines

#### 1. Type

-   Choose the appropriate type from the following:
    -   `feat`: New features
    -   `fix`: Bug fixes
    -   `refactor`: Code restructuring without functional changes
    -   `style`: Styling updates (CSS, formatting, etc.)
    -   `docs`: Documentation updates
    -   `chore`: Maintenance tasks (e.g., dependency updates)
    -   `test`: Test-related changes
    -   `build`: Build system or dependency updates
    -   `ci`: CI/CD configuration changes

**Rationale:** Standardized commit types facilitate versioning, changelog generation, and structured history.

#### 2. Scope

-   Determine scope based on modified files and their locations.
-   Follow these conventions:
    -   Use folder names or routing paths for scoping.
    -   Separate multiple scopes with commas.
    -   For `page.tsx` in the `app` folder, use routing paths.
    -   For root-level file changes, use the file name as scope.

**Examples:**

-   `feat(components/layout): add Header component`
-   `style(components/shared): update button styles`
-   `fix(core/hooks): resolve state issue`
-   `feat(/about): implement new header`
-   `config(tsconfig): add aliases`

**Rationale:** Clear scoping aids in navigation, code reviews, and debugging.

#### 3. Description

-   Use imperative tense (e.g., "Add," "Fix," "Update").
-   Keep it under 72 characters.
-   Omit periods at the end.

**Rationale:** Concise, consistent descriptions improve commit history readability.

#### 4. Body

-   Write two paragraphs:
    1. **What was done?** Summarize the changes in past tense.
    2. **Why was it done?** Explain the intent or issue addressed.

**Rationale:** A detailed body enhances collaboration, troubleshooting, and documentation.

#### 5. Footer (Optional)

-   Include references, issue tracking, or breaking changes if necessary.
-   Examples:
    -   `BREAKING CHANGE: ...`
    -   `Closes #123`

**Rationale:** The footer links commits to issue trackers and highlights critical changes.

### Git Diff Analysis

-   Identify the type and scope based on file modifications.
-   Understand the purpose of the change to craft an informative message.

### Examples

**Example 1:**

```
feat(components/layout): add Header component

Added the Header component with navigation links and branding.

This ensures consistent navigation and branding across all pages.
```

**Example 2:**

```
fix(core/hooks): resolve state management issue

Refactored state initialization in useTrigger hook to prevent unnecessary re-renders.

This improves performance and ensures predictable component behavior.
```

**Example 3:**

```
config(tsconfig): add path aliases

Configured path aliases in tsconfig.json for cleaner import statements.

This enhances maintainability by simplifying module imports.
```
