import path from 'path';
import fs from 'fs';
import process from 'process';

export default (filepath) => {
  const currDirPath = process.cwd();
  const absolutePath = path.resolve(currDirPath, filepath);

  const content = fs.readFileSync(absolutePath);
  const data = JSON.parse(content);
  return data;
};
