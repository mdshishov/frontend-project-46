import fs from 'fs'
import url from 'url'
import path from 'path'
import { describe, expect, test } from '@jest/globals'
import genDiff from '../src/gendiff.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

describe ('flat files comparison', () => {
  test('json', () => {
    const fixturePath1 = getFixturePath('file1.json')
    const fixturePath2 = getFixturePath('file2.json')
    const expected = readFile('expected-json.txt')

    const result = genDiff(fixturePath1, fixturePath2)
    expect(result).toBe(expected)
  })
})
