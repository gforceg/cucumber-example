import * as assert from 'assert'
import * as childProcess from 'child_process'
import * as path from 'path'
import { When, Then } from 'cucumber'

When(/^I run: ([\w-.]+) ([\w-.]+)$/, function (scriptName, fileName) {
  const filePath = path.join(this.filesRoot, fileName)
  this.cmdResult = childProcess.spawnSync('node', [scriptName, filePath, this.filesRoot])
})

When(/^I run: ([\w-.]+)$/, function (scriptName) {
  this.cmdResult = childProcess.spawnSync('node', [scriptName])
})

Then(/^there should (not )?be an error message$/, function (noError) {
  const expectedStatus = noError ? 0 : 1
  assert.strictEqual(expectedStatus, this.cmdResult.status)
})

Then('I should see the error message:', function (docString) {
  assert.strictEqual(1, this.cmdResult.status)
  assert.strictEqual(true, this.cmdResult.stderr.toString().includes(docString))
})

Then('I should see the example usage:', function (docString) {
  assert.strictEqual(true, this.cmdResult.stdout.toString().includes(docString))
})
