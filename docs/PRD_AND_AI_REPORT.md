# Campus Meal Budget Planner

## Product Requirements Document and AI Development Report

**Course:** Introduction to AI Programming  
**Assignment:** Assignment 4  
**Document status:** Final draft for submission  
**Deployment status:** Deployed

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

The local development command uses webpack because Turbopack generated-file
renaming was unreliable inside the OneDrive-synced project directory. The
production command remains the standard `next build`, and the project keeps
Next.js's standard `.next` output directory for Vercel compatibility.

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
| 9. GitHub submission | Commit the project and publish the repository | Complete |
| 10. Vercel submission | Deploy and replace URL placeholders | Complete |

---

# Part 2. AI Development Report

## 1. AI Tools Used

OpenAI Codex was used as an AI-assisted development tool. Its main role was to
support code implementation and review bugs, build errors, and deployment
configuration problems. It suggested code changes and debugging steps inside
the local repository.

The student reviewed the suggested changes, tested the application, and
verified the final code and deployment results. AI did not make the final
project decisions independently, and no AI model is used by the deployed web
service at runtime. The planner uses local TypeScript calculations and local
meal data.

## 2. Tasks Assisted by AI

AI assistance was mainly used for:

- Writing and improving code for the Home, Planner, and About pages
- Implementing the planner form, calculations, validation, reset behavior, and
  meal suggestion display
- Reviewing the local TypeScript meal data and recommendation logic
- Checking lint and production build results
- Reviewing OneDrive and Turbopack file-lock errors during local builds
- Identifying the custom `distDir` setting that prevented Vercel from finding
  the standard `.next` output
- Reviewing cleanup of obsolete build output and configuration
- Checking Vercel build logs and deployment configuration

The project concept, final scope, and acceptance of the completed
implementation remained the student's responsibility.

## 3. Representative Prompts and Instructions

The following are representative instructions given during development.

### Prompt 1: Implement the pages and planner

> Implement the Home, Planner, and About pages with Next.js, TypeScript, and
> Tailwind CSS. On the Planner page, calculate the remaining budget and budget
> per meal, validate the inputs, and show three local meal suggestions.

This instruction focused the assistance on the required pages and the main
interactive feature.

### Prompt 2: Review the Vercel output error

> Vercel reports that `/vercel/path0/.next` was not found. Check the build
> script, `next.config.ts`, Vercel configuration, and output directory. Keep the
> standard `next build` command and standard `.next` output.

This instruction was used to review the deployment configuration and identify
the custom output-directory problem.

### Prompt 3: Check validation and bug fixes

> Run `npm run lint` and `npm run build`, review the results, and fix any
> application or generated-output configuration errors. Confirm that `/`,
> `/planner`, and `/about` are generated correctly.

This instruction supported final verification of the source code and routes.

## 4. Modified or Improved AI-Assisted Results

All AI-assisted code and configuration changes were reviewed by the student
before being accepted. The final implementation was checked and improved in
the following ways:

- The planner calculations and recommendation ranking were reviewed for clear,
  understandable local logic.
- Input validation was verified for blank values, invalid numbers, negative
  spending, and invalid remaining-meal counts.
- The meal data was kept in a reusable typed local structure.
- Unnecessary backend, database, authentication, payment, and external API
  features were not included.
- Estimated meal prices were presented as planning information rather than live
  or guaranteed prices.
- The final source was tested with `npm run lint` and `npm run build`.
- The generated routes `/`, `/planner`, and `/about` were checked, and the
  deployed routes were verified with HTTP status 200 responses.

## 5. Bugs, Errors, and Fixes

### 5.1 Custom Next.js Output Directory

**Problem:** A temporary `distDir: ".next-build"` setting caused Vercel to look
for the standard `.next` directory after the build and report that it was
missing.

**Fix:** The custom `distDir` was removed. The production script was restored
to `next build`, and Vercel was configured to use the standard Next.js output.

### 5.2 OneDrive and Turbopack File Lock

**Problem:** Local builds sometimes failed because OneDrive locked generated
manifest files while Next.js attempted to replace them.

**Fix:** Webpack was retained for the local development command, while the
production build remained the Vercel-compatible `next build`. The same
production build passed when the local file lock was not active.

### 5.3 Obsolete Generated Output and Configuration

**Problem:** The temporary `.next-build` directory and related ignore/type
settings caused ESLint to inspect generated files and created inconsistent
deployment configuration.

**Fix:** The obsolete generated directory and related configuration were
removed. ESLint then passed against the application source, and the normal
`.next` build output was generated.

### 5.4 Current Product Limitations

- Meal prices are estimates stored locally and may differ from actual prices.
- Suggestions do not use location, dietary allergy, or nutrition data.
- User entries are not saved after the page is closed or refreshed.
- Meal suggestions remain intentionally limited to local data.

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

The production build generated `/`, `/planner`, and `/about` as static pages.

## 7. Submission Links

- **GitHub repository:**
  [https://github.com/goinmmul/Meal-Budget-Planner](https://github.com/goinmmul/Meal-Budget-Planner)
- **Vercel deployment:**
  [https://campus-meal-budget-planner-a4.vercel.app](https://campus-meal-budget-planner-a4.vercel.app/)

The production deployment was verified by requesting the Home, Planner, and
About pages. All three routes returned HTTP status 200.

## 8. Conclusion

Campus Meal Budget Planner meets the planned assignment scope. It provides
three navigable pages, a meaningful client-side planning interaction, input
validation, local meal suggestions, responsive styling, and complete project
documentation. The source has passed lint, production build, and package audit
checks. The GitHub repository and Vercel deployment are ready to include in the
assignment submission.
