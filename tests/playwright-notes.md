# Playwright Notes

---

# Install Playwright

## Command

```bash
npm init playwright@latest
```

## Explanation

Installs Playwright framework and creates project structure.

---

# Run All Tests

## Command

```bash
npx playwright test
```

## Explanation

Runs all Playwright test files inside the tests folder.

---

# Run Specific Test File

## Command

```bash
npx playwright test tests/example.spec.ts
```

## Explanation

Runs only the selected test file.

---

# Open UI Mode

## Command

```bash
npx playwright test --ui
```

## Explanation

Opens Playwright interactive UI mode for debugging and execution.

---

# Open Browser Recorder

## Command

```bash
npx playwright codegen
```

## Explanation

Opens Playwright recorder and auto-generates automation scripts.

---

# Show HTML Report

## Command

```bash
npx playwright show-report
```

## Explanation

Opens Playwright HTML execution report in browser.

---

# Run Tests in Headed Mode

## Command

```bash
npx playwright test --headed
```

## Explanation

Runs tests with browser visible on screen.

---

# Run Tests in Specific Browser

## Command

```bash
npx playwright test --project=chromium
```

## Explanation

Runs tests only in Chromium browser.

---

# Run Tests in Debug Mode

## Command

```bash
npx playwright test --debug
```

## Explanation

Runs tests in debug mode for troubleshooting.

---

# Generate Test Code Automatically

## Command

```bash
npx playwright codegen https://example.com
```

## Explanation

Launches browser and records user actions into Playwright code.

---

# Install Browsers

## Command

```bash
npx playwright install
```

## Explanation

Installs supported Playwright browsers.

---

# Check Playwright Version

## Command

```bash
npx playwright --version
```

## Explanation

Displays installed Playwright version.

---

# Git Add

## Command

```bash
git add .
```

## Explanation

Adds all modified files to Git staging area.

---

# Git Commit

## Command

```bash
git commit -m "message"
```

## Explanation

Saves staged changes locally with commit message.

---

# Git Push

## Command

```bash
git push
```

## Explanation

Uploads local code/files to GitHub repository.

---

# Git Pull

## Command

```bash
git pull
```

## Explanation

Downloads latest changes from GitHub repository.

---

# Git Status

## Command

```bash
git status
```

## Explanation

Shows modified and staged files.

---

# Git Clone Repository

## Command

```bash
git clone repository_url
```

## Explanation

Copies GitHub repository to local machine.

---

# Create New Branch

## Command

```bash
git checkout -b branch_name
```

## Explanation

Creates and switches to a new branch.

---

# Switch Branch

## Command

```bash
git checkout branch_name
```

## Explanation

Switches to another Git branch.
