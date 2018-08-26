import { setWorldConstructor } from 'cucumber'
import * as path from 'path'

function CustomWorld() {
	this.filesRoot = 'tests/files'
	this.getFilePath = (file) => path.join(this.filesRoot, file)
}

setWorldConstructor(CustomWorld)