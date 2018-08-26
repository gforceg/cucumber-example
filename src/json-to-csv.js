#!/bin/env node
import * as path from 'path'
import * as yargs from 'yargs'
import * as fs from 'fs'

const argv = yargs.argv
const outdir = argv._[1]
? argv._[1]
: ''

// const filePath = argv._[0]

// import * as path from 'path'
// csv = process.argv[1]
fs.writeFileSync(path.join(outdir, 'users.csv'), `name,jobId
Jerry,27
Elaine,17
Kramer,7
George,`)