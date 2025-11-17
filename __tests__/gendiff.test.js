import fs from 'node:fs'
import url from 'node:url'
import path from 'node:path'
import { describe, expect, test } from '@jest/globals'
import genDiff from '../src/gendiff.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

describe ('flat files comparison', () => {
  const expected = readFile('expected-flat.txt')

  test.each([
    'json',
    'yml',
    'yaml',
  ])('$extension', (extension) => {
    const fixturePath1 = getFixturePath(`file1.${extension}`)
    const fixturePath2 = getFixturePath(`file2.${extension}`)

    const result = genDiff(fixturePath1, fixturePath2)
    expect(result).toBe(expected)
  })
})
