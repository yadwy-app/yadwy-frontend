# How to Contribute

## Tools Needed

- VSCode is recommended.
- Use AI tools like Copilot and v0.dev.
- [Bun.js](http://bun.sh/) as the JavaScript runtime.
- Install dependencies: `bun install`.
- Start developing: `bun dev`.
- Build the project: `bun build`.
- Run checks: Ensure you follow the rules and everything is correct by running `bun check`.

## Commit Message Convention

The project uses the following format for commit messages:

```
[tag] : message
```

The `tag` should be one of the following:
- `feat`: For new features or functionality.
- `fix`: For bug fixes or resolving issues.
- `style`: For changes related to styling, such as enhancing the UI or modifying colors.
- `docs`: For documentation updates or improvements.
- `refactor`: For code restructuring without changing functionality.
- `test`: For adding or updating tests.
- `chore`: For maintenance tasks like dependency updates or build process changes.

## Pull Requests (PRs)

Make your changes in a new branch other than `main` and open a pull request when you are done. A GitHub workflow will run for your PR to check type correctness using `tsc` and enforce rules using [Biome.js](https://biomejs.dev/). Ensure you run these checks locally and fix any issues if the GitHub Action fails.

At least one reviewer must approve your changes for the PR to be merged. :)
