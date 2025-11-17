import path from 'node:path'
import fs from 'node:fs'
import process from 'node:process'
import yaml from 'js-yaml'

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
}

const parseFile = (filepath) => {
  const currDirPath = process.cwd()
  const absolutePath = path.resolve(currDirPath, filepath)

  const extension = absolutePath.split('.').at(-1).toLowerCase()
  const parser = parsers[extension]

  const content = fs.readFileSync(absolutePath, 'utf-8')
  const data = parser(content)
  return data
}

export default parseFile
