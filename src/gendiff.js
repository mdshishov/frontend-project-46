import parseFile from './parser.js';

export default (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = [...new Set([...keys1, ...keys2])].sort();

  const diffArr = []; 
  for (const key of allKeys) {
    const isKeyIn1 = Object.hasOwn(data1, key);
    const isKeyIn2 = Object.hasOwn(data2, key);

    if (isKeyIn1 && isKeyIn2) {
      if (data1[key] === data2[key]) {
        diffArr.push(`    ${key}: ${data1[key]}`);
      } else {
        diffArr.push(
          `  - ${key}: ${data1[key]}`,
          `  + ${key}: ${data2[key]}`,
        )
      }
    } else if (isKeyIn1) {
      diffArr.push(`  - ${key}: ${data1[key]}`);
    } else {
      diffArr.push(`  + ${key}: ${data2[key]}`);
    }
  }

  return `{\n${diffArr.join('\n')}\n}`;
};
