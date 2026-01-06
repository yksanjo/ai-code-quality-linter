#!/usr/bin/env node

const { Command } = require('commander');
const { AILinter } = require('./dist/index.js');
const fs = require('fs');

const program = new Command();

program
  .name('ai-lint')
  .description('AI Code Quality Linter')
  .version('1.0.0')
  .argument('[files...]', 'files to lint')
  .option('-c, --config <path>', 'configuration file path')
  .option('--fix', 'automatically fix problems')
  .option('-f, --format <format>', 'output format (default: stylish)', 'stylish')
  .action((files, options) => {
    const configPath = options.config || '.ai-lintrc.json';
    
    let config = {};
    if (fs.existsSync(configPath)) {
      config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
    
    const linter = new AILinter(config);
    
    // If no files provided, lint current directory
    if (files.length === 0) {
      files = ['.'];
    }
    
    const results = linter.lintFiles(files, {
      fix: options.fix,
      format: options.format
    });
    
    // Output results
    results.forEach(result => {
      console.log(result.output);
    });
    
    // Exit with error code if there are errors
    const hasErrors = results.some(result => 
      result.errorCount > 0 || result.warningCount > 0
    );
    
    if (hasErrors) {
      process.exit(1);
    }
  });

program.parse();