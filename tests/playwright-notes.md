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

# Runs Specfic browser and specfic File

## Command

```bash
npx playwright test tests/example.spec.ts --project=chromium
```

## Explain

Runs on specfic browser

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

# Let's Start

# Simple Playwright Synatx

```bash
import {test,expect} from "@playwright/test";

test("title", ()=>{

})
```

---

# Playwright Locators

## getByRole()

### Command

```typescript
page.getByRole("button", { name: "Login" });
```

### Explain

It locates elements using explicit and implicit accessibility attributes.

---

## getByText()

### Command

```typescript
page.getByText("Welcome");
```

### Explain

It locates elements using text content.

---

## getByLabel()

### Command

```typescript
page.getByLabel("Email");
```

### Explain

It locates a form control using associated label text.

---

## getByPlaceholder()

### Command

```typescript
page.getByPlaceholder("Enter email");
```

### Explain

It locates an input field using placeholder text.

---

## getByAltText()

### Command

```typescript
page.getByAltText("Company Logo");
```

### Explain

It locates an element, usually image, using alt text.

---

## getByTitle()

### Command

```typescript
page.getByTitle("Search");
```

### Explain

It locates an element using title attribute.

---

## getByTestId()

### Command

```typescript
page.getByTestId("login-button");
```

### Explain

It locates an element using data-testid attribute.

---
