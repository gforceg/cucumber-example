import * as childProcess from 'child_process'
import * as path from 'path'
import { When } from 'cucumber'

When(/^I run: ([\w-.]+) ([\w-.]+)$/, function (scriptName, fileName) {
  const filePath = path.join(this.filesRoot, fileName)
  childProcess.spawnSync('node', [scriptName, filePath, this.filesRoot])
})
