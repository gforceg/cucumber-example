#!/bin/env node
import * as path from 'path'
import * as yargs from 'yargs'
import * as fs from 'fs'

const argv = yargs.argv

const getArg = (index) => argv._[index] ? argv._[index] : ''

const outdir = getArg(1)
const filePath = getArg(0)

const outFile = `${path.parse(filePath).name}.csv`

fs.writeFileSync(path.join(outdir, outFile), `name,jobId
Jerry,27
Elaine,17
Kramer,7
George,`)
