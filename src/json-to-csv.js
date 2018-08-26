#!/bin/env node

import * as fs from 'fs'
// import * as path from 'path'
// csv = process.argv[1]
fs.writeFileSync('tests/files/users.csv', `name,jobId
Jerry,27
Elaine,17
Kramer,7
George,`)
