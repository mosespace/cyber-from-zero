# Security policy

## What is in scope

Cyber From Zero is a **static website**: there is no server code that handles user data, no
accounts, no database and no analytics. Learner progress is stored only in the visitor's own
browser (`localStorage`).

Please report things like:

- a vulnerability in the website code (for example cross-site scripting through content rendering)
- a dependency with a known, exploitable vulnerability that affects the build or the site
- a lab or lesson that could cause **real harm** if followed (for example a command that deletes data without warning)
- content that unintentionally helps attack real systems

## How to report

**Please do not open a public issue for security problems.**

Use GitHub's private reporting: go to the repository's **Security** tab and choose
**Report a vulnerability**. Include:

1. what you found and where
2. steps to reproduce
3. the impact you expect
4. a suggested fix, if you have one

We will acknowledge your report as soon as we can, keep you updated, and credit you when the fix is
released if you would like that.

## For learners: dangerous or unsafe content

If a lab step could damage someone's computer or data, or a lesson gives advice that is wrong or
unsafe, please report it as a **Content fix** issue. Safety problems in content are treated as high priority.

## Supported versions

Only the latest version on the default branch is supported.
