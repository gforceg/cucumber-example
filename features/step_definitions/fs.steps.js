import * as fs from 'fs'
import * as assert from 'assert'
import { Given, Then } from 'cucumber'

Given(/^the file ([\w-.]+) contains$/, function (fileName, docString) {
  // create / overwrite the file
  fs.writeFileSync(this.getFilePath(fileName), docString)
})

Then(/^the file ([\w-.]+) should contain$/, function (fileName, docString) {
  // 1. read the file and confirm that it includes the string
  // 2. assert that the file contains the correct csv

  // 1. read the file and confirm that it includes the string
  const buffer = fs.readFileSync(this.getFilePath(fileName))
  // 2. assert that the file contains the correct csv
  assert.strictEqual(buffer.includes(docString), true)
})
