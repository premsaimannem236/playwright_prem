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

# Runs with workers

## Command

```bash
npx Playwright test --workers 3
```

## Explanation

Runs with 3 workers in Parallel

---

# Run Specific Test File

## Command

```bash
npx playwright test example.spec.ts
```

## Explanation

Runs only the selected test file.

---

# Run Specific Test multiple File

## Command

```bash
npx playwright test example.spec.ts example1.spec.ts
```

## Explanation

Runs only the selected Multiple test file.

---

# Check Title

## Command

```bash
npx playwright test -g "check title"
```

## Explanation

Runs test with the title

---

# Runs Specfic browser

## Command

```bash
npx playwright test --project=chromium
```

## Explain

Runs on specfic browser

---

# Debug a Code

## Command

```bash
npx playwright test --debug
```

## Explain

It Debug the code line by line

---

# Debug a Specfic File

## Command

```bash
npx playwright test example.spec.ts --debug
```

## Explain

It Debug the specific file line by line

---

# Debug a Specfic File which line to be started

## Command

```bash
npx playwright test example.spec.ts:12 --debug
```

## Explain

It Debug the specific from specfic line to be started debug

---
