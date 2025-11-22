---
agent: "agent"
name: "open-pr"
description: "Use GitHub Copilot to open a pull request for the requested changes in this repo."
argument-hint: 'Short description of the change (e.g. "Refactor login flow and add tests")'
tools:
  - "github/*"
  - "search/codebase"
  - "edit/editFiles"
  - "runCommands"
  - "githubRepo"
---

Your task is to open a GitHub pull request for the requested changes in the **current repository**.

## High-level behavior

1. Treat `${input:taskDescription:Short summary of the change}` as the user’s description of what they want in this PR.
2. If the description is missing or unclear, briefly ask one clarifying question before proceeding.
3. Use repository and code tools (for example #tool:githubRepo, #tool:search/codebase, #tool:edit/editFiles) to understand the current state of the repo and any relevant files.
4. Prefer to use #tool:github/github-mcp-server/create_pull_request to:
   - Create or reuse a suitable feature branch for the work.
   - Implement or finalize the requested changes as needed.
   - Open a pull request targeting the appropriate base branch (default to `main` unless the user specifies otherwise, such as “target `develop`”).
   - Generate a clear PR title and a well-structured PR description.

## Pull request requirements

When opening the PR (either via #tool:github/github-mcp-server/create_pull_request):

- The PR title should be concise, imperative, and scoped to this change.
- The PR description should include:
  - **Summary** – one or two sentences describing what changed.
  - **Motivation / context** – why these changes are being made.
  - **Details** – notable implementation details or trade-offs.
  - **Testing** – how the change was tested (unit tests, manual testing, etc.).
  - **Risks / follow-ups** – anything that needs attention after merge.

## Fallback behavior

If #tool:github/github-mcp-server/create_pull_request is **not** available:

1. Use #tool:runCommands with `git` to:

   - Ensure the working tree is clean or that all intended changes are staged/committed.
   - Create a new branch for this work if one is not already in use.
   - Push the branch to the `origin` remote.

2. Try to use available GitHub MCP pull-request tools to open a PR from that branch.

3. If GitHub MCP tools are also unavailable, use #tool:runCommands with the `gh` CLI:

   - Run `gh pr create --base main --head <branch-name> --title "<pr-title>" --body "<pr-description>"` to create the PR.
   - Verify the PR was created successfully and provide the user with the PR URL.

4. Make sure the resulting PR still follows the **Pull request requirements** above.

## Final response

After the PR has been created, reply with:

- The PR URL.
- The PR title.
- A short bullet-point summary of the key changes included in the PR.
- Any notes about tests run or follow-ups the reviewer should be aware of.
