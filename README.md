# AI Code Quality Linter

ESLint-style rules for agent output that detects SQL injection vulnerabilities in generated code, flags inefficient vector queries, checks for proper error handling in tool calls, and validates prompt injection resistance.

## Features

- ESLint-style rules for agent-generated code
- Detects SQL injection vulnerabilities
- Flags inefficient vector queries
- Checks for proper error handling in tool calls
- Validates prompt injection resistance
- Integrates with existing linter workflows

## Installation

```bash
npm install ai-code-quality-linter
```

## Usage

```bash
ai-lint --config .ai-lintrc.json src/
```

## Configuration

Create a `.ai-lintrc.json` file:

```json
{
  "rules": {
    "no-sql-injection": "error",
    "efficient-vector-queries": "warn",
    "proper-error-handling": "error"
  }
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT