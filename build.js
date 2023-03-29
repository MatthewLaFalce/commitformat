'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  overview: {
    title: chalk.green('                GIT COMMIT MESSAGE CONVENTION GUIDE'),
    descr: chalk.white('A standard git commit message typically should follow this format:'),
  },
  types: '+----------------------------------------------------------------------------------------------------------------------------------------------------------+\n|                                                  Types - Must be one of the following mentioned below!                                                   |\n+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+\n| Tag      | Description                                                                                                                                   |\n+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+\n| BUILD    | Build related changes (eg: npm related/ adding external dependencies)                                                                         |\n| CHORE    | A code change that external user won\'t see (eg: change to .gitignore file or .prettierrc file)                                                |\n| FEAT     | A new feature                                                                                                                                 |\n| FIX      | A bug fix                                                                                                                                     |\n| DOCS     | Documentation related changes                                                                                                                 |\n| REFACTOR | A code that neither fix bug nor adds a feature. (eg: You can use this when there is semantic changes like renaming a variable/ function name) |\n| PERF     | A code that improves performance                                                                                                              |\n| STYLE    | A code that is related to styling                                                                                                             |\n| TEST     | Adding new test or making changes to existing test                                                                                            |\n+----------+-----------------------------------------------------------------------------------------------------------------------------------------------+',
  scopes: '+-----------------------------------------------------------------------------------------------+\n| Scope (Optional) - Must be noun and it represents the section of the section of the codebase. |\n+-----------------------------------------------------------------------------------------------+\n| See here for examples: http://karma-runner.github.io/1.0/dev/git-commit-msg.html              |\n+-----------------------------------------------------------------------------------------------+\n',
  subjects: '+----------------------------------------------------------------------------+\n|                                  Subject                                   |\n+----------------------------------------------------------------------------+\n| Use imperative, present tense (eg: use "add" instead of "added" or "adds") |\n| Don\'t use dot(.) at end                                                    |\n| Don\'t capitalize first letter                                              |\n| See here for practical examples: https://github.com/eslint/eslint          |\n+----------------------------------------------------------------------------+\n'
}

// Actual strings we're going to output
const newline = '\n'

// Put all our output together into a single variable so we can use boxen effectively
const output = `${data.overview.title}` + newline +
               `${data.overview.descr}` + newline +
               `${chalk.cyan('        <type>')}` + `${chalk.white('(')}` +`${chalk.yellow('<scope>')}` + `${chalk.white('): ')}` + `${chalk.magenta('<subject>')}` + newline +
               `${chalk.cyan(data.types)}` + newline +
               `${chalk.yellow(data.scopes)}` + newline +
               `${chalk.magenta(data.subjects)}`


fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
