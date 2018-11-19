//const wrap = (line, maxLen) => "";

const wrap = function(line, maxLen) {
  let tempLine = "";
  let pointer = 0;
  let finalLine = "";
  while (pointer < line.length) {
    tempLine = line.slice(pointer, pointer + maxLen);
    let lastSpace = tempLine.lastIndexOf(" ");
    let trimmedLine = tempLine.slice(pointer, pointer + lastSpace + 1);
    finalLine += trimmedLine + "\n";
    pointer += lastSpace + 1;
  }
  console.log(finalLine);
  return finalLine;
};

module.exports = wrap;
