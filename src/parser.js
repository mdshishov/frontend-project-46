import path from 'node:path'
import fs from 'node:fs'
import process from 'node:process'

const parseFile = (filepath) => {
  const currDirPath = process.cwd()
  const absolutePath = path.resolve(currDirPath, filepath)

  const content = fs.readFileSync(absolutePath, 'utf-8')
  const data = JSON.parse(content)
  return data
}

export default parseFile
