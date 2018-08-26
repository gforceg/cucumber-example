#!/bin/env node
import * as path from 'path'
import * as yargs from 'yargs'
import * as fs from 'fs'

const argv = yargs.argv

const getArg = (index) => argv._[index] ? argv._[index] : ''

const outdir = getArg(1)
const filePath = getArg(0)

const outFile = `${path.parse(filePath).name}.csv`
const buffer = jsonToCsv(fs.readFileSync(filePath))
fs.writeFileSync(path.join(outdir, outFile), buffer, 'utf-8')

function jsonToCsv (json) {
  // 1. deserialize the json
  // 2. get all object properties
  // 3. create the header row
  // 4. add the value rows
  // 5. concat all of the rows and output them as multiline string

  // 1. deserialize the json
  const jsonObj = deserializeJson(json)
  let props = []

  // 2. get all object properties
  jsonObj.forEach(obj => {
    props = props.concat(Object.getOwnPropertyNames(obj))
  })
  props = [...new Set(props)]

  // 3. create the header row
  const headerBuffer = props.join(',')

  // 4. add the value rows
  const valueBuffers = []

  jsonObj.forEach(obj => {
    valueBuffers.push(props.map(p => obj[p]).join(','))
  })
  // 5. concat all of the rows and output them as multiline string
  return [].concat(headerBuffer, valueBuffers).join('\n')
}

function deserializeJson (json) {
  var obj
  try {
    obj = JSON.parse(json)
  } catch (err) {
    throw new Error('unable to parse file -- is this valid json?')
  }
  return obj
}
