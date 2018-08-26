import * as assert from 'assert'
import * as childProcess from 'child_process'
import * as path from 'path'
import { When, Then } from 'cucumber'

When(/^I run: ([\w-.]+) ([\w-.]+)$/, function (scriptName, fileName) {
  const filePath = path.join(this.filesRoot, fileName)
  this.cmdResult = childProcess.spawnSync('node', [scriptName, filePath, this.filesRoot])
})

Then('there should be an error message', function () {
  assert.strictEqual(1, this.cmdResult.status)
})
