# AGENTS.md

## Iteration Workflow

Every implementation iteration in this project must end with verification.

Required sequence:

1. Run project checks relevant to the change.
2. If any errors or warnings appear, fix them immediately.
3. Repeat the checks until they pass with no errors.
4. After checks are clean, run the configured project formatting.

Minimum default verification for frontend changes:

- `npm run lint`
- `npm run build`
- `npm run format`

Formatting policy:

- Use the project's configured formatting commands, not ad hoc manual formatting.
- Keep Vue SFC block order as `template`, then `script`, then `style`.
