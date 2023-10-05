#! /usr/bin/env node
import { Command } from 'commander'
import path from 'node:path'
import fs from 'node:fs'
import { execSync } from 'node:child_process'
import chalk from 'chalk'
import inquirer from 'inquirer'

function addDep(acc, name, ver, as, dep) {
  if (!acc[dep]) acc[dep] = {}
  if (!acc[dep][ver]) acc[dep][ver] = []
  acc[dep][ver].push({ name, as })
}

function reducePackageDeps(pckg, name, acc = {}) {
  for (const n of Object.keys(pckg.dependencies ?? {})) {
    addDep(acc, name, pckg.dependencies[n], "", n)
  }
  for (const n of Object.keys(pckg.devDependencies ?? {})) {
    addDep(acc, name, pckg.devDependencies[n], "-D", n)
  }
  return acc
}

function getWorkspaces() {
  return fs.readdirSync('./packages')
}

function readPckg(p) {
  const json = fs.readFileSync(path.join(p, 'package.json'), 'utf8')
  return JSON.parse(json)
}

function getDups(packages = {}) {
  const dups = {}
  for (const name of Object.keys(packages)) {
    const versions = Object.keys(packages[name])
    if (versions.length > 1) {
      dups[name] = packages[name]
    }
  }
  return dups
}

function ckeckDeps(args = [], options = {}) {
  const rootPckg = readPckg('.')
  let packages = reducePackageDeps(rootPckg, '-W')
  const workspaces = getWorkspaces(rootPckg)
  for (const w of workspaces) {
    const wPckg = readPckg(path.join('./packages', w))
    packages = reducePackageDeps(wPckg, `workspace ${wPckg.name}`, packages)
  }
  let dups = getDups(packages)
  if (args && args.length) {
    dups = args.reduce((acc, d) => {
      if (dups[d]) acc[d] = dups[d]
      return acc
    }, {})
  }
  if (options.fix) {
    const questions = Object.keys(dups).map((dup) => {

      const skipChoice = { name: 'skip', value: null, checked: true }

      const choices = Object.keys(dups[dup]).map(v => ({
        name: `${chalk.bold(v)} - ${chalk.redBright(`(${chalk.bold(dups[dup][v].length)} occurance)`)}`,
        value: v,
        short: `${dup}: ${v}`
      }))
      return {
        type: 'list',
        name: dup,
        message: `The "${chalk.bold.red(dup)}" has multiple versions. select a version to edit others:`,
        choices: [
          skipChoice,
          ...choices
        ]
      }
    })
    inquirer.prompt(questions)
      .then((answers) => {
        let fixes = []
        for (const dep of Object.keys(dups)) {
          const ver = answers[dep]
          if (ver) {
            // console.log(dep, ver, dups[dep]);
            const depFixes = Object.keys(dups[dep]).reduce((acc, v) => {
              if (v !== ver) acc = acc.concat(dups[dep][v])
              return acc
            }, [])
            .map(ch => `yarn ${ch.name} add${ch.as ? ' ' + ch.as : ''} ${dep}@${answers[dep]}`)
            fixes = [...fixes, ...depFixes]
          }
        }
        for (const cmd of fixes) {
          execSync(cmd)
        }
      })

  } else {
    for (const name of Object.keys(dups)) {
      const label = chalk.bgRed.bold(` ${name} `)
      const dup = dups[name]
      console.group(label)
      for (const ver of Object.keys(dup)) {
        const verLabel = chalk.bgRedBright(` ${ver} `)
        const places = dup[ver]
        console.group(verLabel)
        for (const p of places) {
          console.log('in', chalk.red(p.name), chalk.bold(p.as));
        }
        console.groupEnd(verLabel)
      }
      console.groupEnd(label)
      console.log();
    }
  }
}

const program = new Command()

program
  .arguments('[packages...]')
  .option('--fix', 'auto fix')
  .action(ckeckDeps)

program.parse(process.argv)