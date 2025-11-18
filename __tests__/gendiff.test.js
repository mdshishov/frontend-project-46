import fs from 'node:fs'
import url from 'node:url'
import path from 'node:path'
import { describe, expect, test } from '@jest/globals'
import genDiff from '../src/genDiff.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

describe.each(['flat', 'nested'])(
  '%s files comparison',
  (dirName) => {
    const expected = readFile(`${dirName}/expected-stylish.txt`)

    test.each([
      'json',
      'yml',
      'yaml',
    ])('%s', (extension) => {
      const fixturePath1 = getFixturePath(`${dirName}/file1.${extension}`)
      const fixturePath2 = getFixturePath(`${dirName}/file2.${extension}`)

      const result = genDiff(fixturePath1, fixturePath2)
      expect(result).toBe(expected)
    })
  })

describe ('output formatting', () => {
  describe.each(['default', 'stylish', 'plain'])('%s', (format) => {
    const expectedName = `expected-${format === 'default' ? 'stylish' : format}.txt`
    const expected = readFile(`nested/${expectedName}`)

    test.each([
      'json',
      'yml',
      'yaml',
    ])('%s', (extension) => {
      const fixturePath1 = getFixturePath(`nested/file1.${extension}`)
      const fixturePath2 = getFixturePath(`nested/file2.${extension}`)

      const result = format === 'default'
        ? genDiff(fixturePath1, fixturePath2)
        : genDiff(fixturePath1, fixturePath2, format)
      expect(result).toBe(expected)
    })
  })
  describe.each()
})
