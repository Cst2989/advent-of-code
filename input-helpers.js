export const breakInputByEmptyLine = (input) => {
  const lines = input.split(/\n/);
  let output = [];
  for (var i = 0; i < lines.length; i++) {
    // only push this line if it contains a non whitespace character.
    if (/\S/.test(lines[i])) {
      output.push(lines[i].trim());
    } else {
      output.push('break');
    }
  }
  return output;
};

// A Y
// B X
// C Z
export const breakInputByNewLine = (input) => {
  const lines = input.split(/\n/);
  let output = [];
  for (var i = 0; i < lines.length; i++) {
    // only push this line if it contains a non whitespace character.
    if (/\S/.test(lines[i])) {
      output.push(lines[i].trim());
    }
  }
  return output;
};
