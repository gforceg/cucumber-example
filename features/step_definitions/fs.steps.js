import * as fs from 'fs'
import * as assert from 'assert'
import { Given, Then } from 'cucumber'

Given(/^the file (users.json) contains$/, function (fileName, docString) {
  // create / overwrite the file
  fs.writeFileSync(this.getFilePath(fileName), docString)
})

Then(/^the file (users.csv) should contain$/, function (fileName, docString) {
	// 1. read the file and confirm that it includes the string

	// 1. read the file and confirm that it includes the string
	const buffer = fs.readFileSync(this.getFilePath(fileName))
	assert.equal(buffer.includes(docString), true)
});