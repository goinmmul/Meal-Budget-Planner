# Campus Meal Budget Planner

## Product Requirements Document and AI Development Report

**Course:** Introduction to AI Programming  
**Assignment:** Assignment 4  
**Document status:** Final draft for submission  
**Deployment status:** Not yet deployed

---

# Part 1. Product Requirements Document

## 1. Product Overview

Campus Meal Budget Planner is a simple web service that helps university
students plan meals within a limited daily or weekly food budget. Students
enter their total meal budget, the amount already spent, the number of meals
remaining, and a preferred meal style. The service then calculates a realistic
budget for each remaining meal and provides three simple meal suggestions.

The project focuses on clear budget planning rather than restaurant discovery.
It does not require accounts or store personal information. All calculations
run locally in the browser, and all meal suggestion data is stored in a local
TypeScript array.

## 2. Target Users

The primary users are university students who need to manage daily or weekly
meal expenses. This includes:

- Students with a fixed food allowance
- Students who want to avoid overspending early in the day or week
- Students who need a quick estimate of how much they can spend per meal
- Students who want practical meal ideas that match their available budget

## 3. Project Goals

1. Help students understand their remaining food budget.
2. Calculate a clear and realistic recommended budget per meal.
3. Warn users when their budget is low or has already been exceeded.
4. Suggest simple meals according to budget and meal style.
5. Provide a responsive and easy-to-understand interface.
6. Meet the assignment requirements with at least three pages, clear
   navigation, and meaningful TypeScript interaction.

The project does not aim to provide financial advice, exact restaurant prices,
live restaurant information, or personalized nutrition guidance.

## 4. Core User Scenario

1. A student opens the Home page and learns the purpose of the service.
2. The student moves to the Planner page using the main navigation.
3. The student enters a total meal budget, amount already spent, number of
   remaining meals, and preferred meal style.
4. The student submits the form.
5. The planner calculates:
   - `remainingBudget = totalBudget - spentAmount`
   - `budgetPerMeal = remainingBudget / remainingMeals`
6. The student sees the remaining balance, recommended maximum per meal,
   budget status, and a short spending strategy.
7. The student reviews three meal suggestions ranked by affordability and
   preferred style.
8. The student may reset the form and create another plan.

## 5. Feature List and Priorities

| Priority | Feature | Description | Status |
| --- | --- | --- | --- |
| Must | Budget input form | Collect total budget, spent amount, remaining meals, and meal style | Complete |
| Must | Budget calculation | Calculate remaining budget and budget per meal | Complete |
| Must | Input validation | Reject missing, negative, zero, and invalid meal-count values | Complete |
| Must | Budget status | Display safe, caution, or over-budget feedback | Complete |
| Must | Meal suggestions | Show three suggestions based on budget and selected style | Complete |
| Must | Three-page structure | Provide Home, Planner, and About pages | Complete |
| Must | Navigation | Allow users to move clearly between all pages | Complete |
| Must | Responsive styling | Support desktop and mobile layouts using Tailwind CSS | Complete |
| Should | Reset function | Clear form values, errors, and results | Complete |
| Should | Strategy message | Explain the next practical action for the current budget | Complete |
| Should | Local meal dataset | Store reusable meal records in TypeScript | Complete |
| Could | More meal records | Expand the local suggestion list in a future version | Future |
| Won't | Backend or database | Not required for the assignment or current service scope | Excluded |
| Won't | Authentication | No account or personal data is needed | Excluded |
| Won't | External API | Live restaurant or price data is outside the project scope | Excluded |

## 6. Page Structure

### 6.1 Home (`/`)

- Introduces the meal-budget problem faced by students
- Explains the value of planning before spending
- Shows a simple example budget summary
- Provides links to the Planner and About pages
- Explains the service workflow in three steps

### 6.2 Planner (`/planner`)

- Contains the main interactive form
- Accepts budget and meal-preference inputs
- Validates user input before calculation
- Displays remaining budget and recommended spending per meal
- Shows safe, caution, or over-budget status
- Provides a short meal strategy
- Displays three ranked meal suggestion cards
- Includes a reset button

### 6.3 About (`/about`)

- Describes the target users
- Explains the project purpose
- Identifies the project as an educational web service
- Summarizes the technical approach
- Links back to the Planner

## 7. Technical Requirements

- **Framework:** Next.js with the App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI library:** React
- **Data source:** Local TypeScript meal suggestion array
- **Calculation location:** Client-side browser execution
- **Deployment target:** Vercel
- **Source control target:** GitHub
- **Pages:** `/`, `/planner`, and `/about`
- **Required validation:** ESLint and production build
- **Excluded systems:** Backend server, database, authentication, payment, and
  external API

The project uses webpack for development and production builds because
Turbopack generated-file renaming was unreliable inside the OneDrive-synced
project directory. It keeps Next.js's standard `.next` output directory for
Vercel compatibility.

## 8. Design Requirements

- Use a clean and student-friendly visual style.
- Keep navigation visible and consistent across pages.
- Use readable typography, clear labels, and sufficient color contrast.
- Present the form and results as separate visual areas.
- Make status feedback easy to identify without relying only on detailed text.
- Support common mobile and desktop screen sizes.
- Use consistent green, cream, white, and yellow accent colors.
- Keep interactions simple and avoid unnecessary steps.
- Show helpful validation messages instead of failing silently.
- Clearly identify estimated meal prices as planning information rather than
  live prices.

## 9. Milestones

| Milestone | Work | Status |
| --- | --- | --- |
| 1. Planning | Define purpose, users, pages, inputs, and outputs | Complete |
| 2. Project setup | Configure Next.js, TypeScript, Tailwind CSS, and ESLint | Complete |
| 3. Core pages | Implement Home, Planner, and About | Complete |
| 4. Planner logic | Add calculation, validation, status, strategy, and reset | Complete |
| 5. Meal data | Add reusable local TypeScript meal suggestions | Complete |
| 6. UI refinement | Add responsive layout and consistent styling | Complete |
| 7. Documentation | Complete README, PRD, and AI Development Report | Complete |
| 8. Validation | Run install, lint, build, and package audit checks | Complete |
| 9. GitHub submission | Commit the project and publish the repository | Pending |
| 10. Vercel submission | Deploy and replace URL placeholders | Pending |

---

# Part 2. AI Development Report

## 1. AI Tool Used

OpenAI Codex was used as the AI-assisted development tool. It worked inside the
local project repository and was used to inspect files, create and edit source
code, run development commands, diagnose errors, and prepare documentation.

No AI model is used by the final web service at runtime. The planner uses local,
understandable TypeScript calculations and local meal data.

## 2. Tasks Supported by AI

AI assistance was used for:

- Inspecting the initial workspace and identifying that it was empty
- Creating the Next.js project structure and configuration
- Implementing the Home, Planner, and About pages
- Creating reusable navigation and styling
- Designing the local meal suggestion data structure
- Implementing budget calculations and recommendation ranking
- Adding validation and reset behavior
- Writing and improving the README
- Running lint, build, and security audit commands
- Diagnosing Windows and OneDrive build problems
- Initializing the local Git repository
- Preparing this PRD and AI Development Report

## 3. Representative Prompts and Instructions

The following are representative instructions given during development.

### Prompt 1: Define the service scope

> Build a Campus Meal Budget Planner for university students. It must focus on
> budget planning, remaining balance, meal strategy, and simple meal
> suggestions, not restaurant recommendation.

This instruction established the product topic and prevented the project from
becoming a restaurant search or recommendation service.

### Prompt 2: Implement the main interaction

> On the Planner page, collect total meal budget, amount already spent,
> remaining number of meals, and meal style. Calculate remaining budget and
> budget per meal, validate input, show a budget status, and display three meal
> suggestions.

This instruction defined the main TypeScript interaction and expected result
states.

### Prompt 3: Keep the architecture simple

> Use Next.js, TypeScript, and Tailwind CSS. Store meal suggestions locally. Do
> not use an external API, database, backend, login, authentication, or payment.

This instruction limited unnecessary complexity and kept the implementation
appropriate for the assignment.

### Prompt 4: Validate and report accurately

> Run npm install, npm run lint, and npm run build. Fix all errors. Do not claim
> deployment success unless deployment was actually completed.

This instruction required verifiable results and prevented unsupported claims
about deployment.

## 4. AI-Generated Results Modified or Improved

The AI-generated implementation was reviewed and improved during development:

- The meal data was organized into a reusable typed structure with `name`,
  `estimatedPrice`, `style`, `description`, and `reason`.
- Recommendation selection was improved to consider both affordability and the
  selected meal style.
- Validation was strengthened to reject blank values, non-finite values,
  non-positive budgets, negative spending, and non-integer meal counts.
- The result interface was divided into clear balance, status, strategy, and
  suggestion sections.
- The wording was adjusted to avoid presenting estimated meal prices as live or
  guaranteed prices.
- Responsive layouts and consistent navigation were added for usability.
- The README was updated to match the final implementation and assignment
  requirements.
- Development and build scripts were changed to webpack after an environment
  problem was found with Turbopack in the OneDrive directory.

## 5. Bugs, Errors, and Limitations

### 5.1 OneDrive and Turbopack Manifest Lock

**Problem:** The initial production build reached Next.js but failed when
Turbopack attempted to rename a generated manifest file inside the
OneDrive-synced project directory.

**Fix:** The project was configured to use webpack for both development and
production builds. A temporary custom build directory used during local
diagnosis was later removed so Vercel can use the standard `.next` output.

### 5.2 ESLint Scanning Generated Build Files

**Problem:** While a temporary custom build output was being tested, ESLint
scanned generated JavaScript and type files and reported thousands of errors
that did not come from the application source.

**Fix:** Generated build output was excluded during diagnosis. The temporary
custom output was then deleted, and the final project returned to Next.js's
standard `.next` directory. The following lint run passed.

### 5.3 Git Repository Initialization

**Problem:** The starting folder was not a Git repository. The first
initialization attempt also left a stale `config.lock` file because repository
metadata access was restricted.

**Fix:** The stale lock was removed after verifying that no Git configuration
or history existed, and the repository was initialized successfully.

### 5.4 Current Product Limitations

- Meal prices are estimates stored locally and may differ from actual prices.
- Suggestions do not use location, dietary allergy, or nutrition data.
- User entries are not saved after the page is closed or refreshed.
- The application is not yet deployed.
- The GitHub repository has not yet been published.

These limitations are acceptable for the current assignment scope because the
service is designed as a small client-side planning tool.

## 6. Validation Results

The following checks were completed successfully:

| Command | Result |
| --- | --- |
| `npm install` | Passed |
| `npm run lint` | Passed |
| `npm run build` | Passed |
| `npm audit` | Passed with 0 vulnerabilities |

The production build generated the Home, Planner, and About routes as static
pages.

## 7. Submission Links

- **GitHub repository:** `Add GitHub repository URL after publishing`
- **Vercel deployment:** `https://your-project-name.vercel.app`

The Vercel URL is a placeholder. This document does not claim that deployment
has been completed. Both placeholders must be replaced with the real links
before final submission.

## 8. Conclusion

Campus Meal Budget Planner meets the planned assignment scope. It provides
three navigable pages, a meaningful client-side planning interaction, input
validation, local meal suggestions, responsive styling, and complete project
documentation. The source has passed lint, production build, and package audit
checks. The remaining submission tasks are publishing the GitHub repository,
deploying to Vercel, and replacing the link placeholders.
