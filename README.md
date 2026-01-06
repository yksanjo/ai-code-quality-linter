# AI Code Quality Linter

![License](https://img.shields.io/github/license/ai-engineer-community/ai-code-quality-linter)
![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow)
![ESLint](https://img.shields.io/badge/ESLint-Plugin-green)

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