import process from 'node:process'
import chalk from 'chalk'
import ora from 'ora'

const spinner = ora({
  text: 'Pulling platform team Docker image'
}).start()
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 25ms')
  spinner.indent = 3
  spinner.text = `Image cache found - skipping`
  spinner.start()
}, 200)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 25ms')
  spinner.indent = 0
  spinner.text = `Cloning Git Repo`
  spinner.start()
}, 500)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 100ms')
  spinner.indent = 3
  spinner.text = `Swapped to branch 'develop'`
  spinner.start()
}, 1000)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 123ms')
  spinner.indent = 0
  spinner.text = `Installing tools in workspace`
  spinner.start()
}, 2000)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 145ms')
  spinner.indent = 3
  spinner.text = `Node v19`
  spinner.start()
}, 2500)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 164ms')
  spinner.indent = 3
  spinner.text = `Python v5`
  spinner.start()
}, 3000)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 190ms')
  spinner.indent = 3
  spinner.text = `Kubectl v1.2`
  spinner.start()
}, 4500)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 210ms')
  spinner.indent = 0
  spinner.text = `Fetching Secrets`
  spinner.start()
}, 5500)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 223ms')
  spinner.indent = 3
  spinner.text = `Vault Namespace: 2 secrets configured`
  spinner.start()
}, 6000)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 233ms')
  spinner.indent = 3
  spinner.text = `AWS Secrets manager: 6 secrets configured`
  spinner.start()
}, 6500)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 243ms')
  spinner.indent = 0
  spinner.text = `Starting editor`
  spinner.start()
}, 7500)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 343ms')
  spinner.indent = 3
  spinner.text = `VS Code ready`
  spinner.start()
}, 7500)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 343ms')
  spinner.indent = 3
  spinner.text = `Extensions installed`
  spinner.start()
}, 7800)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 347ms')
  spinner.indent = 3
  spinner.text = `SSH tunnel ready`
  spinner.start()
}, 8000)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 374ms')
  spinner.indent = 0
  spinner.text = `Starting Application`
  spinner.start()
}, 9000)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 391ms')
  spinner.indent = 3
  spinner.text = `Auth service running`
  spinner.start()
}, 9500)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 412ms')
  spinner.indent = 3
  spinner.text = `Catalog service running`
  spinner.start()
}, 10000)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = chalk.dim('- 433ms')
  spinner.indent = 3
  spinner.text = `Frontend started`
  spinner.start()
}, 10500)
setTimeout(() => {
  spinner.succeed()
  spinner.suffixText = ''
  spinner.indent = 0
  spinner.text = `You are now ready-to-code!`
  spinner.start()
}, 10500)
setTimeout(() => {
  spinner.succeed()
}, 11000)

process.on('SIGINT', () => {
  console.info('Interrupted')
  process.exit(0)
})
